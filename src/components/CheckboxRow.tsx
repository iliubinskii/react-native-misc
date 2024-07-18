import { Row, Text } from "./common-components";
import { AlignItems } from "../types";
import { Checkbox } from "react-native-paper";
import React from "react";
import { consts } from "../core";
import { memo } from "react-misc";

export default memo("CheckboxRow", ({ label, ...props }: Props) => (
  <Row style={{ alignItems: AlignItems.center, gap }}>
    <Checkbox {...props} />
    <Text style={{ flex: 1 }}>{label}</Text>
  </Row>
));

/**
 * @internal
 */
export interface Props extends React.ComponentProps<typeof Checkbox> {
  readonly label: string;
}

const { gap } = consts.CheckboxRow;
