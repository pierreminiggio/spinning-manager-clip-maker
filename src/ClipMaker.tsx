import { FixedSizeArray } from 'fixed-size-array';
import { Sequence, useCurrentFrame, useVideoConfig, Video } from "remotion";
import ClipMakerProps from "./Entity/ClipMakerProps";
import Move from "./Entity/Move";
import Moves from "./Entity/Moves";
import Transition from './Entity/Transition';
import TextSequence from './TextSequence';

export const ClipMaker: React.FC<{
	props: string;
}> = ({props}) => {
	
	const clipMakerProps: ClipMakerProps = JSON.parse(props)
	const clips = clipMakerProps.clips
	const texts = clipMakerProps.texts
	const frame = useCurrentFrame()
	const {height} = useVideoConfig()

	let from = 0

	return (
		<>
			{clips.map((clip, clipIndex) => {
				const clipStart = clip.from
				const durationInFrames = clip.durationInFrames
				let leftOffset = 0
				const clipFrame = Math.max(frame - from, 0)
				const moves = clip.moves

				if (moves && Object.keys(moves).length) {
					const [currentMove, nextMove] = getCurrentAndNextMove(moves, clipFrame)
					
					if (nextMove === null || nextMove.move.transition === Transition.Raw) {
						leftOffset = currentMove.move.offset
					} else if (nextMove && nextMove.move.transition === Transition.Smooth) {
						const currentMoveOffset = currentMove.move.offset
						const nextMoveOffset = nextMove.move.offset
						const offsetDifference = nextMoveOffset - currentMoveOffset
						const currentMoveStartFrame: number = currentMove.startFrame
						const nextMoveStartFrame: number = nextMove.startFrame
						const startFrameDifference = nextMoveStartFrame - currentMoveStartFrame
						const animationProgress = 1 - ((nextMoveStartFrame - clipFrame) / startFrameDifference)

						leftOffset = currentMoveOffset + animationProgress * offsetDifference
					}
				}

				const sequence = <Sequence
					key={clipIndex}
					from={from}
					durationInFrames={durationInFrames}
				>
					<Video
						src={clip.video}
						startFrom={clipStart}
						endAt={clipStart + durationInFrames}
						height={'100%'}
						style={{
							transform: 'translateX(-' + leftOffset.toString() + '%)'
						}}
					/>
				</Sequence>

				from += durationInFrames

				return sequence
			})}
			{texts.map((text, textIndex) => <TextSequence key={textIndex} height={height} text={text} />)}
		</>
	);
};

function getCurrentAndNextMove(moves: Moves, frame: number): CurrentAndNextMove
{

	const moveTimes = Object.keys(moves).map(moveTime => parseInt(moveTime))
	const moveTimeKeys: number[] = [...Array(moveTimes.length).keys()]

	let currentMoveWithStartFrame: MoveWithStartFrame|null = null
	let nextMoveWithStartFrame: MoveWithStartFrame|null = null
	
	for (const moveTimeKey in moveTimeKeys) {
		const currentIndexedMoveTimeKey = parseInt(moveTimeKey)
		const currentIndexedMoveTime = moveTimes[currentIndexedMoveTimeKey]
		const nextIndexedMoveKey = currentIndexedMoveTimeKey + 1
		const nextIndexedMoveTime = moveTimes[nextIndexedMoveKey]
		
		if (typeof nextIndexedMoveTime !== 'undefined' && nextIndexedMoveTime <= frame) {
			continue
		}
		
		currentMoveWithStartFrame = {startFrame: currentIndexedMoveTime, move: moves[currentIndexedMoveTime]}
		const nextMove = moves[nextIndexedMoveTime] || null

		if (nextMove) {
			nextMoveWithStartFrame = {startFrame: nextIndexedMoveTime, move: nextMove}
		}
		break
	}

	return [currentMoveWithStartFrame, nextMoveWithStartFrame];
}

interface MoveWithStartFrame {
	startFrame: number
	move: Move 
}

type CurrentAndNextMove = FixedSizeArray<2, MoveWithStartFrame|null>