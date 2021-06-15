"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
require("./font.css");
function TextSequence({ height, text }) {
    const fontWeight = Math.round(height * text.height / 100);
    const backgroundColor = text.backgroundColor;
    const shadowWidth = fontWeight / 3;
    const shadowHeight = fontWeight / 6;
    const shadowWidthPx = shadowWidth + 'px';
    const shadowHeightPx = shadowHeight + 'px';
    const twoShadowHeightPx = shadowHeight * 2 + 'px';
    const leftOffset = text.leftOffset;
    const rightOffset = text.rightOffset;
    const topOffset = text.topOffset;
    const textDivStyle = {
        position: 'absolute',
        width: (100 - leftOffset - rightOffset) + '%',
        left: leftOffset + '%',
        top: topOffset + '%',
        right: rightOffset + '%'
    };
    return jsx_runtime_1.jsx(remotion_1.Sequence, Object.assign({ from: text.from, durationInFrames: text.durationInFrames }, { children: jsx_runtime_1.jsxs("div", Object.assign({ style: {
                fontFamily: 'Montserrat',
                fontSize: fontWeight,
                lineHeight: 1.15,
                color: text.color,
                textAlign: 'center',
                paddingTop: twoShadowHeightPx,
                position: 'relative',
                width: '100%'
            } }, { children: [jsx_runtime_1.jsx("div", Object.assign({ style: textDivStyle }, { children: jsx_runtime_1.jsx("span", Object.assign({ style: {
                            backgroundColor: backgroundColor,
                            color: 'transparent',
                            boxShadow: shadowWidthPx + ' 0 0 '
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
                                + backgroundColor,
                            opacity: text.backgroundColorOpacity
                        } }, { children: text.content }), void 0) }), void 0),
                jsx_runtime_1.jsx("div", Object.assign({ style: textDivStyle }, { children: text.content }), void 0)] }), void 0) }), void 0);
}
exports.default = TextSequence;
