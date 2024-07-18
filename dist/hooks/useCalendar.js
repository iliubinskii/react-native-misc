"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayType = void 0;
exports.useCalendar = useCalendar;
const tslib_1 = require("tslib");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../core");
var DayType;
(function (DayType) {
    DayType["offDay"] = "offDay";
    DayType["padding"] = "padding";
    DayType["today"] = "today";
    DayType["workday"] = "workday";
})(DayType || (exports.DayType = DayType = {}));
/**
 * Calendar hook.
 * @param month - Month.
 * @param weekStartsOn - Week starts on.
 * @param workweekStartsOn - Workweek starts on.
 * @param onDayPress - Handles day press.
 * @returns Calendar variables.
 */
function useCalendar(month, weekStartsOn, workweekStartsOn, onDayPress = typescript_misc_1.fn.noop) {
    const datetime = (0, react_misc_1.useDatetime)();
    const lang = (0, react_misc_1.useLang)();
    return react_1.default.useMemo(() => {
        const firstDay = datetime.create(month).setStartOfWeek(weekStartsOn);
        const offDays = new typescript_misc_1.ReadonlySet(workweekStartsOn ? [saturday, sunday] : [friday, saturday]);
        const today = datetime.create().setStartOfDay();
        const weekDays = weekStartsOn
            ? [lang.Mon, lang.Tue, lang.Wed, lang.Thu, lang.Fri, lang.Sat, lang.Sun]
            : [lang.Sun, lang.Mon, lang.Tue, lang.Wed, lang.Thu, lang.Fri, lang.Sat];
        return {
            weekDays: weekDays.map((label, day) => {
                return { day, label };
            }),
            weeks: typescript_misc_1.a.fromRange(0, maxWeeks - 1).map((week) => {
                return {
                    days: typescript_misc_1.a.fromRange(0, daysInWeek - 1).map((day) => {
                        const d = firstDay.add(week * daysInWeek + day, typescript_misc_1.TimeUnit.days);
                        const date = d.toString();
                        return {
                            date,
                            day: d.dayOfMonth(),
                            onPress: () => {
                                onDayPress(date);
                            },
                            type: (0, typescript_misc_1.evaluate)(() => {
                                if (d.isSameDay(today))
                                    return DayType.today;
                                if (d.setStartOfMonth().toString() === month)
                                    return offDays.has(d.dayOfWeek())
                                        ? DayType.offDay
                                        : DayType.workday;
                                return DayType.padding;
                            })
                        };
                    }),
                    week
                };
            })
        };
    }, [datetime, lang, month, onDayPress, weekStartsOn, workweekStartsOn]);
}
const { daysInWeek, friday, maxWeeks, saturday, sunday } = core_1.consts.useCalendar;
//# sourceMappingURL=useCalendar.js.map