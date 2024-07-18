import { FlexDirection } from "../../../types";
import React from "react";
import { View } from "react-native";
import { memo } from "react-misc";
export default memo("Row", ({ style, ...props }) => (<View style={[{ flexDirection: FlexDirection.row }, style]} {...props}/>));
//# sourceMappingURL=Row.jsx.map