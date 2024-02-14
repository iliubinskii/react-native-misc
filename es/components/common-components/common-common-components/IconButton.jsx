import * as React from "react";
import { AlignItems, JustifyContent, Position } from "../../../types";
import { Pressable, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { o } from "typescript-misc";
import { useThemeExtended } from "../../../contexts";
export default memo("IconButton", ({ AlertIcon, Icon, alertIconColor, disabled = false, iconColor, keepLongPressEnabled = false, onLongPress, onPress, onPressIn, onPressOut, padding = defaultPadding, ripple = true, size = defaultSize, style }) => {
    const Component = ripple ? TouchableRipple : Pressable;
    const buttonSize = size + 2 * padding;
    const { colors } = useThemeExtended();
    return (<Component {...o.removeUndefinedKeys({
        borderless: true,
        disabled: false,
        onLongPress: disabled && !keepLongPressEnabled ? undefined : onLongPress,
        onPress: disabled ? undefined : onPress,
        onPressIn: disabled ? undefined : onPressIn,
        onPressOut: disabled ? undefined : onPressOut,
        style: [
            {
                alignItems: AlignItems.center,
                borderRadius: 0.5 * buttonSize,
                height: buttonSize,
                justifyContent: JustifyContent.center,
                width: buttonSize
            },
            style
        ]
    })}>
        <View>
          <Icon color={disabled ? colors.onSurfaceDisabled : iconColor} size={size}/>
          {AlertIcon ? (<View style={{
                end: alertIconEnd,
                position: Position.absolute,
                top: alertIconTop
            }}>
              <AlertIcon color={alertIconColor} size={alertIconSize}/>
            </View>) : undefined}
        </View>
      </Component>);
});
const { alertIconEnd, alertIconSize, alertIconTop, defaultPadding, defaultSize } = consts.IconButton;
//# sourceMappingURL=IconButton.jsx.map