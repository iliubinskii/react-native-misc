import { FlexDirection } from "../../../types";
import React from "react";
import { View } from "react-native";
import { memo } from "react-misc";

export default memo(
  "Row",
  ({ style, ...props }: React.ComponentProps<typeof View>) => (
    <View style={[{ flexDirection: FlexDirection.row }, style]} {...props} />
  )
);
