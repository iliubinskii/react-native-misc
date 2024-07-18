import React from "react";
import { View } from "react-native";
import { consts } from "../../../core";
import { memo } from "react-misc";

export default memo(
  "TextInputs",
  ({ style, ...props }: React.ComponentProps<typeof View>) => (
    <View style={[{ gap }, style]} {...props} />
  )
);

export const { gap } = consts.Group.TextInputs;
