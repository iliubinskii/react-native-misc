import BaseWheelPicker from "./BaseWheelPicker";
import Border from "./Border";
import React from "react";
import { Row } from "../common-components";
import { memo } from "react-misc";
export default memo("WheelPicker", function WheelPicker(props) {
    return (<Row>
      <Border color={props.color}/>
      <BaseWheelPicker {...props}/>
      <Border color={props.color}/>
    </Row>);
});
//# sourceMappingURL=WheelPicker.jsx.map