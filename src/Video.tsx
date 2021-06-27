import {Composition, getInputProps} from 'remotion';
import {ClipMaker} from './ClipMaker';

export const RemotionVideo: React.FC = () => {
	const {durationInFrames, fps, width, height} = getInputProps()

	return (
		<>
			<Composition
				id="ClipMaker"
				component={ClipMaker}
				durationInFrames={durationInFrames ?? 600}
				fps={fps ?? 60}
				width={width ?? 1080}
				height={height ?? 1920}
				defaultProps={{
					props: "{\"clips\":[{\"video\":\"https://api.spinner.ggio.fr/cache/115.mp4\",\"from\":0,\"durationInFrames\":600,\"moves\":{\"0\":{\"offset\":0,\"transition\":\"none\"},\"144\":{\"offset\":25.474268292682925,\"transition\":\"smooth\"},\"268\":{\"offset\":68.29268292682927,\"transition\":\"none\"},\"600\":{\"offset\":0,\"transition\":\"none\"}}}],\"texts\":[{\"content\":\"Je suis un joli text\",\"from\":0,\"durationInFrames\":600,\"height\":7,\"color\": \"#fff\",\"backgroundColor\":\"rgb(255,165,0)\",\"backgroundColorOpacity\":0.7,\"leftOffset\":20,\"rightOffset\":20,\"topOffset\":40}]}"
				}}
			/>
		</>
	);
};
