"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../../../types");
const react_native_1 = require("react-native");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_paper_1 = require("react-native-paper");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("IconButton", ({ AlertIcon, Icon, alertIconColor, disabled = false, iconColor, keepLongPressEnabled = false, onLongPress, onPress, onPressIn, onPressOut, padding = defaultPadding, ripple = true, size = defaultSize, style }) => {
    const Component = ripple ? react_native_paper_1.TouchableRipple : react_native_1.Pressable;
    const buttonSize = size + 2 * padding;
    const { colors } = (0, contexts_1.useThemeExtended)();
    return (<Component {...typescript_misc_1.o.removeUndefinedKeys({
        borderless: true,
        disabled: false,
        onLongPress: disabled && !keepLongPressEnabled ? undefined : onLongPress,
        onPress: disabled ? undefined : onPress,
        onPressIn: disabled ? undefined : onPressIn,
        onPressOut: disabled ? undefined : onPressOut,
        style: [
            {
                alignItems: types_1.AlignItems.center,
                borderRadius: 0.5 * buttonSize,
                height: buttonSize,
                justifyContent: types_1.JustifyContent.center,
                width: buttonSize
            },
            style
        ]
    })}>
        <react_native_1.View>
          <Icon color={disabled ? colors.onSurfaceDisabled : iconColor} size={size}/>
          {AlertIcon ? (<react_native_1.View style={{
                end: alertIconEnd,
                position: types_1.Position.absolute,
                top: alertIconTop
            }}>
              <AlertIcon color={alertIconColor} size={alertIconSize}/>
            </react_native_1.View>) : undefined}
        </react_native_1.View>
      </Component>);
});
const { alertIconEnd, alertIconSize, alertIconTop, defaultPadding, defaultSize } = core_1.consts.IconButton;
//# sourceMappingURL=IconButton.jsx.map