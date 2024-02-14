declare global {
    namespace facades {
        namespace lang {
            interface Word extends ScopedWord {
            }
        }
    }
}
export declare enum DayType {
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
export declare function useCalendar(month: string, weekStartsOn: 0 | 1, workweekStartsOn: 0 | 1, onDayPress?: (date: string) => void): Calendar;
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
//# sourceMappingURL=useCalendar.d.ts.map