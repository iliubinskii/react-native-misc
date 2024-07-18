import Mask from "./Mask";
import React from "react";
import { View } from "react-native";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../../contexts";
export default memo("Border", ({ color }) => {
    const { colors } = useThemeExtended();
    return (<Mask height={size * height} width={1}>
      <View style={{
            backgroundColor: color ?? colors.foreground,
            height: size * height,
            width: 1
        }}/>
    </Mask>);
});
const { height, size } = consts.WheelPicker;
//# sourceMappingURL=index.jsx.map