"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_paper_1 = require("react-native-paper");
const types_1 = require("../types");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("ToggleButton", ({ checked = false, ...props }) => (<react_native_paper_1.ToggleButton status={checked ? types_1.ToggleButtonStatus.checked : types_1.ToggleButtonStatus.unchecked} {...props}/>));
//# sourceMappingURL=ToggleButton.jsx.map