import * as React from "react";
import { ReadonlySet, TimeUnit, a, evaluate, fn, o } from "typescript-misc";
import { useDatetime, useLang } from "react-misc";
import { consts } from "../core";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends ScopedWord {}
    }
  }
}

export enum DayType {
  offDay = "offDay",
  padding = "padding",
  today = "today",
  workday = "workday"
}

/**
 * Calendar hook.
 *
 * @param month - Month.
 * @param weekStartsOn - Week starts on.
 * @param workweekStartsOn - Workweek starts on.
 * @param onDayPress - Handles day press.
 * @returns Calendar variables.
 */
export function useCalendar(
  month: string,
  weekStartsOn: 0 | 1,
  workweekStartsOn: 0 | 1,
  onDayPress: (date: string) => void = fn.noop
): Calendar {
  const datetime = useDatetime();

  const lang = useLang<keyof ScopedWord>();

  return React.useMemo((): Calendar => {
    const firstDay = datetime.create(month).setStartOfWeek(weekStartsOn);

    const offDays = new ReadonlySet<number>(
      workweekStartsOn ? [saturday, sunday] : [friday, saturday]
    );

    const today = datetime.create().setStartOfDay();

    const weekDays = weekStartsOn
      ? [lang.Mon, lang.Tue, lang.Wed, lang.Thu, lang.Fri, lang.Sat, lang.Sun]
      : [lang.Sun, lang.Mon, lang.Tue, lang.Wed, lang.Thu, lang.Fri, lang.Sat];

    return {
      weekDays: weekDays.map((label, day): WeekDay => ({ day, label })),
      weeks: a.fromRange(0, maxWeeks - 1).map(
        (week): Week => ({
          days: a.fromRange(0, daysInWeek - 1).map((day): Day => {
            const d = firstDay.add(week * daysInWeek + day, TimeUnit.days);

            const date = d.toString();

            return o.removeUndefinedKeys({
              date,
              day: d.dayOfMonth(),
              onPress: () => {
                onDayPress(date);
              },
              type: evaluate(() => {
                if (d.isSameDay(today)) return DayType.today;

                if (d.setStartOfMonth().toString() === month)
                  return offDays.has(d.dayOfWeek())
                    ? DayType.offDay
                    : DayType.workday;

                return DayType.padding;
              })
            });
          }),
          week
        })
      )
    };
  }, [datetime, lang, month, onDayPress, weekStartsOn, workweekStartsOn]);
}

/**
 * @internal
 */
export interface Calendar {
  readonly weekDays: WeekDays;
  readonly weeks: Weeks;
}

/**
 * @internal
 */
export interface Day {
  readonly date: string;
  readonly day: number;
  /**
   * Handles day press.
   */
  readonly onPress: () => void;
  readonly type: DayType;
}

/**
 * @internal
 */
export type Days = readonly Day[];

/**
 * @internal
 */
export interface ScopedWord {
  readonly Fri: true;
  readonly Mon: true;
  readonly Sat: true;
  readonly Sun: true;
  readonly Thu: true;
  readonly Tue: true;
  readonly Wed: true;
}

/**
 * @internal
 */
export interface Week {
  readonly days: Days;
  readonly week: number;
}

/**
 * @internal
 */
export interface WeekDay {
  readonly day: number;
  readonly label: string;
}

/**
 * @internal
 */
export type WeekDays = readonly WeekDay[];

/**
 * @internal
 */
export type Weeks = readonly Week[];

const { daysInWeek, friday, maxWeeks, saturday, sunday } = consts.useCalendar;
