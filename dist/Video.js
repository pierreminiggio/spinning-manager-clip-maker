"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemotionVideo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const ClipMaker_1 = require("./ClipMaker");
const RemotionVideo = () => {
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: jsx_runtime_1.jsx(remotion_1.Composition, { id: "ClipMaker", component: ClipMaker_1.ClipMaker, durationInFrames: 600, fps: 60, width: 1080, height: 1920, defaultProps: {
                props: "{\"clips\":[{\"video\":\"https://api.spinner.ggio.fr/cache/115.mp4\",\"from\":0,\"durationInFrames\":600,\"moves\":{\"0\":{\"offset\":0,\"transition\":\"none\"},\"144\":{\"offset\":25.474268292682925,\"transition\":\"smooth\"},\"268\":{\"offset\":68.29268292682927,\"transition\":\"none\"},\"600\":{\"offset\":0,\"transition\":\"none\"}}}],\"texts\":[{\"content\":\"Je suis un joli text\",\"from\":0,\"durationInFrames\":600,\"height\":7,\"color\": \"#fff\",\"backgroundColor\":\"rgb(255,165,0)\",\"backgroundColorOpacity\":0.7,\"leftOffset\":20,\"rightOffset\":20,\"topOffset\":40}]}"
            } }, void 0) }, void 0));
};
exports.RemotionVideo = RemotionVideo;
