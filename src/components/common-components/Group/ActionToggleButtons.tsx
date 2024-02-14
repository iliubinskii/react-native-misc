import * as React from "react";
import { Row } from "../common-common-components";
import type { booleanU } from "typescript-misc";
import { consts } from "../../../core";
import { memo } from "react-misc";

export default memo(
  "ActionToggleButtons",
  ({ start = false, style, ...props }: Props) => (
    <Row
      style={[
        {
          gap,
          marginBottom,
          marginEnd: start ? undefined : marginHorizontal,
          marginStart: start ? marginHorizontal : undefined
        },
        style
      ]}
      {...props}
    />
  )
);

export const { gap, marginBottom, marginHorizontal } =
  consts.Group.ActionToggleButtons;

/**
 * @internal
 */
export interface Props extends React.ComponentProps<typeof Row> {
  readonly start?: booleanU;
}
