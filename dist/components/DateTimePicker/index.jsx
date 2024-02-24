"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mode = exports.Clock = exports.Calendar = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("../common-components");
const DateTimePicker_common_1 = require("./DateTimePicker-common");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const react_native_paper_1 = require("react-native-paper");
const Calendar_1 = tslib_1.__importDefault(require("./Calendar"));
const Clock_1 = tslib_1.__importDefault(require("./Clock"));
const types_1 = require("../../types");
const core_1 = require("../../core");
const contexts_1 = require("../../contexts");
var Calendar_2 = require("./Calendar");
Object.defineProperty(exports, "Calendar", { enumerable: true, get: function () { return tslib_1.__importDefault(Calendar_2).default; } });
var Clock_2 = require("./Clock");
Object.defineProperty(exports, "Clock", { enumerable: true, get: function () { return tslib_1.__importDefault(Clock_2).default; } });
var DateTimePicker_common_2 = require("./DateTimePicker-common");
Object.defineProperty(exports, "Mode", { enumerable: true, get: function () { return DateTimePicker_common_2.Mode; } });
exports.default = (0, react_misc_1.memo)("DateTimePicker", ({ SelectDateRangeHint, SelectTimeRangeHint, date, dateFormat, dateFrom, fullDaysMode, mode = DateTimePicker_common_1.Mode.datetime, onClose = typescript_misc_1.fn.noop, onSave = typescript_misc_1.fn.noop, onSaveTime = typescript_misc_1.fn.noop, time, timeFormat, timeFrom, weekStartsOn, workweekStartsOn }) => {
    const { colors } = (0, contexts_1.useThemeExtended)();
    const datetime = (0, react_misc_1.useDatetime)();
    const firstStep = mode === DateTimePicker_common_1.Mode.time ? DateTimePicker_common_1.Step.hours : DateTimePicker_common_1.Step.date;
    const initialDate = React.useMemo(() => {
        if (typescript_misc_1.is.not.empty(date) && typescript_misc_1.is.not.empty(dateFrom))
            return date;
        return typescript_misc_1.is.not.empty(time) && typescript_misc_1.is.not.empty(timeFrom)
            ? datetime.create().setStartOfDay().setMinutes(time).toString()
            : datetime.create().setStartOfNextDay().toString();
    }, [date, dateFrom, datetime, time, timeFrom]);
    const initialDateFrom = React.useMemo(() => {
        if (typescript_misc_1.is.not.empty(date) && typescript_misc_1.is.not.empty(dateFrom))
            return dateFrom;
        return typescript_misc_1.is.not.empty(time) && typescript_misc_1.is.not.empty(timeFrom)
            ? datetime
                .create()
                .setStartOfDay()
                .setMinutes(timeFrom > time ? timeFrom - 24 * 60 : timeFrom)
                .toString()
            : datetime.create().setStartOfDay().toString();
    }, [date, dateFrom, datetime, time, timeFrom]);
    const initialFullDaysMode = React.useMemo(() => {
        if (typescript_misc_1.is.not.empty(date) && typescript_misc_1.is.not.empty(dateFrom))
            return typescript_misc_1.as.not.empty(fullDaysMode);
        return !(typescript_misc_1.is.empty(time) && typescript_misc_1.is.not.empty(timeFrom));
    }, [date, dateFrom, fullDaysMode, time, timeFrom]);
    const initialMonth = React.useMemo(() => datetime.create(initialDate).setStartOfMonth().toString(), [datetime, initialDate]);
    const lang = (0, react_misc_1.useLang)();
    const [localDate, setLocalDate, , localDateRef] = (0, react_misc_1.useState)(initialDate);
    const [localDateFrom, setLocalDateFrom, , localDateFromRef] = (0, react_misc_1.useState)(initialDateFrom);
    const [localFullDaysMode, setLocalFullDaysMode, , localFullDaysModeRef] = (0, react_misc_1.useState)(initialFullDaysMode);
    const [month, setMonth] = React.useState(initialMonth);
    const [step, { [DateTimePicker_common_1.Step.date]: pickDate, [DateTimePicker_common_1.Step.hours]: pickHours, [DateTimePicker_common_1.Step.minutes]: pickMinutes }, setStep, stepRef] = (0, react_misc_1.useEnum)(firstStep, DateTimePicker_common_1.Step);
    const backPressHandler = React.useCallback(() => {
        if (stepRef.current === firstStep) {
            setLocalDate(initialDate);
            setLocalDateFrom(initialDateFrom);
            setLocalFullDaysMode(initialFullDaysMode);
            setMonth(initialMonth);
        }
        else
            switch (stepRef.current) {
                case DateTimePicker_common_1.Step.date:
                    break;
                case DateTimePicker_common_1.Step.hours:
                    pickDate();
                    break;
                case DateTimePicker_common_1.Step.minutes:
                    pickHours();
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
    (0, react_misc_1.useRealEffect)(() => {
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
    return (<common_components_1.Card actions={<>
            <common_components_1.Group.ActionButtons start>
              {step === firstStep &&
                localDate === initialDate &&
                localDateFrom === initialDateFrom ? undefined : (<react_native_reanimated_1.default.View entering={entering} exiting={exiting}>
                  <react_native_paper_1.Button onPress={backPressHandler} textColor={colors.button.secondary}>
                    {step === firstStep ? lang.Reset : lang.Back}
                  </react_native_paper_1.Button>
                </react_native_reanimated_1.default.View>)}
            </common_components_1.Group.ActionButtons>
            <common_components_1.Group.ActionButtons>
              <react_native_paper_1.Button onPress={save}>{lang.Save}</react_native_paper_1.Button>
            </common_components_1.Group.ActionButtons>
          </>} actionsJustifyContent={types_1.JustifyContent.spaceBetween} contentsStyle={mode === DateTimePicker_common_1.Mode.datetime ? { height, width } : undefined} title={mode === DateTimePicker_common_1.Mode.time ? undefined : lang.PickDate}>
        {step === DateTimePicker_common_1.Step.date ? (<Calendar_1.default SelectDateRangeHint={SelectDateRangeHint} date={localDate} dateFrom={localDateFrom} month={month} onChange={calendarChangeHandler} onMonthChange={setMonth} pickHours={mode === DateTimePicker_common_1.Mode.datetime ? pickHours : typescript_misc_1.fn.noop} weekStartsOn={weekStartsOn} workweekStartsOn={workweekStartsOn}/>) : (<Clock_1.default SelectTimeRangeHint={SelectTimeRangeHint} date={localDate} dateFormat={dateFormat} dateFrom={localDateFrom} fullDaysMode={localFullDaysMode} mode={mode} onChange={clockChangeHandler} pickMinutes={pickMinutes} step={step} timeFormat={timeFormat}/>)}
      </common_components_1.Card>);
});
const { duration, height, width } = core_1.consts.DateTimePicker;
const entering = react_native_reanimated_1.FadeIn.duration(duration);
const exiting = react_native_reanimated_1.FadeOut.duration(duration);
//# sourceMappingURL=index.jsx.map