import { Overflow, TextAlign, TextVariant } from "../../../types";
import { CalendarDayType } from "../../../hooks";
import type { CommonProps } from "react-misc";
import Item from "./Item";
import type { NumStr } from "typescript-misc";
import { Pressable } from "react-native";
import React from "react";
import { Text } from "../../common-components";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../../contexts";

export default memo("Day", function Day<
  T
>({ day, getKey, getLabel, getTextStyle, index, isFeatured, items = [], onLongPress, onPress, onPressIn, onPressOut, type }: Props<T>) {
  const { colors } = useThemeExtended();

  const color = React.useMemo(() => {
    switch (type) {
      case CalendarDayType.offDay: {
        return colors.calendar.offDay;
      }

      case CalendarDayType.padding: {
        return colors.calendar.padding;
      }

      case CalendarDayType.today: {
        return colors.calendar.today;
      }

      case CalendarDayType.workday: {
        return colors.calendar.workday;
      }
    }
  }, [colors, type]);

  return (
    <Pressable
      onLongPress={onLongPress}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={{
        borderColor: colors.outline,
        borderStartWidth: index ? borderWidth : 0,
        flex: 1,
        gap,
        overflow: Overflow.hidden,
        padding
      }}
    >
      <Text
        style={{ color, textAlign: TextAlign.center }}
        variant={TextVariant.titleSmall}
      >
        {day}
      </Text>
      {items
        .filter(item => isFeatured(item))
        .map(item => (
          <Item
            getLabel={getLabel}
            getTextStyle={getTextStyle}
            isFeatured
            item={item}
            key={getKey(item)}
          />
        ))}
      {items
        .filter(item => !isFeatured(item))
        .map(item => (
          <Item
            getLabel={getLabel}
            getTextStyle={getTextStyle}
            item={item}
            key={getKey(item)}
          />
        ))}
    </Pressable>
  );
});

/**
 * @internal
 */
export interface Props<T>
  extends CommonProps.Pressable,
    Pick<React.ComponentProps<typeof Item<T>>, "getLabel" | "getTextStyle"> {
  readonly date: string;
  readonly day: number;
  /**
   * Extracts key.
   * @param item - Item.
   * @returns Key.
   */
  readonly getKey: (item: T) => NumStr;
  readonly index: number;
  /**
   * Checks if item is featured.
   * @param item - Item.
   * @returns _True_ if item is featured, _false_ otherwise.
   */
  readonly isFeatured: (item: T) => boolean;
  readonly items?: readonly T[] | undefined;
  readonly type: CalendarDayType;
}

const {
  Day: { gap, padding },
  borderWidth
} = consts.EventsCalendar;
