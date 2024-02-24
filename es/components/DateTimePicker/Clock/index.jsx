import * as React from "react";
import { Dummy, IconButton, Row, Text } from "../../common-components";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { JustifyContent, TextVariant, VerticalAlign } from "../../../types";
import { Mode, Step } from "../DateTimePicker-common";
import { Pressable, View } from "react-native";
import { memo, useBoolean, useDatetime, useLang, useRealEffect } from "react-misc";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import Hand from "./Hand";
import Numbers from "./Numbers";
import { TimeUnit } from "typescript-misc";
import { consts } from "../../../core";
import { useIcons } from "../../../icons";
import { useLayoutReanimated } from "../../../hooks";
import { useThemeExtended } from "../../../contexts";
export default memo("Clock", ({ SelectTimeRangeHint = Dummy, date, dateFormat, dateFrom, fullDaysMode, mode, onChange, pickMinutes, step, timeFormat }) => {
    const { BackChevronIcon, ForwardChevronIcon } = useIcons();
    const { layout, onLayout } = useLayoutReanimated();
    const { colors } = useThemeExtended();
    const datetime = useDatetime();
    const dt = React.useMemo(() => datetime.create(date), [date, datetime]);
    const dtFrom = React.useMemo(() => datetime.create(dateFrom), [dateFrom, datetime]);
    const [hintActionDone, setHintActionDone, unsetHintActionDone] = useBoolean();
    const initialHours = dt.hours() % 12;
    const initialHoursFrom = dtFrom.hours() % 12;
    const initialMinutes = Math.floor(dt.minutes() / minutesStep);
    const initialMinutesFrom = Math.floor(dtFrom.minutes() / minutesStep);
    const lang = useLang();
    const hours = useSharedValue(initialHours);
    const hoursFrom = useSharedValue(initialHoursFrom);
    const minutes = useSharedValue(initialMinutes);
    const minutesFrom = useSharedValue(initialMinutesFrom);
    const nextDay = React.useCallback(() => {
        onChange(dt.add(1, TimeUnit.day).toString(), dtFrom.add(1, TimeUnit.day).toString(), fullDaysMode);
    }, [dt, dtFrom, fullDaysMode, onChange]);
    const prevDay = React.useCallback(() => {
        onChange(dt.sub(1, TimeUnit.day).toString(), dtFrom.sub(1, TimeUnit.day).toString(), fullDaysMode);
    }, [dt, dtFrom, fullDaysMode, onChange]);
    const setAm = React.useCallback(() => {
        onChange(dt.sub(24, TimeUnit.hours).toString(), dtFrom.toString(), false);
    }, [dt, dtFrom, onChange]);
    const setPm = React.useCallback(() => {
        onChange(dt.sub(12, TimeUnit.hours).toString(), dtFrom.add(12, TimeUnit.hours).toString(), false);
    }, [dt, dtFrom, onChange]);
    const setRangeEnd = React.useCallback((index, indexFrom) => {
        switch (step) {
            case Step.hours:
                if (index === initialHours &&
                    indexFrom === initialHoursFrom &&
                    !fullDaysMode) {
                    // Skip
                }
                else {
                    const value = index + (dt.hours() >= 12 ? 12 : 0);
                    const deltaDays = dt.differenceInDays(dtFrom);
                    const deltaHours = (index - indexFrom + 12) % 12;
                    onChange(dt
                        .setHours(value)
                        .sub(fullDaysMode ? 1 : 0, TimeUnit.days)
                        .toString(), dt
                        .setHours(value)
                        .sub(deltaDays, TimeUnit.days)
                        .sub(deltaHours, TimeUnit.hours)
                        .toString(), false);
                }
                pickMinutes();
                break;
            case Step.minutes:
                if (index === initialMinutes &&
                    indexFrom === initialMinutesFrom &&
                    !fullDaysMode) {
                    // Skip
                }
                else {
                    const value = index * minutesStep;
                    const deltaHours = dt.differenceInHours(dtFrom);
                    const deltaMinutes = ((index - indexFrom + 12) % 12) * minutesStep;
                    onChange(dt
                        .setMinutes(value)
                        .sub(fullDaysMode ? 1 : 0, TimeUnit.days)
                        .toString(), dt
                        .setMinutes(value)
                        .sub(deltaHours, TimeUnit.hours)
                        .sub(deltaMinutes, TimeUnit.minutes)
                        .toString(), false);
                }
        }
        if (index === indexFrom) {
            // Skip
        }
        else
            setHintActionDone();
    }, [
        dt,
        dtFrom,
        fullDaysMode,
        initialHours,
        initialHoursFrom,
        initialMinutes,
        initialMinutesFrom,
        onChange,
        pickMinutes,
        setHintActionDone,
        step
    ]);
    const setRange = React.useCallback((x, y, gestureStep) => {
        "worklet";
        const dx = x - 0.5 * size;
        const dy = y - 0.5 * size;
        const r = dx ** 2 + dy ** 2;
        if (layout.value && r > minRadius ** 2 && r < maxRadius ** 2) {
            const rad = Math.PI - Math.atan2(dx, dy);
            const index = Math.round(rad / sector) % 12;
            switch (step) {
                case Step.hours:
                    hours.value = index;
                    if (gestureStep === GestureStep.start)
                        hoursFrom.value = index;
                    if (gestureStep === GestureStep.end)
                        runOnJS(setRangeEnd)(index, hoursFrom.value);
                    break;
                case Step.minutes:
                    minutes.value = index;
                    if (gestureStep === GestureStep.start)
                        minutesFrom.value = index;
                    if (gestureStep === GestureStep.end)
                        runOnJS(setRangeEnd)(index, minutesFrom.value);
            }
        }
    }, [hours, hoursFrom, layout, minutes, minutesFrom, setRangeEnd, step]);
    const toggleAmPm = React.useCallback(() => {
        if (fullDaysMode)
            onChange(dt.sub(12, TimeUnit.hours).toString(), dtFrom.add(12, TimeUnit.hours).toString(), false);
        else if (dt.hours() >= 12)
            onChange(dt.sub(12, TimeUnit.hours).toString(), dtFrom.sub(12, TimeUnit.hours).toString(), false);
        else
            onChange(dt.add(12, TimeUnit.hours).toString(), dtFrom.add(12, TimeUnit.hours).toString(), false);
    }, [dt, dtFrom, fullDaysMode, onChange]);
    const gesture = React.useMemo(() => Gesture.Pan()
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
    }), [setRange]);
    useRealEffect(() => {
        hours.value = initialHours;
        hoursFrom.value = initialHoursFrom;
        minutes.value = initialMinutes;
        minutesFrom.value = initialMinutesFrom;
    }, [initialHours, initialHoursFrom, initialMinutes, initialMinutesFrom]);
    return (<View style={{ gap }}>
        {mode === Mode.date || mode === Mode.datetime ? (<Row style={{ justifyContent: JustifyContent.spaceBetween }}>
            <IconButton Icon={BackChevronIcon} iconColor={colors.fadeMore} onPress={prevDay} padding={iconPadding} size={iconSize} style={{ margin: 0 }}/>
            <Pressable onPress={toggleAmPm}>
              <Text style={{
                color: colors.fade,
                height: iconSize + 2 * iconPadding,
                paddingHorizontal,
                verticalAlign: VerticalAlign.middle
            }} variant={TextVariant.bodyLarge}>
                {fullDaysMode
                ? dt.sub(1, TimeUnit.day).format(dateFormat)
                : dt.format(timeFormat)}
              </Text>
            </Pressable>
            <IconButton Icon={ForwardChevronIcon} iconColor={colors.fadeMore} onPress={nextDay} padding={iconPadding} size={iconSize} style={{ margin: 0 }}/>
          </Row>) : undefined}
        {mode === Mode.time && fullDaysMode ? (<Row style={{ justifyContent: JustifyContent.spaceBetween }}>
            <Pressable onPress={setAm}>
              <Text style={{
                color: colors.fade,
                height: iconSize + 2 * iconPadding,
                paddingHorizontal,
                verticalAlign: VerticalAlign.middle
            }} variant={TextVariant.bodyLarge}>
                {lang.AM}
              </Text>
            </Pressable>
            <Pressable onPress={setPm}>
              <Text style={{
                color: colors.fade,
                height: iconSize + 2 * iconPadding,
                paddingHorizontal,
                verticalAlign: VerticalAlign.middle
            }} variant={TextVariant.bodyLarge}>
                {lang.PM}
              </Text>
            </Pressable>
          </Row>) : undefined}
        {mode === Mode.time && !fullDaysMode ? (<Row style={{ justifyContent: JustifyContent.center }}>
            <Pressable onPress={toggleAmPm}>
              <Text style={{
                color: colors.fade,
                height: iconSize + 2 * iconPadding,
                paddingHorizontal,
                verticalAlign: VerticalAlign.middle
            }} variant={TextVariant.bodyLarge}>
                {dt.format(timeFormat)}
              </Text>
            </Pressable>
          </Row>) : undefined}
        <GestureDetector gesture={gesture}>
          <SelectTimeRangeHint hintActionDone={hintActionDone} unsetHintActionDone={unsetHintActionDone}>
            <View onLayout={onLayout} style={{ height: size, width: size }}>
              <Hand active={step === Step.hours} index={hours} indexFrom={hoursFrom} length={hourHandLength} width1={hourHandWidth1} width2={hourHandWidth2}/>
              <Hand active={step === Step.minutes} index={minutes} indexFrom={minutesFrom} length={minuteHandLength} width1={minuteHandWidth1} width2={minuteHandWidth2}/>
              <Numbers />
            </View>
          </SelectTimeRangeHint>
        </GestureDetector>
      </View>);
});
var GestureStep;
(function (GestureStep) {
    GestureStep["end"] = "end";
    GestureStep["start"] = "start";
    GestureStep["update"] = "update";
})(GestureStep || (GestureStep = {}));
const { Clock: { gap, hourHandLength, hourHandWidth1, hourHandWidth2, maxRadius, minRadius, minuteHandLength, minuteHandWidth1, minuteHandWidth2, minutesStep, paddingHorizontal, size }, iconPadding, iconSize } = consts.DateTimePicker;
const sector = (2 * Math.PI) / 12;
//# sourceMappingURL=index.jsx.map