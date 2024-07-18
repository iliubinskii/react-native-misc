import React from "react";
import { View } from "react-native";
import { is } from "typescript-misc";
import { memo } from "react-misc";

export default memo(
  "ViewIfNotEmpty",
  ({ children, ...props }: React.ComponentProps<typeof View>) => {
    if (is.empty(children)) return undefined;

    if (is.array(children) && children.filter(is.not.empty).length === 0)
      return undefined;

    return <View {...props}>{children}</View>;
  }
);
