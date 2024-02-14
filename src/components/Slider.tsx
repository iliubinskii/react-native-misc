import * as React from "react";
import Slider from "@react-native-community/slider";
import { Text } from "./common-components";
import { View } from "react-native";
import { consts } from "../core";
import { is } from "typescript-misc";
import { memo } from "react-misc";
import type { stringU } from "typescript-misc";
import { useThemeExtended } from "../contexts";

export default memo("Slider", ({ label, ...props }: Props) => {
  const { colors } = useThemeExtended();

  return is.not.empty(label) ? (
    <View>
      <Text>{label}</Text>
      <Slider
        maximumTrackTintColor={colors.elevation.level5}
        minimumTrackTintColor={colors.elevation.level5}
        style={{ marginVertical }}
        thumbTintColor={colors.primary}
        {...props}
      />
    </View>
  ) : (
    <Slider
      maximumTrackTintColor={colors.elevation.level5}
      minimumTrackTintColor={colors.elevation.level5}
      style={{ marginVertical }}
      thumbTintColor={colors.primary}
      {...props}
    />
  );
});

/**
 * @internal
 */
export interface Props extends React.ComponentProps<typeof Slider> {
  readonly label?: stringU;
}

const { marginVertical } = consts.Slider;
