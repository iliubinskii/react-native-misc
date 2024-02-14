"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const Mask_1 = tslib_1.__importDefault(require("./Mask"));
const react_native_1 = require("react-native");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Border", ({ color }) => {
    const { colors } = (0, contexts_1.useThemeExtended)();
    return (<Mask_1.default height={size * height} width={1}>
      <react_native_1.View style={{
            backgroundColor: color ?? colors.foreground,
            height: size * height,
            width: 1
        }}/>
    </Mask_1.default>);
});
const { height, size } = core_1.consts.WheelPicker;
//# sourceMappingURL=index.jsx.map