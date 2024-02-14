import * as React from "react";
import { Row, Switch, Text } from "./common-components";
import { AlignItems } from "../types";
import { consts } from "../core";
import { memo } from "react-misc";
export default memo("SwitchRow", ({ label, ...props }) => (<Row style={{ alignItems: AlignItems.center, gap }}>
    <Switch {...props}/>
    <Text style={{ flex: 1 }}>{label}</Text>
  </Row>));
const { gap } = consts.SwitchRow;
//# sourceMappingURL=SwitchRow.jsx.map