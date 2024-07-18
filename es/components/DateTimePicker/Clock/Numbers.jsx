import { AlignItems, JustifyContent, Position, TextVariant } from "../../../types";
import React from "react";
import { Text } from "../../common-components";
import { View } from "react-native";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { rtlSign } from "../../../consts";
import { useThemeExtended } from "../../../contexts";
export default memo("Numbers", () => {
    const { colors } = useThemeExtended();
    return (<>
      {numbers.map((label, index) => {
            const angle = 2 * Math.PI * (index / 12);
            const radius = 0.5 * size - 0.5 * buttonSize;
            return (<View key={label} style={{
                    alignItems: AlignItems.center,
                    height: buttonSize,
                    justifyContent: JustifyContent.center,
                    position: Position.absolute,
                    start: radius * (1 + rtlSign * Math.sin(angle)),
                    top: radius * (1 - Math.cos(angle)),
                    transform: [{ rotate: `${angle}rad` }],
                    width: buttonSize,
                    zIndex: 2
                }}>
            <Text style={{ color: colors.secondLine }} variant={TextVariant.titleSmall}>
              {label}
            </Text>
          </View>);
        })}
    </>);
});
const { buttonSize, numbers, size } = consts.DateTimePicker.Clock;
//# sourceMappingURL=Numbers.jsx.map