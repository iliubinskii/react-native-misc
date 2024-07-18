import { GestureRecognizer, Row, Text } from "../common-components";
import type { IndexedRecord, booleanU } from "typescript-misc";
import { TextAlign, TextVariant } from "../../types";
import { memo, useDatetime } from "react-misc";
import type { CommonNativeProps } from "../../types";
import Day from "./Day";
import React from "react";
import { TimeUnit } from "typescript-misc";
import { consts } from "../../core";
import { useCalendar } from "../../hooks";
import { useThemeExtended } from "../../contexts";

export default memo("EventsCalendar", function EventsCalendar<
  T
>({ borderBottom = false, borderEnd = false, borderStart = false, borderTop = false, getKey, getLabel, getTextStyle, isFeatured, items, month, onDayPress, onMonthChange, style, weekStartsOn, workweekStartsOn }: Props<T>) {
  const { weekDays, weeks } = useCalendar(
    month,
    weekStartsOn,
    workweekStartsOn,
    onDayPress
  );

  const { colors } = useThemeExtended();

  const datetime = useDatetime();

  const onSwipeStart = React.useCallback(() => {
    onMonthChange(datetime.create(month).add(1, TimeUnit.month).toString());
  }, [datetime, month, onMonthChange]);

  const onSwipeEnd = React.useCallback(() => {
    onMonthChange(datetime.create(month).sub(1, TimeUnit.month).toString());
  }, [datetime, month, onMonthChange]);

  return (
    <GestureRecognizer
      onSwipeEnd={onSwipeEnd}
      onSwipeStart={onSwipeStart}
      style={[
        {
          borderBottomWidth: borderBottom ? borderWidth : undefined,
          borderColor: colors.outline,
          borderEndWidth: borderEnd ? borderWidth : undefined,
          borderStartWidth: borderStart ? borderWidth : undefined,
          borderTopWidth: borderTop ? borderWidth : undefined
        },
        style
      ]}
    >
      <Row>
        {weekDays.map(({ day, label }) => (
          <Text
            key={day}
            style={{
              color: colors.fade,
              flex: 1,
              paddingVertical,
              textAlign: TextAlign.center
            }}
            variant={TextVariant.bodySmall}
          >
            {label}
          </Text>
        ))}
      </Row>
      {weeks.map(({ days, week }) => (
        <Row
          key={week}
          style={{
            borderColor: colors.outline,
            borderTopWidth: borderWidth,
            flex: 1
          }}
        >
          {days.map(({ date, day, onPress, type }, index) => (
            <Day
              date={date}
              day={day}
              getKey={getKey}
              getLabel={getLabel}
              getTextStyle={getTextStyle}
              index={index}
              isFeatured={isFeatured}
              items={items[date]}
              key={day}
              onPress={onPress}
              type={type}
            />
          ))}
        </Row>
      ))}
    </GestureRecognizer>
  );
});

/**
 * @internal
 */
export interface Props<T>
  extends CommonNativeProps.ViewStyle,
    Pick<
      React.ComponentProps<typeof Day<T>>,
      "getKey" | "getLabel" | "getTextStyle" | "isFeatured"
    > {
  readonly borderBottom?: booleanU;
  readonly borderEnd?: booleanU;
  readonly borderStart?: booleanU;
  readonly borderTop?: booleanU;
  readonly items: IndexedRecord<readonly T[]>;
  readonly month: string;
  /**
   * Handles day press.
   */
  readonly onDayPress?: ((date: string) => void) | undefined;
  /**
   * Handles month change.
   * @param month - Month.
   */
  readonly onMonthChange: (month: string) => void;
  readonly weekStartsOn: 0 | 1;
  readonly workweekStartsOn: 0 | 1;
}

const { borderWidth, paddingVertical } = consts.EventsCalendar;
