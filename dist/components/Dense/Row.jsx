"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("../common-components");
const core_1 = require("../../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("Row", ({ style, ...props }) => (<common_components_1.Row style={[{ gap }, style]} {...props}/>));
const { gap } = core_1.consts.Dense.Row;
//# sourceMappingURL=Row.jsx.map