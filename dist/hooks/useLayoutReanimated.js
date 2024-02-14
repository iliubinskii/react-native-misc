"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutReanimated = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_reanimated_1 = require("react-native-reanimated");
/**
 * Layout hook.
 *
 * @returns Result.
 */
function useLayoutReanimated() {
    const layout = (0, react_native_reanimated_1.useSharedValue)(undefined);
    const onLayout = React.useCallback(({ nativeEvent }) => {
        layout.value = nativeEvent.layout;
    }, [layout]);
    return React.useMemo(() => ({ layout, onLayout }), [layout, onLayout]);
}
exports.useLayoutReanimated = useLayoutReanimated;
//# sourceMappingURL=useLayoutReanimated.js.map