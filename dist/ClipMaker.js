"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipMaker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const ClipMaker = ({ props }) => {
    const clipMakerProps = JSON.parse(props);
    const clips = clipMakerProps.clips;
    let from = 0;
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: clips.map((clip, clipIndex) => {
            const clipStart = clip.from;
            const durationInFrames = clip.durationInFrames;
            const sequence = jsx_runtime_1.jsx(remotion_1.Sequence, Object.assign({ from: from, durationInFrames: durationInFrames }, { children: jsx_runtime_1.jsx(remotion_1.Video, { src: clip.video, startFrom: clipStart, endAt: clipStart + durationInFrames }, void 0) }), clipIndex);
            from += durationInFrames;
            return sequence;
        }) }, void 0));
};
exports.ClipMaker = ClipMaker;
