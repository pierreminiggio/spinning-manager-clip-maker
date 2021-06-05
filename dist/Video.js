"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemotionVideo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const ClipMaker_1 = require("./ClipMaker");
const RemotionVideo = () => {
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: jsx_runtime_1.jsx(remotion_1.Composition, { id: "ClipMaker", component: ClipMaker_1.ClipMaker, durationInFrames: 3000, fps: 60, width: 1920, height: 1080, defaultProps: {
                props: "{\"clips\":[{\"video\":\"https://api.spinner.ggio.fr/cache/115.mp4\",\"from\":4166,\"durationInFrames\":1735},{\"video\":\"https://api.spinner.ggio.fr/cache/115.mp4\",\"from\":0,\"durationInFrames\":600}]}"
            } }, void 0) }, void 0));
};
exports.RemotionVideo = RemotionVideo;
