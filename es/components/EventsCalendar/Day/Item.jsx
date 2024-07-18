import React from "react";
import { Text } from "../../common-components";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../../contexts";
export default memo("Item", function Item({ getLabel, getTextStyle, isFeatured = false, item }) {
    const { colors, roundness } = useThemeExtended();
    return (<Text numberOfLines={numberOfLines} style={[
            {
                borderRadius: roundnessFactor * roundness,
                fontSize,
                lineHeight,
                paddingHorizontal,
                paddingVertical
            },
            isFeatured
                ? {
                    backgroundColor: colors.calendar.featured.background,
                    color: colors.calendar.featured.foreground
                }
                : {
                    backgroundColor: colors.surfaceDisabled,
                    color: colors.onSurfaceDisabled
                },
            getTextStyle?.(item)
        ]}>
      {getLabel(item)}
    </Text>);
});
const { fontSize, lineHeight, numberOfLines, paddingHorizontal, paddingVertical, roundnessFactor } = consts.EventsCalendar.Day.Item;
//# sourceMappingURL=Item.jsx.map