"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gap = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_common_components_1 = require("../common-common-components");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("Chips", ({ style, ...props }) => (<common_common_components_1.Row style={[{ gap: exports.gap }, style]} {...props}/>));
exports.gap = core_1.consts.Group.Chips.gap;
//# sourceMappingURL=Chips.jsx.map