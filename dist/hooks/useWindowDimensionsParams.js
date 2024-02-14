"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowDimensionsParams = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const consts_1 = require("../consts");
const react_native_1 = require("react-native");
/**
 * Window dimensions hook.
 *
 * @param translucent - Whether status bar is translucent.
 * @returns Window dimensions.
 */
function useWindowDimensionsParams(translucent) {
    const { fontScale, height, scale, width } = (0, react_native_1.useWindowDimensions)();
    return React.useMemo(() => ({
        fontScale,
        height: translucent ? height + consts_1.statusBarHeight : height,
        scale,
        width
    }), [fontScale, height, scale, translucent, width]);
}
exports.useWindowDimensionsParams = useWindowDimensionsParams;
//# sourceMappingURL=useWindowDimensionsParams.js.map