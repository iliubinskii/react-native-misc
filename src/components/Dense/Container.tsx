import * as React from "react";
import { View } from "react-native";
import { consts } from "../../core";
import { memo } from "react-misc";

export default memo(
  "Container",
  ({ style, ...props }: React.ComponentProps<typeof View>) => (
    <View style={[{ gap }, style]} {...props} />
  )
);

const { gap } = consts.Dense.Container;
