import * as React from "react";
import { View } from "react-native";
import { consts } from "../../core";
import { memo } from "react-misc";
export default memo("Container", ({ style, ...props }) => (<View style={[{ gap }, style]} {...props}/>));
const { gap } = consts.Dense.Container;
//# sourceMappingURL=Container.jsx.map