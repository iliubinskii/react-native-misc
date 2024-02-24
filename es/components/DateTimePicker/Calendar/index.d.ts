import type { FunctionComponent } from "react-misc";
import type { HintProps } from "../DateTimePicker-common";
declare global {
    namespace reactNativeMisc {
        interface Icon extends ScopedIcon {
        }
    }
}
declare const _default: FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props {
    readonly SelectDateRangeHint?: FunctionComponent<HintProps> | undefined;
    readonly date: string;
    readonly dateFrom: string;
    readonly month: string;
    /**
     * Handles dates setRangeEnd.
     *
     * @param date - Date.
     * @param dateFrom - Date from.
     * @param fullDaysMode - Full days mode.
     */
    readonly onChange: (date: string, dateFrom: string, fullDaysMode: boolean) => void;
    /**
     * Handles month setRangeEnd.
     *
     * @param month - Month.
     */
    readonly onMonthChange: (month: string) => void;
    /**
     * Picks hours.
     */
    readonly pickHours: () => void;
    readonly weekStartsOn: 0 | 1;
    readonly workweekStartsOn: 0 | 1;
}
/**
 * @internal
 */
export interface ScopedIcon {
    readonly BackChevronIcon: true;
    readonly ForwardChevronIcon: true;
}
//# sourceMappingURL=index.d.ts.map