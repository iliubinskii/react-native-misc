import * as React from "react";
import { Overflow, TextAlign, TextVariant } from "../../../types";
import { CalendarDayType } from "../../../hooks";
import Item from "./Item";
import { Pressable } from "react-native";
import { Text } from "../../common-components";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../../contexts";
export default memo("Day", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function ({ day, getKey, getLabel, getTextStyle, index, isFeatured, items = [], onLongPress, onPress, onPressIn, onPressOut, type }) {
    const { colors } = useThemeExtended();
    const color = React.useMemo(() => {
        switch (type) {
            case CalendarDayType.offDay:
                return colors.calendar.offDay;
            case CalendarDayType.padding:
                return colors.calendar.padding;
            case CalendarDayType.today:
                return colors.calendar.today;
            case CalendarDayType.workday:
                return colors.calendar.workday;
        }
    }, [colors, type]);
    return (<Pressable onLongPress={onLongPress} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={{
            borderColor: colors.outline,
            borderStartWidth: index ? borderWidth : 0,
            flex: 1,
            gap,
            overflow: Overflow.hidden,
            padding
        }}>
        <Text style={{ color, textAlign: TextAlign.center }} variant={TextVariant.titleSmall}>
          {day}
        </Text>
        {items
            .filter(item => isFeatured(item))
            .map(item => (<Item getLabel={getLabel} getTextStyle={getTextStyle} isFeatured item={item} key={getKey(item)}/>))}
        {items
            .filter(item => !isFeatured(item))
            .map(item => (<Item getLabel={getLabel} getTextStyle={getTextStyle} item={item} key={getKey(item)}/>))}
      </Pressable>);
});
const { Day: { gap, padding }, borderWidth } = consts.EventsCalendar;
//# sourceMappingURL=index.jsx.map