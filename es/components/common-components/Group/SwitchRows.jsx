import React from "react";
import { View } from "react-native";
import { consts } from "../../../core";
import { memo } from "react-misc";
export default memo("SwitchRows", ({ style, ...props }) => (<View style={[{ gap }, style]} {...props}/>));
export const { gap } = consts.Group.SwitchRows;
//# sourceMappingURL=SwitchRows.jsx.map