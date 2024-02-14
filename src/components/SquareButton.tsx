import * as React from "react";
import { Button } from "react-native-paper";
import { ButtonMode } from "../types";
import { consts } from "../core";
import { memo } from "react-misc";

export default memo("SquareButton", ({ contentStyle, ...props }: Props) => (
  <Button
    contentStyle={[{ paddingVertical }, contentStyle]}
    mode={ButtonMode.contained}
    theme={{ roundness }}
    {...props}
  />
));

/**
 * @internal
 */
export interface Props
  extends Omit<React.ComponentProps<typeof Button>, "mode" | "theme"> {}

const { paddingVertical, roundness } = consts.SquareButton;
