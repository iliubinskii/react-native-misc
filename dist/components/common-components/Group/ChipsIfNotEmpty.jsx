"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gap = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const types_1 = require("../../../types");
const common_common_components_1 = require("../common-common-components");
const core_1 = require("../../../core");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("ChipsIfNotEmpty", ({ children, style, ...props }) => {
    if (typescript_misc_1.is.empty(children))
        return undefined;
    if (typescript_misc_1.is.array(children) && children.filter(typescript_misc_1.is.not.empty).length === 0)
        return undefined;
    return (<common_common_components_1.Row style={[{ flexWrap: types_1.FlexWrap.wrap, gap: exports.gap }, style]} {...props}>
        {children}
      </common_common_components_1.Row>);
});
exports.gap = core_1.consts.Group.Chips.gap;
//# sourceMappingURL=ChipsIfNotEmpty.jsx.map