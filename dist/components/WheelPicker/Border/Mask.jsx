"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_linear_gradient_1 = require("react-native-linear-gradient");
const masked_view_1 = tslib_1.__importDefault(require("@react-native-masked-view/masked-view"));
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
exports.default = (0, react_misc_1.memo)("Mask", ({ children, height, width }) => (<masked_view_1.default maskElement={<react_native_linear_gradient_1.LinearGradient colors={(0, typescript_misc_1.unfreeze)(colors)} style={{ height, width }}/>} style={{ height, width }}>
    {children}
  </masked_view_1.default>));
const { colors } = core_1.consts.WheelPicker.Border.Mask;
//# sourceMappingURL=Mask.jsx.map