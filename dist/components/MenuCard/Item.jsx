"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_paper_1 = require("react-native-paper");
const types_1 = require("../../types");
const common_components_1 = require("../common-components");
const react_misc_1 = require("react-misc");
const core_1 = require("../../core");
const typescript_misc_1 = require("typescript-misc");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("Item", ({ Icon, caption, color, disabled = false, loading = false, onLongPress = typescript_misc_1.fn.noop, onPress = typescript_misc_1.fn.noop, onPressIn = typescript_misc_1.fn.noop, onPressOut = typescript_misc_1.fn.noop, outlined = false, selected = false, selectedColor }) => {
    const { colors, roundness } = (0, contexts_1.useThemeExtended)();
    const backgroundColor = React.useMemo(() => {
        if (outlined)
            return selected ? colors.menuCard.selected.background : undefined;
        return (selected ? selectedColor : color) ?? colors.primary;
    }, [color, colors, outlined, selected, selectedColor]);
    const borderColor = React.useMemo(() => {
        if (outlined)
            return selected ? colors.menuCard.selected.outline : colors.outline;
        return undefined;
    }, [colors, outlined, selected]);
    const loadingDelayed = (0, react_misc_1.useDelayedValue)(loading, loadingDelay, [false]);
    const foregroundColor = React.useMemo(() => {
        if (outlined)
            return selected
                ? colors.menuCard.selected.foreground
                : colors.secondLine;
        return colors.onPrimary;
    }, [colors, outlined, selected]);
    return (<react_native_paper_1.TouchableRipple disabled={disabled} onLongPress={onLongPress} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={{
            backgroundColor,
            borderColor,
            borderRadius: roundness,
            borderWidth: outlined ? 1 : 0,
            opacity: disabled ? disabledOpacity : 1,
            padding: outlined ? padding - 1 : padding
        }}>
        <common_components_1.Row style={{ alignItems: types_1.AlignItems.center, gap }}>
          {loadingDelayed ? (<react_native_paper_1.ActivityIndicator color={foregroundColor} size={iconSize}/>) : (<Icon color={foregroundColor} size={iconSize}/>)}
          <common_components_1.Text style={{ color: foregroundColor }} variant={types_1.TextVariant.labelLarge}>
            {caption}
          </common_components_1.Text>
        </common_components_1.Row>
      </react_native_paper_1.TouchableRipple>);
});
const { disabledOpacity, gap, iconSize, loadingDelay, padding } = core_1.consts.MenuCard.Item;
//# sourceMappingURL=Item.jsx.map