import * as React from "react";
import { Switch } from "react-native-gesture-handler";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";
export default memo("Switch", (props) => {
    const { colors } = useThemeExtended();
    return (<Switch thumbColor={colors.switch.thumb} trackColor={colors.switch.track} {...props}/>);
});
//# sourceMappingURL=Switch.jsx.map