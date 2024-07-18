import React from "react";
import { View } from "react-native";
import { consts } from "../core";
import { memo } from "react-misc";
export default memo("Sheet", ({ style, ...props }) => (<View style={[{ padding }, style]} {...props}/>));
const { padding } = consts.Sheet;
//# sourceMappingURL=Sheet.jsx.map