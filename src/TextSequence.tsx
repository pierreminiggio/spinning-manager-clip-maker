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
	const shadowWidth = fontWeight / 3
	const shadowHeight = fontWeight / 6
	const shadowWidthPx = shadowWidth + 'px'
	const shadowHeightPx = shadowHeight + 'px'
	const twoShadowHeightPx = shadowHeight * 2 + 'px'
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
			paddingTop: 'calc(' + twoShadowHeightPx + ' + 0px)',
			position: 'relative',
			width: '100%'
		}}>
			<div style={{position: 'absolute', width: '100%'}}>
				<span style={{
					backgroundColor: backgroundColor,
					color: 'transparent',
					boxShadow:
					shadowWidthPx + ' 0 0 '
						+ backgroundColor
						+ ',-' + shadowWidthPx + ' 0 0 '
						+ backgroundColor
						+ ',' + shadowWidthPx + ' ' + shadowHeightPx + ' 0 '
						+ backgroundColor
						+ ',-' + shadowWidthPx + ' -' + shadowHeightPx + ' 0 '
						+ backgroundColor
						+ ',' + shadowWidthPx + ' -' + shadowHeightPx + ' 0 '
						+ backgroundColor
						+ ',-' + shadowWidthPx + ' ' + shadowHeightPx + ' 0 '
						+ backgroundColor
					,
					opacity: text.backgroundColorOpacity
				}}>{text.content}</span>
			</div>
			<div style={{position: 'absolute', width: '100%'}}>
				{text.content}
			</div>
		</div>
	</Sequence>
}