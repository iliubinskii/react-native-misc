"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const core_1 = require("../../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("Container", ({ style, ...props }) => (<react_native_1.View style={[{ gap }, style]} {...props}/>));
const { gap } = core_1.consts.Dense.Container;
//# sourceMappingURL=Container.jsx.map