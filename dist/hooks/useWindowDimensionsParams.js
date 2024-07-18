"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowDimensionsParams = useWindowDimensionsParams;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const consts_1 = require("../consts");
const react_native_1 = require("react-native");
/**
 * Window dimensions hook.
 * @param translucent - Whether status bar is translucent.
 * @returns Window dimensions.
 */
function useWindowDimensionsParams(translucent) {
    const { fontScale, height, scale, width } = (0, react_native_1.useWindowDimensions)();
    return react_1.default.useMemo(() => {
        return {
            fontScale,
            height: translucent ? height + consts_1.statusBarHeight : height,
            scale,
            width
        };
    }, [fontScale, height, scale, translucent, width]);
}
//# sourceMappingURL=useWindowDimensionsParams.js.map