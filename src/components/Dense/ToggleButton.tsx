import * as React from "react";
import { ToggleButton } from "react-native-paper";
import { ToggleButtonStatus } from "../../types";
import type { booleanU } from "typescript-misc";
import color from "color";
import { consts } from "../../core";
import { getRippleColor } from "../../functions";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";

export default memo(
  "ToggleButton",
  ({ checked = false, size = defaultSize, style, ...props }: Props) => {
    const buttonSize = size + 2 * padding;

    const { colors } = useThemeExtended();

    const backgroundColor = checked
      ? colors.dense.toggleButton.checked.background
      : colors.dense.toggleButton.background;

    const iconColor = checked
      ? colors.dense.toggleButton.checked.foreground
      : colors.dense.toggleButton.foreground;

    const rippleColor = React.useMemo(
      () =>
        getRippleColor(
          color(colors.primary).mix(color(colors.onPrimary)).string()
        ),
      [colors]
    );

    return (
      <ToggleButton
        iconColor={iconColor}
        rippleColor={rippleColor}
        size={size}
        status={
          checked ? ToggleButtonStatus.checked : ToggleButtonStatus.unchecked
        }
        style={[
          {
            backgroundColor,
            borderRadius: 0.5 * buttonSize,
            height: buttonSize,
            width: buttonSize
          },
          style
        ]}
        {...props}
      />
    );
  }
);

/**
 * @internal
 */
export interface Props
  extends Omit<React.ComponentProps<typeof ToggleButton>, "status"> {
  readonly checked?: booleanU;
}

const { defaultSize, padding } = consts.Dense.ToggleButton;
