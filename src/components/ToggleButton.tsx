import React from "react";
import { ToggleButton } from "react-native-paper";
import { ToggleButtonStatus } from "../types";
import type { booleanU } from "typescript-misc";
import { memo } from "react-misc";

export default memo("ToggleButton", ({ checked = false, ...props }: Props) => (
  <ToggleButton
    status={checked ? ToggleButtonStatus.checked : ToggleButtonStatus.unchecked}
    {...props}
  />
));

/**
 * @internal
 */
export interface Props
  extends Omit<React.ComponentProps<typeof ToggleButton>, "status"> {
  readonly checked?: booleanU;
}
