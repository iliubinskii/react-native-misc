import * as React from "react";
import { Select } from "../common-components";
import { consts } from "../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";
export default memo("Select", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function (props) {
    const { colors } = useThemeExtended();
    return (<Select backgroundColor={colors.dense.background} foregroundColor={colors.dense.foreground} rowStyle={{ borderWidth: 0, height }} {...props}/>);
});
const { height } = consts.Dense.Select;
//# sourceMappingURL=Select.jsx.map