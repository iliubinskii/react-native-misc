import type { CommonProps, FunctionComponent } from "react-misc";
import { Mode } from "./DateTimePicker-common";
import type { booleanU, numberU, stringU } from "typescript-misc";
import type { HintProps } from "./DateTimePicker-common";
declare global {
    namespace facades {
        namespace lang {
            interface Word extends ScopedWord {
            }
        }
    }
}
export { default as Calendar } from "./Calendar";
export { default as Clock } from "./Clock";
export { Mode } from "./DateTimePicker-common";
declare const _default: FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends CommonProps.Closeable {
    readonly SelectDateRangeHint?: FunctionComponent<HintProps> | undefined;
    readonly SelectTimeRangeHint?: FunctionComponent<HintProps> | undefined;
    readonly date?: stringU;
    readonly dateFormat: string;
    readonly dateFrom?: stringU;
    readonly fullDaysMode?: booleanU;
    readonly mode?: Mode | undefined;
    /**
     * Saves dates.
     *
     * @param date - Date.
     * @param dateFrom - Date from.
     * @param fullDaysMode - Full days mode.
     */
    readonly onSave?: ((date: string, dateFrom: string, fullDaysMode: boolean) => void) | undefined;
    /**
     * Saves times.
     *
     * @param time - Time.
     * @param timeFrom - Time from.
     */
    readonly onSaveTime?: ((time?: number, timeFrom?: number) => void) | undefined;
    readonly time?: numberU;
    readonly timeFormat: string;
    readonly timeFrom?: numberU;
    readonly weekStartsOn: 0 | 1;
    readonly workweekStartsOn: 0 | 1;
}
/**
 * @internal
 */
export interface ScopedWord {
    readonly Back: true;
    readonly PickDate: true;
    readonly Reset: true;
    readonly Save: true;
}
//# sourceMappingURL=index.d.ts.map