"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const core_1 = require("../../core");
const react_misc_1 = require("react-misc");
const consts_1 = require("../../consts");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("TextInput", ({ style, textAlign, ...props }) => {
    const { colors, roundness } = (0, contexts_1.useThemeExtended)();
    return (<react_native_1.TextInput style={[
            {
                backgroundColor: colors.dense.background,
                borderRadius: roundness,
                color: colors.dense.foreground,
                height,
                paddingHorizontal
            },
            style
        ]} textAlign={textAlign ?? consts_1.textAlignBiDir} {...props}/>);
});
const { height, paddingHorizontal } = core_1.consts.Dense.TextInput;
//# sourceMappingURL=TextInput.jsx.map