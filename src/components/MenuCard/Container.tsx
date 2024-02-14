import * as React from "react";
import type { CommonProps } from "react-misc";
import { View } from "react-native";
import { consts } from "../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";

export default memo("Container", ({ children, width }: Props) => {
  const { colors } = useThemeExtended();

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        gap,
        padding,
        width
      }}
    >
      {children}
    </View>
  );
});

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly width: number;
}

const { gap, padding } = consts.MenuCard.Container;
