"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutReanimated = useLayoutReanimated;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_reanimated_1 = require("react-native-reanimated");
/**
 * Layout hook.
 * @returns Result.
 */
function useLayoutReanimated() {
    const layout = (0, react_native_reanimated_1.useSharedValue)(undefined);
    const onLayout = react_1.default.useCallback(({ nativeEvent }) => {
        layout.value = nativeEvent.layout;
    }, [layout]);
    return react_1.default.useMemo(() => {
        return { layout, onLayout };
    }, [layout, onLayout]);
}
//# sourceMappingURL=useLayoutReanimated.js.map