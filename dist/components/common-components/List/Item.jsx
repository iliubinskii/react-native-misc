"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_common_components_1 = require("../common-common-components");
const react_native_paper_1 = require("react-native-paper");
const types_1 = require("../../../types");
const react_native_1 = require("react-native");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
const consts_1 = require("../../../consts");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Item", ({ AlertIcon, Icon, alertIconColor, disabled = false, selected = false, style, title, titleStyle, ...props }) => {
    const { colors } = (0, contexts_1.useThemeExtended)();
    const backgroundColor = React.useMemo(() => {
        if (disabled)
            return undefined;
        return selected ? colors.list.selected.background : undefined;
    }, [colors, disabled, selected]);
    const color = React.useMemo(() => {
        if (disabled)
            return colors.onSurfaceDisabled;
        return selected ? colors.list.selected.foreground : undefined;
    }, [colors, disabled, selected]);
    const renderLeft = React.useCallback(({ style: iconStyle }) => Icon ? (<react_native_paper_1.List.Icon {...typescript_misc_1.o.removeUndefinedKeys({ color, icon: Icon, style: iconStyle })}/>) : undefined, [Icon, color]);
    const renderTitle = React.useCallback(() => (<common_common_components_1.Row>
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