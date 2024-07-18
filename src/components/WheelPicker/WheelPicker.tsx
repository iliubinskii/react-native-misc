import BaseWheelPicker from "./BaseWheelPicker";
import Border from "./Border";
import type { NumStr } from "typescript-misc";
import type { Props } from "./BaseWheelPicker";
import React from "react";
import { Row } from "../common-components";
import { memo } from "react-misc";

export default memo("WheelPicker", function WheelPicker<
  T extends NumStr
>(props: Props<T>) {
  return (
    <Row>
      <Border color={props.color} />
      <BaseWheelPicker {...props} />
      <Border color={props.color} />
    </Row>
  );
});
