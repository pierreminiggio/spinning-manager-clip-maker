import { Sequence, Video } from "remotion";
import ClipMakerProps from "./Entity/ClipMakerProps";

export const ClipMaker: React.FC<{
	props: string;
}> = ({props}) => {
	
	const clipMakerProps: ClipMakerProps = JSON.parse(props)
	const clips = clipMakerProps.clips

	let from = 0

	return (
		<>
			{clips.map(clip => {
				const clipStart = clip.from
				const durationInFrames = clip.durationInFrames

				const sequence = <Sequence
					from={from}
					durationInFrames={durationInFrames}
				>
					<Video src={clip.video} startFrom={clipStart} endAt={clipStart + durationInFrames} />
				</Sequence>

				from += durationInFrames

				return sequence
			})}
		</>
	);
};
