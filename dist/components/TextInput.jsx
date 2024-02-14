"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const react_misc_1 = require("react-misc");
const consts_1 = require("../consts");
exports.default = (0, react_misc_1.memo)("TextInput", ({ customRef, textAlign, ...props }) => (<react_native_1.TextInput ref={customRef} textAlign={textAlign ?? consts_1.textAlignBiDir} {...props}/>));
//# sourceMappingURL=TextInput.jsx.map