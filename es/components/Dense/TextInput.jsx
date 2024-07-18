import React from "react";
import { TextInput } from "react-native";
import { consts } from "../../core";
import { memo } from "react-misc";
import { textAlignBiDir } from "../../consts";
import { useThemeExtended } from "../../contexts";
export default memo("TextInput", ({ style, textAlign, ...props }) => {
    const { colors, roundness } = useThemeExtended();
    return (<TextInput style={[
            {
                backgroundColor: colors.dense.background,
                borderRadius: roundness,
                color: colors.dense.foreground,
                height,
                paddingHorizontal
            },
            style
        ]} textAlign={textAlign ?? textAlignBiDir} {...props}/>);
});
const { height, paddingHorizontal } = consts.Dense.TextInput;
//# sourceMappingURL=TextInput.jsx.map