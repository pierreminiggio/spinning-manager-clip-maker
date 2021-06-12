import { Sequence } from "remotion";
import Text from "./Entity/Text";
import './font.css'

interface TextSequenceProps {
	height: number
	text: Text
}

export default function TextSequence({ height, text }: TextSequenceProps) {
	const fontWeight = Math.round(height * text.height / 100)
	const backgroundColor = text.backgroundColor
	const shadowWidth = fontWeight / 3 + 'px'
	const shadowHeight = fontWeight / 6 + 'px'
  return <Sequence
		from={text.from}
		durationInFrames={text.durationInFrames}
	>
		<div style={{
			fontFamily: 'Montserrat',
			fontSize: fontWeight,
			lineHeight: 1.15,
			color: text.color,
			textAlign: 'center',
			padding: '0.16em'
		}}>
			<span style={{
				backgroundColor: backgroundColor,
				boxShadow:
				shadowWidth + ' 0 0 '
					+ backgroundColor
					+ ',-' + shadowWidth + ' 0 0 '
					+ backgroundColor
					+ ',' + shadowWidth + ' ' + shadowHeight + ' 0 '
					+ backgroundColor
					+ ',-' + shadowWidth + ' -' + shadowHeight + ' 0 '
					+ backgroundColor
					+ ',' + shadowWidth + ' -' + shadowHeight + ' 0 '
					+ backgroundColor
					+ ',-' + shadowWidth + ' ' + shadowHeight + ' 0 '
					+ backgroundColor
				,
				textShadow: '0 0 100px ' + backgroundColor
			}}>{text.content}</span>
		</div>
	</Sequence>
}