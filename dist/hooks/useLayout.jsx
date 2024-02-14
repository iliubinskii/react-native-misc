"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayout = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
/**
 * Layout hook.
 *
 * @returns Result.
 */
function useLayout() {
    const [layout, setLayout] = React.useState();
    const clearLayout = React.useCallback(() => {
        setLayout(undefined);
    }, []);
    const onLayout = React.useCallback(({ nativeEvent }) => {
        setLayout(nativeEvent.layout);
    }, []);
    return React.useMemo(() => typescript_misc_1.o.removeUndefinedKeys({ clearLayout, layout, onLayout }), [clearLayout, layout, onLayout]);
}
exports.useLayout = useLayout;
//# sourceMappingURL=useLayout.jsx.map