import React from "react";
import { TextInput } from "react-native";
import { memo } from "react-misc";
import { textAlignBiDir } from "../consts";
export default memo("TextInput", ({ customRef, textAlign, ...props }) => (<TextInput ref={customRef} textAlign={textAlign ?? textAlignBiDir} {...props}/>));
//# sourceMappingURL=TextInput.jsx.map