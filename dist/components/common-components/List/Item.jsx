"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_common_components_1 = require("../common-common-components");
const react_native_paper_1 = require("react-native-paper");
const react_1 = tslib_1.__importDefault(require("react"));
const types_1 = require("../../../types");
const react_native_1 = require("react-native");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const consts_1 = require("../../../consts");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Item", ({ AlertIcon, Icon, alertIconColor, disabled = false, selected = false, style, title, titleStyle, ...props }) => {
    const { colors } = (0, contexts_1.useThemeExtended)();
    const backgroundColor = react_1.default.useMemo(() => {
        if (disabled)
            return undefined;
        return selected ? colors.list.selected.background : undefined;
    }, [colors, disabled, selected]);
    const color = react_1.default.useMemo(() => {
        if (disabled)
            return colors.onSurfaceDisabled;
        return selected ? colors.list.selected.foreground : undefined;
    }, [colors, disabled, selected]);
    const renderLeft = react_1.default.useCallback(({ style: iconStyle }) => {
        if (Icon)
            return color ? (<react_native_paper_1.List.Icon color={color} icon={Icon} style={iconStyle}/>) : (<react_native_paper_1.List.Icon icon={Icon} style={iconStyle}/>);
        return undefined;
    }, [Icon, color]);
    const renderTitle = react_1.default.useCallback(() => (<common_common_components_1.Row>
          <common_common_components_1.Text numberOfLines={1} style={[{ color }, titleStyle]} variant={types_1.TextVariant.bodyLarge}>
            {title}
          </common_common_components_1.Text>
          {AlertIcon ? (<react_native_1.View style={{
                transform: [
                    { translateX: consts_1.rtlSign * alertIconTranslateX },
                    { translateY: alertIconTranslateY }
                ]
            }}>
              <AlertIcon color={alertIconColor} size={alertIconSize}/>
            </react_native_1.View>) : undefined}
        </common_common_components_1.Row>), [AlertIcon, alertIconColor, color, title, titleStyle]);
    return (<react_native_paper_1.List.Item disabled={disabled} left={renderLeft} style={[{ backgroundColor }, style]} title={renderTitle} {...props}/>);
});
const { alertIconSize, alertIconTranslateX, alertIconTranslateY } = core_1.consts.List.Item;
//# sourceMappingURL=Item.jsx.map