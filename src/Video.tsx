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
				width={1920}
				height={1080}
				defaultProps={{
					props: "{\"clips\":[{\"video\":\"https://api.spinner.ggio.fr/cache/115.mp4\",\"from\":4166,\"durationInFrames\":1735},{\"video\":\"https://api.spinner.ggio.fr/cache/115.mp4\",\"from\":0,\"durationInFrames\":600}]}"
				}}
			/>
		</>
	);
};
