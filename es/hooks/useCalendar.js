import * as React from "react";
import { ReadonlySet, TimeUnit, a, evaluate, fn, o } from "typescript-misc";
import { useDatetime, useLang } from "react-misc";
import { consts } from "../core";
export var DayType;
(function (DayType) {
    DayType["offDay"] = "offDay";
    DayType["padding"] = "padding";
    DayType["today"] = "today";
    DayType["workday"] = "workday";
})(DayType || (DayType = {}));
/**
 * Calendar hook.
 *
 * @param month - Month.
 * @param weekStartsOn - Week starts on.
 * @param workweekStartsOn - Workweek starts on.
 * @param onDayPress - Handles day press.
 * @returns Calendar variables.
 */
export function useCalendar(month, weekStartsOn, workweekStartsOn, onDayPress = fn.noop) {
    const datetime = useDatetime();
    const lang = useLang();
    return React.useMemo(() => {
        const firstDay = datetime.create(month).setStartOfWeek(weekStartsOn);
        const offDays = new ReadonlySet(workweekStartsOn ? [saturday, sunday] : [friday, saturday]);
        const today = datetime.create().setStartOfDay();
        const weekDays = weekStartsOn
            ? [lang.Mon, lang.Tue, lang.Wed, lang.Thu, lang.Fri, lang.Sat, lang.Sun]
            : [lang.Sun, lang.Mon, lang.Tue, lang.Wed, lang.Thu, lang.Fri, lang.Sat];
        return {
            weekDays: weekDays.map((label, day) => ({ day, label })),
            weeks: a.fromRange(0, maxWeeks - 1).map((week) => ({
                days: a.fromRange(0, daysInWeek - 1).map((day) => {
                    const d = firstDay.add(week * daysInWeek + day, TimeUnit.days);
                    const date = d.toString();
                    return o.removeUndefinedKeys({
                        date,
                        day: d.dayOfMonth(),
                        onPress: () => {
                            onDayPress(date);
                        },
                        type: evaluate(() => {
                            if (d.isSameDay(today))
                                return DayType.today;
                            if (d.setStartOfMonth().toString() === month)
                                return offDays.has(d.dayOfWeek())
                                    ? DayType.offDay
                                    : DayType.workday;
                            return DayType.padding;
                        })
                    });
                }),
                week
            }))
        };
    }, [datetime, lang, month, onDayPress, weekStartsOn, workweekStartsOn]);
}
const { daysInWeek, friday, maxWeeks, saturday, sunday } = consts.useCalendar;
//# sourceMappingURL=useCalendar.js.map