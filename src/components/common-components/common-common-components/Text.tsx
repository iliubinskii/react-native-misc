import { HyphenationFrequency, TextVariant } from "../../../types";
import React from "react";
import { Text } from "react-native-paper";
import { memo } from "react-misc";

export default memo(
  "Text",
  ({
    android_hyphenationFrequency,
    variant,
    ...props
  }: React.ComponentProps<typeof Text>) => (
    <Text
      android_hyphenationFrequency={
        android_hyphenationFrequency ?? HyphenationFrequency.full
      }
      variant={variant ?? TextVariant.bodyMedium}
      {...props}
    />
  )
);
