"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_misc_1 = require("react-misc");
const react_native_1 = require("react-native");
exports.default = (0, react_misc_1.memo)("LazyRender", ({ children, placeholder: createPlaceholder }) => {
    const busy = (0, react_misc_1.useBusyState)();
    const [prerendered, setPrerendered] = (0, react_misc_1.useBoolean)();
    const placeholder = React.useMemo(() => (prerendered ? undefined : createPlaceholder()), [createPlaceholder, prerendered]);
    (0, react_misc_1.useDeferredEffect)(() => {
        if (busy) {
            // Wait
        }
        else
            setPrerendered();
    }, [busy]);
    return <react_native_1.View>{prerendered ? children : placeholder}</react_native_1.View>;
});
//# sourceMappingURL=LazyRender.jsx.map