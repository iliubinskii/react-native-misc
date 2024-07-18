"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_components_1 = require("../../common-components");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const types_1 = require("../../../types");
const react_misc_1 = require("react-misc");
const react_native_reanimated_1 = require("react-native-reanimated");
const hooks_1 = require("../../../hooks");
const Circle_1 = tslib_1.__importDefault(require("./Circle"));
const Day_1 = tslib_1.__importDefault(require("./Day"));
const react_1 = tslib_1.__importDefault(require("react"));
const SelectionRow_1 = tslib_1.__importDefault(require("./SelectionRow"));
const react_native_svg_1 = require("react-native-svg");
const typescript_misc_1 = require("typescript-misc");
const react_native_1 = require("react-native");
const core_1 = require("../../../core");
const icons_1 = require("../../../icons");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Calendar", ({ SelectDateRangeHint = common_components_1.Dummy, date, dateFrom, month, onChange, onMonthChange, pickHours, weekStartsOn, workweekStartsOn }) => {
    const { BackChevronIcon, ForwardChevronIcon } = (0, icons_1.useIcons)();
    const { weekDays, weeks } = (0, hooks_1.useCalendar)(month, weekStartsOn, workweekStartsOn);
    const { colors } = (0, contexts_1.useThemeExtended)();
    const datetime = (0, react_misc_1.useDatetime)();
    const firstDay = react_1.default.useMemo(() => datetime.create(month).setStartOfWeek(weekStartsOn), [datetime, month, weekStartsOn]);
    const [hintActionDone, setHintActionDone, unsetHintActionDone] = (0, react_misc_1.useBoolean)();
    const initialSelection = react_1.default.useMemo(() => date > dateFrom && datetime.create(date).isStartOfDay()
        ? datetime
            .create(date)
            .setStartOfDay()
            .sub(1, typescript_misc_1.TimeUnit.day)
            .differenceInDays(firstDay)
        : datetime.create(date).setStartOfDay().differenceInDays(firstDay), [date, dateFrom, datetime, firstDay]);
    const initialSelectionFrom = react_1.default.useMemo(() => datetime.create(dateFrom).setStartOfDay().differenceInDays(firstDay), [dateFrom, datetime, firstDay]);
    const { layout, onLayout } = (0, hooks_1.useLayoutReanimated)();
    const selection1 = (0, react_native_reanimated_1.useSharedValue)(initialSelection);
    const selection2 = (0, react_native_reanimated_1.useSharedValue)(initialSelectionFrom);
    const back = react_1.default.useCallback(() => {
        onMonthChange(datetime.create(month).sub(1, typescript_misc_1.TimeUnit.month).toString());
    }, [datetime, month, onMonthChange]);
    const forward = react_1.default.useCallback(() => {
        onMonthChange(datetime.create(month).add(1, typescript_misc_1.TimeUnit.month).toString());
    }, [datetime, month, onMonthChange]);
    const setRangeEnd = react_1.default.useCallback((index1, index2) => {
        const index = Math.max(index1, index2);
        const indexFrom = Math.min(index1, index2);
        if (index === initialSelection && indexFrom === initialSelectionFrom) {
            // Skip
        }
        else
            onChange(firstDay.add(index + 1, typescript_misc_1.TimeUnit.days).toString(), firstDay.add(indexFrom, typescript_misc_1.TimeUnit.days).toString(), true);
        if (index === indexFrom)
            pickHours();
        if (index === indexFrom) {
            // Skip
        }
        else
            setHintActionDone();
    }, [
        firstDay,
        initialSelection,
        initialSelectionFrom,
        onChange,
        pickHours,
        setHintActionDone
    ]);
    const setRange = react_1.default.useCallback((x, y, step) => {
        "worklet";
        if (layout.value) {
            const day = Math.round(x / size - 0.5);
            const week = Math.round(y / size - 0.5);
            const selection = week * daysInWeek + day;
            if (step === GestureStep.start)
                selection1.value = selection;
            selection2.value = selection;
            if (step === GestureStep.end)
                (0, react_native_reanimated_1.runOnJS)(setRangeEnd)(selection, selection1.value);
        }
    }, [layout, selection1, selection2, setRangeEnd]);
    const gesture = react_1.default.useMemo(() => react_native_gesture_handler_1.Gesture.Pan()
        .minDistance(core_1.consts.Gesture.pan.minDistance)
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
    (0, react_misc_1.useRealEffect)(() => {
        selection1.value = initialSelection;
        selection2.value = initialSelectionFrom;
    }, [initialSelection, initialSelectionFrom]);
    return (<react_native_1.View style={{ gap }}>
        <common_components_1.Row style={{ justifyContent: types_1.JustifyContent.spaceBetween }}>
          <common_components_1.IconButton Icon={BackChevronIcon} iconColor={colors.fadeMore} onPress={back} padding={iconPadding} size={iconSize} style={{ margin: 0 }}/>
          <common_components_1.Text style={{ color: colors.fade, verticalAlign: types_1.VerticalAlign.middle }} variant={types_1.TextVariant.bodyLarge}>
            {datetime.create(month).format(format.monthYear)}
          </common_components_1.Text>
          <common_components_1.IconButton Icon={ForwardChevronIcon} iconColor={colors.fadeMore} onPress={forward} padding={iconPadding} size={iconSize} style={{ margin: 0 }}/>
        </common_components_1.Row>
        <react_native_1.View>
          <common_components_1.Row style={{ paddingVertical }}>
            {weekDays.map(({ day, label }) => (<common_components_1.Text key={day} style={{
                color: colors.fade,
                textAlign: types_1.TextAlign.center,
                width: size
            }} variant={types_1.TextVariant.bodySmall}>
                {label}
              </common_components_1.Text>))}
          </common_components_1.Row>
          <react_native_gesture_handler_1.GestureDetector gesture={gesture}>
            <SelectDateRangeHint hintActionDone={hintActionDone} unsetHintActionDone={unsetHintActionDone}>
              <react_native_1.View onLayout={onLayout} style={{ height: size * maxWeeks, width: size * daysInWeek }}>
                <react_native_svg_1.Svg height={size * maxWeeks} style={{ position: types_1.Position.absolute, start: 0, top: 0 }} width={size * daysInWeek}>
                  {weeks.map(({ week }) => (<SelectionRow_1.default key={week} selection1={selection1} selection2={selection2} week={week}/>))}
                  <Circle_1.default selection={selection1}/>
                  <Circle_1.default selection={selection2}/>
                </react_native_svg_1.Svg>
                {weeks.map(({ days, week }) => (<common_components_1.Row key={week}>
                    {days.map(({ day, type }) => (<Day_1.default day={day} key={day} type={type}/>))}
                  </common_components_1.Row>))}
              </react_native_1.View>
            </SelectDateRangeHint>
          </react_native_gesture_handler_1.GestureDetector>
        </react_native_1.View>
      </react_native_1.View>);
});
var GestureStep;
(function (GestureStep) {
    GestureStep["end"] = "end";
    GestureStep["start"] = "start";
    GestureStep["update"] = "update";
})(GestureStep || (GestureStep = {}));
const { Calendar: { daysInWeek, format, gap, maxWeeks, paddingVertical, size }, iconPadding, iconSize } = core_1.consts.DateTimePicker;
//# sourceMappingURL=index.jsx.map