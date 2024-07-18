import Mask from "./Mask";
import React from "react";
import { View } from "react-native";
import { consts } from "../../../core";
import { memo } from "react-misc";
import type { stringU } from "typescript-misc";
import { useThemeExtended } from "../../../contexts";

export default memo("Border", ({ color }: Props) => {
  const { colors } = useThemeExtended();

  return (
    <Mask height={size * height} width={1}>
      <View
        style={{
          backgroundColor: color ?? colors.foreground,
          height: size * height,
          width: 1
        }}
      />
    </Mask>
  );
});

/**
 * @internal
 */
export interface Props {
  readonly color?: stringU;
}

const { height, size } = consts.WheelPicker;
