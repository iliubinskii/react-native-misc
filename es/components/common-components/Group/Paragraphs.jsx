import React from "react";
import { View } from "react-native";
import { consts } from "../../../core";
import { memo } from "react-misc";
export default memo("Paragraphs", ({ style, ...props }) => (<View style={[{ gap }, style]} {...props}/>));
export const { gap } = consts.Group.Paragraphs;
//# sourceMappingURL=Paragraphs.jsx.map