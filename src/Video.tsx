import {Composition} from 'remotion';
import {ClipMaker} from './ClipMaker';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="ClipMaker"
				component={ClipMaker}
				durationInFrames={3000}
				fps={60}
				width={1080}
				height={1920}
				defaultProps={{
					props: "{\"clips\":[{\"video\":\"https://api.spinner.ggio.fr/cache/115.mp4\",\"from\":4166,\"durationInFrames\":1735,\"moves\":{\"0\":{\"offset\":0, \"transition\": \"none\"},\"600\":{\"offset\":28, \"transition\": \"none\"},\"1200\":{\"offset\":67, \"transition\": \"smooth\"}}},{\"video\":\"https://api.spinner.ggio.fr/cache/115.mp4\",\"from\":0,\"durationInFrames\":600, \"moves\": {}}]}"
				}}
			/>
		</>
	);
};
