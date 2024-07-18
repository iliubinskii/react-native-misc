import React from "react";
import { View } from "react-native";
import { consts } from "../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../contexts";

export default memo(
  "InfoBlock",
  ({ style, ...props }: React.ComponentProps<typeof View>) => {
    const { colors, roundness } = useThemeExtended();

    return (
      <View
        style={[
          {
            borderColor: colors.outline,
            borderRadius: roundness,
            borderWidth,
            padding
          },
          style
        ]}
        {...props}
      />
    );
  }
);

const { borderWidth, padding } = consts.InfoBlock;
