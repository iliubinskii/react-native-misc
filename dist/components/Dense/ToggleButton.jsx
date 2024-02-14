"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_paper_1 = require("react-native-paper");
const types_1 = require("../../types");
const color_1 = tslib_1.__importDefault(require("color"));
const core_1 = require("../../core");
const functions_1 = require("../../functions");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("ToggleButton", ({ checked = false, size = defaultSize, style, ...props }) => {
    const buttonSize = size + 2 * padding;
    const { colors } = (0, contexts_1.useThemeExtended)();
    const backgroundColor = checked
        ? colors.dense.toggleButton.checked.background
        : colors.dense.toggleButton.background;
    const iconColor = checked
        ? colors.dense.toggleButton.checked.foreground
        : colors.dense.toggleButton.foreground;
    const rippleColor = React.useMemo(() => (0, functions_1.getRippleColor)((0, color_1.default)(colors.primary).mix((0, color_1.default)(colors.onPrimary)).string()), [colors]);
    return (<react_native_paper_1.ToggleButton iconColor={iconColor} rippleColor={rippleColor} size={size} status={checked ? types_1.ToggleButtonStatus.checked : types_1.ToggleButtonStatus.unchecked} style={[
            {
                backgroundColor,
                borderRadius: 0.5 * buttonSize,
                height: buttonSize,
                width: buttonSize
            },
            style
        ]} {...props}/>);
});
const { defaultSize, padding } = core_1.consts.Dense.ToggleButton;
//# sourceMappingURL=ToggleButton.jsx.map