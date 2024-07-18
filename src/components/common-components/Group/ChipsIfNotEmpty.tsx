import { FlexWrap } from "../../../types";
import React from "react";
import { Row } from "../common-common-components";
import { consts } from "../../../core";
import { is } from "typescript-misc";
import { memo } from "react-misc";

export default memo(
  "ChipsIfNotEmpty",
  ({ children, style, ...props }: React.ComponentProps<typeof Row>) => {
    if (is.empty(children)) return undefined;

    if (is.array(children) && children.filter(is.not.empty).length === 0)
      return undefined;

    return (
      <Row style={[{ flexWrap: FlexWrap.wrap, gap }, style]} {...props}>
        {children}
      </Row>
    );
  }
);

export const { gap } = consts.Group.Chips;
