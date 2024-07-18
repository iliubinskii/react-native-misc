import { Select as BaseSelect } from "../common-components";
import React from "react";
import { consts } from "../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";
export default memo("Select", function Select(props) {
    const { colors } = useThemeExtended();
    return (<BaseSelect backgroundColor={colors.dense.background} foregroundColor={colors.dense.foreground} rowStyle={{ borderWidth: 0, height }} {...props}/>);
});
const { height } = consts.Dense.Select;
//# sourceMappingURL=Select.jsx.map