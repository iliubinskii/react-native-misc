import * as React from "react";
import { AlignItems, JustifyContent, TextVariant } from "../../../types";
import { CalendarDayType } from "../../../hooks";
import { Pressable } from "react-native";
import { Text } from "../../common-components";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../../contexts";

export default memo("Day", ({ day, type }: Props) => {
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

  return (
    <Pressable
      style={{
        alignItems: AlignItems.center,
        height: size,
        justifyContent: JustifyContent.center,
        width: size
      }}
    >
      <Text style={{ color }} variant={TextVariant.titleSmall}>
        {day}
      </Text>
    </Pressable>
  );
});

/**
 * @internal
 */
export interface Props {
  readonly day: number;
  readonly type: CalendarDayType;
}

const { size } = consts.DateTimePicker.Calendar;
