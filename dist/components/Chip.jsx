"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("./common-components");
const typescript_misc_1 = require("typescript-misc");
const types_1 = require("../types");
const react_native_paper_1 = require("react-native-paper");
const core_1 = require("../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../contexts");
exports.default = (0, react_misc_1.memo)("Chip", ({ Icon, label, onLongPress = typescript_misc_1.fn.noop, onPress = typescript_misc_1.fn.noop, onPressIn = typescript_misc_1.fn.noop, onPressOut = typescript_misc_1.fn.noop }) => {
    const { colors, roundness } = (0, contexts_1.useThemeExtended)();
    return (<react_native_paper_1.TouchableRipple disabled={onLongPress === typescript_misc_1.fn.noop &&
            onPress === typescript_misc_1.fn.noop &&
            onPressIn === typescript_misc_1.fn.noop &&
            onPressOut === typescript_misc_1.fn.noop} onLongPress={onLongPress} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
        <common_components_1.Row style={{
            alignItems: types_1.AlignItems.center,
            backgroundColor: colors.chip.background,
            borderColor: colors.chip.outline,
            borderRadius: roundness,
            borderWidth: 1,
            gap,
            paddingHorizontal,
            paddingVertical
        }}>
          {Icon ? (<Icon color={colors.chip.foreground} size={iconSize}/>) : undefined}
          {typescript_misc_1.is.not.empty(label) ? (<common_components_1.Text style={{ color: colors.chip.foreground }}>{label}</common_components_1.Text>) : undefined}
        </common_components_1.Row>
      </react_native_paper_1.TouchableRipple>);
});
const { gap, iconSize, paddingHorizontal, paddingVertical } = core_1.consts.Chip;
//# sourceMappingURL=Chip.jsx.map