import * as React from "react";
import { JustifyContent, TextVariant } from "../../types";
import type { CommonProps } from "react-misc";
import { Text } from "../common-components";
import { TouchableRipple } from "react-native-paper";
import color from "color";
import { consts } from "../../core";
import { fn } from "typescript-misc";
import { getRippleColor } from "../../functions";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";

export default memo(
  "Button",
  ({
    label,
    onLongPress = fn.noop,
    onPress = fn.noop,
    onPressIn = fn.noop,
    onPressOut = fn.noop
  }: Props) => {
    const { colors, roundness } = useThemeExtended();

    const rippleColor = React.useMemo(
      () =>
        getRippleColor(
          color(colors.primary).mix(color(colors.onPrimary)).string()
        ),
      [colors]
    );

    return (
      <TouchableRipple
        onLongPress={onLongPress}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        rippleColor={rippleColor}
        style={{
          backgroundColor: colors.dense.background,
          borderRadius: roundness,
          height,
          justifyContent: JustifyContent.center,
          paddingHorizontal
        }}
      >
        <Text
          style={{ color: colors.dense.foreground }}
          variant={TextVariant.bodyLarge}
        >
          {label}
        </Text>
      </TouchableRipple>
    );
  }
);

/**
 * @internal
 */
export interface Props extends CommonProps.Pressable {
  readonly label: string;
}

const { height, paddingHorizontal } = consts.Dense.Button;
