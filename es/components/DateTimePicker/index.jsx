import { Card, Group } from "../common-components";
import { Mode, Step } from "./DateTimePicker-common";
import { as, fn, is } from "typescript-misc";
import { memo, useDatetime, useEnum, useLang, useRealEffect, useState } from "react-misc";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Button } from "react-native-paper";
import Calendar from "./Calendar";
import Clock from "./Clock";
import { JustifyContent } from "../../types";
import React from "react";
import { consts } from "../../core";
import { useThemeExtended } from "../../contexts";
export default memo("DateTimePicker", ({ SelectDateRangeHint, SelectTimeRangeHint, date, dateFormat, dateFrom, fullDaysMode, mode = Mode.datetime, onClose = fn.noop, onSave = fn.noop, onSaveTime = fn.noop, time, timeFormat, timeFrom, weekStartsOn, workweekStartsOn }) => {
    const { colors } = useThemeExtended();
    const datetime = useDatetime();
    const firstStep = mode === Mode.time ? Step.hours : Step.date;
    const initialDate = React.useMemo(() => {
        if (is.not.empty(date) && is.not.empty(dateFrom))
            return date;
        return is.not.empty(time) && is.not.empty(timeFrom)
            ? datetime.create().setStartOfDay().setMinutes(time).toString()
            : datetime.create().setStartOfNextDay().toString();
    }, [date, dateFrom, datetime, time, timeFrom]);
    const initialDateFrom = React.useMemo(() => {
        if (is.not.empty(date) && is.not.empty(dateFrom))
            return dateFrom;
        return is.not.empty(time) && is.not.empty(timeFrom)
            ? datetime
                .create()
                .setStartOfDay()
                .setMinutes(timeFrom > time ? timeFrom - 24 * 60 : timeFrom)
                .toString()
            : datetime.create().setStartOfDay().toString();
    }, [date, dateFrom, datetime, time, timeFrom]);
    const initialFullDaysMode = React.useMemo(() => {
        if (is.not.empty(date) && is.not.empty(dateFrom))
            return as.not.empty(fullDaysMode);
        return !(is.empty(time) && is.not.empty(timeFrom));
    }, [date, dateFrom, fullDaysMode, time, timeFrom]);
    const initialMonth = React.useMemo(() => datetime.create(initialDate).setStartOfMonth().toString(), [datetime, initialDate]);
    const lang = useLang();
    const [localDate, setLocalDate, , localDateRef] = useState(initialDate);
    const [localDateFrom, setLocalDateFrom, , localDateFromRef] = useState(initialDateFrom);
    const [localFullDaysMode, setLocalFullDaysMode, , localFullDaysModeRef] = useState(initialFullDaysMode);
    const [month, setMonth] = React.useState(initialMonth);
    const [step, { [Step.date]: pickDate, [Step.hours]: pickHours, [Step.minutes]: pickMinutes }, setStep, stepRef] = useEnum(firstStep, Step);
    const backPressHandler = React.useCallback(() => {
        if (stepRef.current === firstStep) {
            setLocalDate(initialDate);
            setLocalDateFrom(initialDateFrom);
            setLocalFullDaysMode(initialFullDaysMode);
            setMonth(initialMonth);
        }
        else
            switch (stepRef.current) {
                case Step.date: {
                    break;
                }
                case Step.hours: {
                    pickDate();
                    break;
                }
                case Step.minutes: {
                    pickHours();
                }
            }
    }, [
        firstStep,
        initialDate,
        initialDateFrom,
        initialFullDaysMode,
        initialMonth,
        pickDate,
        pickHours,
        setLocalDate,
        setLocalDateFrom,
        setLocalFullDaysMode,
        stepRef
    ]);
    const calendarChangeHandler = React.useCallback((nextDate, nextDateFrom, nextFullDaysMode) => {
        setLocalDate(nextDate);
        setLocalDateFrom(nextDateFrom);
        setLocalFullDaysMode(nextFullDaysMode);
    }, [setLocalDate, setLocalDateFrom, setLocalFullDaysMode]);
    const clockChangeHandler = React.useCallback((nextDate, nextDateFrom, nextFullDaysMode) => {
        setLocalDate(nextDate);
        setLocalDateFrom(nextDateFrom);
        setLocalFullDaysMode(nextFullDaysMode);
    }, [setLocalDate, setLocalDateFrom, setLocalFullDaysMode]);
    const save = React.useCallback(() => {
        onSave(localDateRef.current, localDateFromRef.current, localFullDaysModeRef.current);
        if (localFullDaysModeRef.current)
            onSaveTime();
        else {
            const dt = datetime.create(localDateRef.current);
            const dtFrom = datetime.create(localDateFromRef.current);
            const localTime = dt.hours() * 60 + dt.minutes();
            const localTimeFrom = dtFrom.hours() * 60 + dtFrom.minutes();
            onSaveTime(localTime, localTimeFrom);
        }
        onClose();
    }, [
        datetime,
        localDateFromRef,
        localDateRef,
        localFullDaysModeRef,
        onClose,
        onSave,
        onSaveTime
    ]);
    useRealEffect(() => {
        setLocalDate(initialDate);
        setLocalDateFrom(initialDateFrom);
        setLocalFullDaysMode(initialFullDaysMode);
        setMonth(initialMonth);
        setStep(firstStep);
    }, [
        firstStep,
        initialDate,
        initialDateFrom,
        initialFullDaysMode,
        initialMonth
    ]);
    return (<Card actions={<>
            <Group.ActionButtons start>
              {step === firstStep &&
                localDate === initialDate &&
                localDateFrom === initialDateFrom ? undefined : (<Animated.View entering={entering} exiting={exiting}>
                  <Button onPress={backPressHandler} textColor={colors.button.secondary}>
                    {step === firstStep ? lang.Reset : lang.Back}
                  </Button>
                </Animated.View>)}
            </Group.ActionButtons>
            <Group.ActionButtons>
              <Button onPress={save}>{lang.Save}</Button>
            </Group.ActionButtons>
          </>} actionsJustifyContent={JustifyContent.spaceBetween} contentsStyle={mode === Mode.datetime ? { height, width } : undefined} title={mode === Mode.time ? undefined : lang.PickDate}>
        {step === Step.date ? (<Calendar SelectDateRangeHint={SelectDateRangeHint} date={localDate} dateFrom={localDateFrom} month={month} onChange={calendarChangeHandler} onMonthChange={setMonth} pickHours={mode === Mode.datetime ? pickHours : fn.noop} weekStartsOn={weekStartsOn} workweekStartsOn={workweekStartsOn}/>) : (<Clock SelectTimeRangeHint={SelectTimeRangeHint} date={localDate} dateFormat={dateFormat} dateFrom={localDateFrom} fullDaysMode={localFullDaysMode} mode={mode} onChange={clockChangeHandler} pickMinutes={pickMinutes} step={step} timeFormat={timeFormat}/>)}
      </Card>);
});
export { default as Calendar } from "./Calendar";
export { default as Clock } from "./Clock";
export { Mode } from "./DateTimePicker-common";
const { duration, height, width } = consts.DateTimePicker;
const entering = FadeIn.duration(duration);
const exiting = FadeOut.duration(duration);
//# sourceMappingURL=index.jsx.map