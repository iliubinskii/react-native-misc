"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("../../common-components");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const types_1 = require("../../../types");
const DateTimePicker_common_1 = require("../DateTimePicker-common");
const react_native_1 = require("react-native");
const react_misc_1 = require("react-misc");
const react_native_reanimated_1 = require("react-native-reanimated");
const Hand_1 = tslib_1.__importDefault(require("./Hand"));
const Numbers_1 = tslib_1.__importDefault(require("./Numbers"));
const typescript_misc_1 = require("typescript-misc");
const core_1 = require("../../../core");
const icons_1 = require("../../../icons");
const hooks_1 = require("../../../hooks");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Clock", ({ SelectTimeRangeHint = common_components_1.Dummy, date, dateFormat, dateFrom, fullDaysMode, mode, onChange, pickMinutes, step, timeFormat }) => {
    const { BackChevronIcon, ForwardChevronIcon } = (0, icons_1.useIcons)();
    const { layout, onLayout } = (0, hooks_1.useLayoutReanimated)();
    const { colors } = (0, contexts_1.useThemeExtended)();
    const datetime = (0, react_misc_1.useDatetime)();
    const dt = React.useMemo(() => datetime.create(date), [date, datetime]);
    const dtFrom = React.useMemo(() => datetime.create(dateFrom), [dateFrom, datetime]);
    const [hintActionDone, setHintActionDone, unsetHintActionDone] = (0, react_misc_1.useBoolean)();
    const initialHours = dt.hours() % 12;
    const initialHoursFrom = dtFrom.hours() % 12;
    const initialMinutes = Math.floor(dt.minutes() / minutesStep);
    const initialMinutesFrom = Math.floor(dtFrom.minutes() / minutesStep);
    const lang = (0, react_misc_1.useLang)();
    const hours = (0, react_native_reanimated_1.useSharedValue)(initialHours);
    const hoursFrom = (0, react_native_reanimated_1.useSharedValue)(initialHoursFrom);
    const minutes = (0, react_native_reanimated_1.useSharedValue)(initialMinutes);
    const minutesFrom = (0, react_native_reanimated_1.useSharedValue)(initialMinutesFrom);
    const nextDay = React.useCallback(() => {
        onChange(dt.add(1, typescript_misc_1.TimeUnit.day).toString(), dtFrom.add(1, typescript_misc_1.TimeUnit.day).toString(), fullDaysMode);
    }, [dt, dtFrom, fullDaysMode, onChange]);
    const prevDay = React.useCallback(() => {
        onChange(dt.sub(1, typescript_misc_1.TimeUnit.day).toString(), dtFrom.sub(1, typescript_misc_1.TimeUnit.day).toString(), fullDaysMode);
    }, [dt, dtFrom, fullDaysMode, onChange]);
    const setAm = React.useCallback(() => {
        onChange(dt.sub(24, typescript_misc_1.TimeUnit.hours).toString(), dtFrom.toString(), false);
    }, [dt, dtFrom, onChange]);
    const setPm = React.useCallback(() => {
        onChange(dt.sub(12, typescript_misc_1.TimeUnit.hours).toString(), dtFrom.add(12, typescript_misc_1.TimeUnit.hours).toString(), false);
    }, [dt, dtFrom, onChange]);
    const setRangeEnd = React.useCallback((index, indexFrom) => {
        switch (step) {
            case DateTimePicker_common_1.Step.hours:
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
                        .sub(fullDaysMode ? 1 : 0, typescript_misc_1.TimeUnit.days)
                        .toString(), dt
                        .setHours(value)
                        .sub(deltaDays, typescript_misc_1.TimeUnit.days)
                        .sub(deltaHours, typescript_misc_1.TimeUnit.hours)
                        .toString(), false);
                }
                pickMinutes();
                break;
            case DateTimePicker_common_1.Step.minutes:
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
                        .sub(fullDaysMode ? 1 : 0, typescript_misc_1.TimeUnit.days)
                        .toString(), dt
                        .setMinutes(value)
                        .sub(deltaHours, typescript_misc_1.TimeUnit.hours)
                        .sub(deltaMinutes, typescript_misc_1.TimeUnit.minutes)
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
                case DateTimePicker_common_1.Step.hours:
                    hours.value = index;
                    if (gestureStep === GestureStep.start)
                        hoursFrom.value = index;
                    if (gestureStep === GestureStep.end)
                        (0, react_native_reanimated_1.runOnJS)(setRangeEnd)(index, hoursFrom.value);
                    break;
                case DateTimePicker_common_1.Step.minutes:
                    minutes.value = index;
                    if (gestureStep === GestureStep.start)
                        minutesFrom.value = index;
                    if (gestureStep === GestureStep.end)
                        (0, react_native_reanimated_1.runOnJS)(setRangeEnd)(index, minutesFrom.value);
            }
        }
    }, [hours, hoursFrom, layout, minutes, minutesFrom, setRangeEnd, step]);
    const toggleAmPm = React.useCallback(() => {
        if (fullDaysMode)
            onChange(dt.sub(12, typescript_misc_1.TimeUnit.hours).toString(), dtFrom.add(12, typescript_misc_1.TimeUnit.hours).toString(), false);
        else if (dt.hours() >= 12)
            onChange(dt.sub(12, typescript_misc_1.TimeUnit.hours).toString(), dtFrom.sub(12, typescript_misc_1.TimeUnit.hours).toString(), false);
        else
            onChange(dt.add(12, typescript_misc_1.TimeUnit.hours).toString(), dtFrom.add(12, typescript_misc_1.TimeUnit.hours).toString(), false);
    }, [dt, dtFrom, fullDaysMode, onChange]);
    const gesture = React.useMemo(() => react_native_gesture_handler_1.Gesture.Pan()
        .minDistance(core_1.consts.Gesture.pan.minDistance)
        .onBegin(({ x, y }) => {
        setRange(x, y, GestureStep.start);
    })
        .onUpdate(({ x, y }) => {
        setRange(x, y, GestureStep.update);
    })
        .onFinalize(({ x, y }) => {
        setRange(x, y, GestureStep.end);
    }), [setRange]);
    (0, react_misc_1.useRealEffect)(() => {
        hours.value = initialHours;
        hoursFrom.value = initialHoursFrom;
        minutes.value = initialMinutes;
        minutesFrom.value = initialMinutesFrom;
    }, [initialHours, initialHoursFrom, initialMinutes, initialMinutesFrom]);
    return (<react_native_1.View style={{ gap }}>
        {mode === DateTimePicker_common_1.Mode.date || mode === DateTimePicker_common_1.Mode.datetime ? (<common_components_1.Row style={{ justifyContent: types_1.JustifyContent.spaceBetween }}>
            <common_components_1.IconButton Icon={BackChevronIcon} iconColor={colors.fadeMore} onPress={prevDay} padding={iconPadding} size={iconSize} style={{ margin: 0 }}/>
            <react_native_1.Pressable onPress={toggleAmPm}>
              <common_components_1.Text style={{
                color: colors.fade,
                height: iconSize + 2 * iconPadding,
                paddingHorizontal,
                verticalAlign: types_1.VerticalAlign.middle
            }} variant={types_1.TextVariant.bodyLarge}>
                {fullDaysMode
                ? dt.sub(1, typescript_misc_1.TimeUnit.day).format(dateFormat)
                : dt.format(timeFormat)}
              </common_components_1.Text>
            </react_native_1.Pressable>
            <common_components_1.IconButton Icon={ForwardChevronIcon} iconColor={colors.fadeMore} onPress={nextDay} padding={iconPadding} size={iconSize} style={{ margin: 0 }}/>
          </common_components_1.Row>) : undefined}
        {mode === DateTimePicker_common_1.Mode.time && fullDaysMode ? (<common_components_1.Row style={{ justifyContent: types_1.JustifyContent.spaceBetween }}>
            <react_native_1.Pressable onPress={setAm}>
              <common_components_1.Text style={{
                color: colors.fade,
                height: iconSize + 2 * iconPadding,
                paddingHorizontal,
                verticalAlign: types_1.VerticalAlign.middle
            }} variant={types_1.TextVariant.bodyLarge}>
                {lang.AM}
              </common_components_1.Text>
            </react_native_1.Pressable>
            <react_native_1.Pressable onPress={setPm}>
              <common_components_1.Text style={{
                color: colors.fade,
                height: iconSize + 2 * iconPadding,
                paddingHorizontal,
                verticalAlign: types_1.VerticalAlign.middle
            }} variant={types_1.TextVariant.bodyLarge}>
                {lang.PM}
              </common_components_1.Text>
            </react_native_1.Pressable>
          </common_components_1.Row>) : undefined}
        {mode === DateTimePicker_common_1.Mode.time && !fullDaysMode ? (<common_components_1.Row style={{ justifyContent: types_1.JustifyContent.center }}>
            <react_native_1.Pressable onPress={toggleAmPm}>
              <common_components_1.Text style={{
                color: colors.fade,
                height: iconSize + 2 * iconPadding,
                paddingHorizontal,
                verticalAlign: types_1.VerticalAlign.middle
            }} variant={types_1.TextVariant.bodyLarge}>
                {dt.format(timeFormat)}
              </common_components_1.Text>
            </react_native_1.Pressable>
          </common_components_1.Row>) : undefined}
        <react_native_gesture_handler_1.GestureDetector gesture={gesture}>
          <SelectTimeRangeHint hintActionDone={hintActionDone} unsetHintActionDone={unsetHintActionDone}>
            <react_native_1.View onLayout={onLayout} style={{ height: size, width: size }}>
              <Hand_1.default active={step === DateTimePicker_common_1.Step.hours} index={hours} indexFrom={hoursFrom} length={hourHandLength} width1={hourHandWidth1} width2={hourHandWidth2}/>
              <Hand_1.default active={step === DateTimePicker_common_1.Step.minutes} index={minutes} indexFrom={minutesFrom} length={minuteHandLength} width1={minuteHandWidth1} width2={minuteHandWidth2}/>
              <Numbers_1.default />
            </react_native_1.View>
          </SelectTimeRangeHint>
        </react_native_gesture_handler_1.GestureDetector>
      </react_native_1.View>);
});
var GestureStep;
(function (GestureStep) {
    GestureStep["end"] = "end";
    GestureStep["start"] = "start";
    GestureStep["update"] = "update";
})(GestureStep || (GestureStep = {}));
const { Clock: { gap, hourHandLength, hourHandWidth1, hourHandWidth2, maxRadius, minRadius, minuteHandLength, minuteHandWidth1, minuteHandWidth2, minutesStep, paddingHorizontal, size }, iconPadding, iconSize } = core_1.consts.DateTimePicker;
const sector = (2 * Math.PI) / 12;
//# sourceMappingURL=index.jsx.map