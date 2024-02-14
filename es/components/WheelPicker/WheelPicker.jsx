import * as React from "react";
import BaseWheelPicker from "./BaseWheelPicker";
import Border from "./Border";
import { Row } from "../common-components";
import { memo } from "react-misc";
export default memo("WheelPicker", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function (props) {
    return (<Row>
        <Border color={props.color}/>
        <BaseWheelPicker {...props}/>
        <Border color={props.color}/>
      </Row>);
});
//# sourceMappingURL=WheelPicker.jsx.map