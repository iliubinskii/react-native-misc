import React from "react";
import { Row } from "../common-common-components";
import { consts } from "../../../core";
import { memo } from "react-misc";

export default memo(
  "Chips",
  ({ style, ...props }: React.ComponentProps<typeof Row>) => (
    <Row style={[{ gap }, style]} {...props} />
  )
);

export const { gap } = consts.Group.Chips;
