import * as React from "react";
import { Dummy, IconButton, Row, Text } from "../../common-components";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  JustifyContent,
  Position,
  TextAlign,
  TextVariant,
  VerticalAlign
} from "../../../types";
import { memo, useBoolean, useDatetime, useRealEffect } from "react-misc";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import { useCalendar, useLayoutReanimated } from "../../../hooks";
import Circle from "./Circle";
import Day from "./Day";
import type { FunctionComponent } from "react-misc";
import type { HintProps } from "../DateTimePicker-common";
import SelectionRow from "./SelectionRow";
import { Svg } from "react-native-svg";
import { TimeUnit } from "typescript-misc";
import { View } from "react-native";
import { consts } from "../../../core";
import { useIcons } from "../../../icons";
import { useThemeExtended } from "../../../contexts";

declare global {
  namespace reactNativeMisc {
    interface Icon extends ScopedIcon {}
  }
}

export default memo(
  "Calendar",
  ({
    SelectDateRangeHint = Dummy,
    date,
    dateFrom,
    month,
    onChange,
    onMonthChange,
    pickHours,
    weekStartsOn,
    workweekStartsOn
  }: Props) => {
    const { BackChevronIcon, ForwardChevronIcon } =
      useIcons<keyof ScopedIcon>();

    const { weekDays, weeks } = useCalendar(
      month,
      weekStartsOn,
      workweekStartsOn
    );

    const { colors } = useThemeExtended();

    const datetime = useDatetime();

    const firstDay = React.useMemo(
      () => datetime.create(month).setStartOfWeek(weekStartsOn),
      [datetime, month, weekStartsOn]
    );

    const [hintActionDone, setHintActionDone, unsetHintActionDone] =
      useBoolean();

    const initialSelection = React.useMemo(
      () =>
        date > dateFrom && datetime.create(date).isStartOfDay()
          ? datetime
              .create(date)
              .setStartOfDay()
              .sub(1, TimeUnit.day)
              .differenceInDays(firstDay)
          : datetime.create(date).setStartOfDay().differenceInDays(firstDay),
      [date, dateFrom, datetime, firstDay]
    );

    const initialSelectionFrom = React.useMemo(
      () =>
        datetime.create(dateFrom).setStartOfDay().differenceInDays(firstDay),
      [dateFrom, datetime, firstDay]
    );

    const { layout, onLayout } = useLayoutReanimated();

    const selection1 = useSharedValue(initialSelection);

    const selection2 = useSharedValue(initialSelectionFrom);

    const back = React.useCallback(() => {
      onMonthChange(datetime.create(month).sub(1, TimeUnit.month).toString());
    }, [datetime, month, onMonthChange]);

    const forward = React.useCallback(() => {
      onMonthChange(datetime.create(month).add(1, TimeUnit.month).toString());
    }, [datetime, month, onMonthChange]);

    const setRangeEnd = React.useCallback(
      (index1: number, index2: number) => {
        const index = Math.max(index1, index2);

        const indexFrom = Math.min(index1, index2);

        if (index === initialSelection && indexFrom === initialSelectionFrom) {
          // Skip
        } else
          onChange(
            firstDay.add(index + 1, TimeUnit.days).toString(),
            firstDay.add(indexFrom, TimeUnit.days).toString(),
            true
          );

        if (index === indexFrom) pickHours();

        if (index === indexFrom) {
          // Skip
        } else setHintActionDone();
      },
      [
        firstDay,
        initialSelection,
        initialSelectionFrom,
        onChange,
        pickHours,
        setHintActionDone
      ]
    );

    const setRange = React.useCallback(
      (x: number, y: number, step: GestureStep) => {
        "worklet";

        if (layout.value) {
          const day = Math.round(x / size - 0.5);

          const week = Math.round(y / size - 0.5);

          const selection = week * daysInWeek + day;

          if (step === GestureStep.start) selection1.value = selection;

          selection2.value = selection;

          if (step === GestureStep.end)
            runOnJS(setRangeEnd)(selection, selection1.value);
        }
      },
      [layout, selection1, selection2, setRangeEnd]
    );

    const gesture = React.useMemo(
      () =>
        Gesture.Pan()
          .minDistance(consts.Gesture.pan.minDistance)
          .onBegin(({ x, y }) => {
            "worklet";
            setRange(x, y, GestureStep.start);
          })
          .onUpdate(({ x, y }) => {
            "worklet";
            setRange(x, y, GestureStep.update);
          })
          .onFinalize(({ x, y }) => {
            "worklet";
            setRange(x, y, GestureStep.end);
          }),
      [setRange]
    );

    useRealEffect(() => {
      selection1.value = initialSelection;
      selection2.value = initialSelectionFrom;
    }, [initialSelection, initialSelectionFrom]);

    return (
      <View style={{ gap }}>
        <Row style={{ justifyContent: JustifyContent.spaceBetween }}>
          <IconButton
            Icon={BackChevronIcon}
            iconColor={colors.fadeMore}
            onPress={back}
            padding={iconPadding}
            size={iconSize}
            style={{ margin: 0 }}
          />
          <Text
            style={{ color: colors.fade, verticalAlign: VerticalAlign.middle }}
            variant={TextVariant.bodyLarge}
          >
            {datetime.create(month).format(format.monthYear)}
          </Text>
          <IconButton
            Icon={ForwardChevronIcon}
            iconColor={colors.fadeMore}
            onPress={forward}
            padding={iconPadding}
            size={iconSize}
            style={{ margin: 0 }}
          />
        </Row>
        <View>
          <Row style={{ paddingVertical }}>
            {weekDays.map(({ day, label }) => (
              <Text
                key={day}
                style={{
                  color: colors.fade,
                  textAlign: TextAlign.center,
                  width: size
                }}
                variant={TextVariant.bodySmall}
              >
                {label}
              </Text>
            ))}
          </Row>
          <GestureDetector gesture={gesture}>
            <SelectDateRangeHint
              hintActionDone={hintActionDone}
              unsetHintActionDone={unsetHintActionDone}
            >
              <View
                onLayout={onLayout}
                style={{ height: size * maxWeeks, width: size * daysInWeek }}
              >
                <Svg
                  height={size * maxWeeks}
                  style={{ position: Position.absolute, start: 0, top: 0 }}
                  width={size * daysInWeek}
                >
                  {weeks.map(({ week }) => (
                    <SelectionRow
                      key={week}
                      selection1={selection1}
                      selection2={selection2}
                      week={week}
                    />
                  ))}
                  <Circle selection={selection1} />
                  <Circle selection={selection2} />
                </Svg>
                {weeks.map(({ days, week }) => (
                  <Row key={week}>
                    {days.map(({ day, type }) => (
                      <Day day={day} key={day} type={type} />
                    ))}
                  </Row>
                ))}
              </View>
            </SelectDateRangeHint>
          </GestureDetector>
        </View>
      </View>
    );
  }
);

/**
 * @internal
 */
export interface Props {
  readonly SelectDateRangeHint?: FunctionComponent<HintProps> | undefined;
  readonly date: string;
  readonly dateFrom: string;
  readonly month: string;
  /**
   * Handles dates setRangeEnd.
   *
   * @param date - Date.
   * @param dateFrom - Date from.
   * @param fullDaysMode - Full days mode.
   */
  readonly onChange: (
    date: string,
    dateFrom: string,
    fullDaysMode: boolean
  ) => void;
  /**
   * Handles month setRangeEnd.
   *
   * @param month - Month.
   */
  readonly onMonthChange: (month: string) => void;
  /**
   * Picks hours.
   */
  readonly pickHours: () => void;
  readonly weekStartsOn: 0 | 1;
  readonly workweekStartsOn: 0 | 1;
}

/**
 * @internal
 */
export interface ScopedIcon {
  readonly BackChevronIcon: true;
  readonly ForwardChevronIcon: true;
}

enum GestureStep {
  end = "end",
  start = "start",
  update = "update"
}

const {
  Calendar: { daysInWeek, format, gap, maxWeeks, paddingVertical, size },
  iconPadding,
  iconSize
} = consts.DateTimePicker;
