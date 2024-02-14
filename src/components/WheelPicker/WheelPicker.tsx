import * as React from "react";
import BaseWheelPicker from "./BaseWheelPicker";
import Border from "./Border";
import type { NumStr } from "typescript-misc";
import type { Props } from "./BaseWheelPicker";
import { Row } from "../common-components";
import { memo } from "react-misc";

export default memo(
  "WheelPicker",
  // eslint-disable-next-line prefer-arrow-callback -- Ok
  function <T extends NumStr>(props: Props<T>) {
    return (
      <Row>
        <Border color={props.color} />
        <BaseWheelPicker {...props} />
        <Border color={props.color} />
      </Row>
    );
  }
);
