"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../../types");
const react_1 = tslib_1.__importDefault(require("react"));
const common_components_1 = require("../common-components");
const react_native_paper_1 = require("react-native-paper");
const color_1 = tslib_1.__importDefault(require("color"));
const core_1 = require("../../core");
const typescript_misc_1 = require("typescript-misc");
const functions_1 = require("../../functions");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("Button", ({ label, onLongPress = typescript_misc_1.fn.noop, onPress = typescript_misc_1.fn.noop, onPressIn = typescript_misc_1.fn.noop, onPressOut = typescript_misc_1.fn.noop }) => {
    const { colors, roundness } = (0, contexts_1.useThemeExtended)();
    const rippleColor = react_1.default.useMemo(() => (0, functions_1.getRippleColor)((0, color_1.default)(colors.primary).mix((0, color_1.default)(colors.onPrimary)).string()), [colors]);
    return (<react_native_paper_1.TouchableRipple onLongPress={onLongPress} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} rippleColor={rippleColor} style={{
            backgroundColor: colors.dense.background,
            borderRadius: roundness,
            height,
            justifyContent: types_1.JustifyContent.center,
            paddingHorizontal
        }}>
        <common_components_1.Text style={{ color: colors.dense.foreground }} variant={types_1.TextVariant.bodyLarge}>
          {label}
        </common_components_1.Text>
      </react_native_paper_1.TouchableRipple>);
});
const { height, paddingHorizontal } = core_1.consts.Dense.Button;
//# sourceMappingURL=Button.jsx.map