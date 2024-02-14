import * as React from "react";
import { Row, Text } from "./common-components";
import { fn, is } from "typescript-misc";
import { AlignItems } from "../types";
import { TouchableRipple } from "react-native-paper";
import { consts } from "../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../contexts";
export default memo("Chip", ({ Icon, label, onLongPress = fn.noop, onPress = fn.noop, onPressIn = fn.noop, onPressOut = fn.noop }) => {
    const { colors, roundness } = useThemeExtended();
    return (<TouchableRipple disabled={onLongPress === fn.noop &&
            onPress === fn.noop &&
            onPressIn === fn.noop &&
            onPressOut === fn.noop} onLongPress={onLongPress} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
        <Row style={{
            alignItems: AlignItems.center,
            backgroundColor: colors.chip.background,
            borderColor: colors.chip.outline,
            borderRadius: roundness,
            borderWidth: 1,
            gap,
            paddingHorizontal,
            paddingVertical
        }}>
          {Icon ? (<Icon color={colors.chip.foreground} size={iconSize}/>) : undefined}
          {is.not.empty(label) ? (<Text style={{ color: colors.chip.foreground }}>{label}</Text>) : undefined}
        </Row>
      </TouchableRipple>);
});
const { gap, iconSize, paddingHorizontal, paddingVertical } = consts.Chip;
//# sourceMappingURL=Chip.jsx.map