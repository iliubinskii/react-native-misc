"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("ViewIfNotEmpty", ({ children, ...props }) => {
    if (typescript_misc_1.is.empty(children))
        return undefined;
    if (typescript_misc_1.is.array(children) && children.filter(typescript_misc_1.is.not.empty).length === 0)
        return undefined;
    return <react_native_1.View {...props}>{children}</react_native_1.View>;
});
//# sourceMappingURL=ViewIfNotEmpty.jsx.map