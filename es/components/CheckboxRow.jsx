import * as React from "react";
import { Row, Text } from "./common-components";
import { AlignItems } from "../types";
import { Checkbox } from "react-native-paper";
import { consts } from "../core";
import { memo } from "react-misc";
export default memo("CheckboxRow", ({ label, ...props }) => (<Row style={{ alignItems: AlignItems.center, gap }}>
    <Checkbox {...props}/>
    <Text style={{ flex: 1 }}>{label}</Text>
  </Row>));
const { gap } = consts.CheckboxRow;
//# sourceMappingURL=CheckboxRow.jsx.map