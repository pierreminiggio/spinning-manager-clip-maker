"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipMaker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const Transition_1 = __importDefault(require("./Entity/Transition"));
const TextSequence_1 = __importDefault(require("./TextSequence"));
const ClipMaker = ({ props }) => {
    const clipMakerProps = JSON.parse(props);
    const clips = clipMakerProps.clips;
    const texts = clipMakerProps.texts;
    const frame = remotion_1.useCurrentFrame();
    const { height } = remotion_1.useVideoConfig();
    let from = 0;
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [clips.map((clip, clipIndex) => {
                const clipStart = clip.from;
                const durationInFrames = clip.durationInFrames;
                let leftOffset = 0;
                const clipFrame = Math.max(frame - from, 0);
                const moves = clip.moves;
                if (moves && Object.keys(moves).length) {
                    const [currentMove, nextMove] = getCurrentAndNextMove(moves, clipFrame);
                    if (nextMove === null || nextMove.move.transition === Transition_1.default.Raw) {
                        leftOffset = currentMove.move.offset;
                    }
                    else if (nextMove && nextMove.move.transition === Transition_1.default.Smooth) {
                        const currentMoveOffset = currentMove.move.offset;
                        const nextMoveOffset = nextMove.move.offset;
                        const offsetDifference = nextMoveOffset - currentMoveOffset;
                        const currentMoveStartFrame = currentMove.startFrame;
                        const nextMoveStartFrame = nextMove.startFrame;
                        const startFrameDifference = nextMoveStartFrame - currentMoveStartFrame;
                        const animationProgress = 1 - ((nextMoveStartFrame - clipFrame) / startFrameDifference);
                        leftOffset = currentMoveOffset + animationProgress * offsetDifference;
                    }
                }
                const sequence = jsx_runtime_1.jsx(remotion_1.Sequence, Object.assign({ from: from, durationInFrames: durationInFrames }, { children: jsx_runtime_1.jsx(remotion_1.Video, { src: clip.video, startFrom: clipStart, endAt: clipStart + durationInFrames, height: '100%', style: {
                            transform: 'translateX(-' + leftOffset.toString() + '%)'
                        } }, void 0) }), clipIndex);
                from += durationInFrames;
                return sequence;
            }),
            texts.map((text, textIndex) => jsx_runtime_1.jsx(TextSequence_1.default, { height: height, text: text }, textIndex))] }, void 0));
};
exports.ClipMaker = ClipMaker;
function getCurrentAndNextMove(moves, frame) {
    const moveTimes = Object.keys(moves).map(moveTime => parseInt(moveTime));
    const moveTimeKeys = [...Array(moveTimes.length).keys()];
    let currentMoveWithStartFrame = null;
    let nextMoveWithStartFrame = null;
    for (const moveTimeKey in moveTimeKeys) {
        const currentIndexedMoveTimeKey = parseInt(moveTimeKey);
        const currentIndexedMoveTime = moveTimes[currentIndexedMoveTimeKey];
        const nextIndexedMoveKey = currentIndexedMoveTimeKey + 1;
        const nextIndexedMoveTime = moveTimes[nextIndexedMoveKey];
        if (typeof nextIndexedMoveTime !== 'undefined' && nextIndexedMoveTime <= frame) {
            continue;
        }
        currentMoveWithStartFrame = { startFrame: currentIndexedMoveTime, move: moves[currentIndexedMoveTime] };
        const nextMove = moves[nextIndexedMoveTime] || null;
        if (nextMove) {
            nextMoveWithStartFrame = { startFrame: nextIndexedMoveTime, move: nextMove };
        }
        break;
    }
    return [currentMoveWithStartFrame, nextMoveWithStartFrame];
}
