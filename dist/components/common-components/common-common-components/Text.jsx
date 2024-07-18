"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../../../types");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_paper_1 = require("react-native-paper");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("Text", ({ android_hyphenationFrequency, variant, ...props }) => (<react_native_paper_1.Text android_hyphenationFrequency={android_hyphenationFrequency ?? types_1.HyphenationFrequency.full} variant={variant ?? types_1.TextVariant.bodyMedium} {...props}/>));
//# sourceMappingURL=Text.jsx.map