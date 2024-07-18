"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gap = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("Subsections", ({ style, ...props }) => (<react_native_1.View style={[{ gap: exports.gap }, style]} {...props}/>));
exports.gap = core_1.consts.Group.Subsections.gap;
//# sourceMappingURL=Subsections.jsx.map