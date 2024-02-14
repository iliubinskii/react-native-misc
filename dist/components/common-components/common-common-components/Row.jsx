"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const types_1 = require("../../../types");
const react_native_1 = require("react-native");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("Row", ({ style, ...props }) => (<react_native_1.View style={[{ flexDirection: types_1.FlexDirection.row }, style]} {...props}/>));
//# sourceMappingURL=Row.jsx.map