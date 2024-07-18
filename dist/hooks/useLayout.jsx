"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayout = useLayout;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Layout hook.
 * @returns Result.
 */
function useLayout() {
    const [layout, setLayout] = react_1.default.useState();
    const clearLayout = react_1.default.useCallback(() => {
        setLayout(undefined);
    }, []);
    const onLayout = react_1.default.useCallback(({ nativeEvent }) => {
        setLayout(nativeEvent.layout);
    }, []);
    return react_1.default.useMemo(() => {
        return { clearLayout, layout, onLayout };
    }, [clearLayout, layout, onLayout]);
}
//# sourceMappingURL=useLayout.jsx.map