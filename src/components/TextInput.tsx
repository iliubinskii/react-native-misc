import React from "react";
import { TextInput } from "react-native";
import { memo } from "react-misc";
import { textAlignBiDir } from "../consts";

export default memo(
  "TextInput",
  ({ customRef, textAlign, ...props }: Props) => (
    <TextInput
      ref={customRef}
      textAlign={textAlign ?? textAlignBiDir}
      {...props}
    />
  )
);

export interface Props
  extends Omit<React.ComponentProps<typeof TextInput>, "ref"> {
  readonly customRef?: React.MutableRefObject<Ref | null> | undefined;
}

export type Ref = TextInput;
