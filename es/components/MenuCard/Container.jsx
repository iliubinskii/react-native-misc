import * as React from "react";
import { View } from "react-native";
import { consts } from "../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";
export default memo("Container", ({ children, width }) => {
    const { colors } = useThemeExtended();
    return (<View style={{
            backgroundColor: colors.surface,
            gap,
            padding,
            width
        }}>
      {children}
    </View>);
});
const { gap, padding } = consts.MenuCard.Container;
//# sourceMappingURL=Container.jsx.map