import { Mode, Step } from "../DateTimePicker-common";
import type { FunctionComponent } from "react-misc";
import type { HintProps } from "../DateTimePicker-common";
declare global {
    namespace facades {
        namespace lang {
            interface Word extends ScopedWord {
            }
        }
    }
    namespace reactNativeLib {
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
    readonly SelectTimeRangeHint?: FunctionComponent<HintProps> | undefined;
    readonly date: string;
    readonly dateFormat: string;
    readonly dateFrom: string;
    readonly fullDaysMode: boolean;
    readonly mode: Mode;
    /**
     * Handles dates setRangeEnd.
     *
     * @param date - Date.
     * @param dateFrom - Date from.
     * @param fullDaysMode - Full days mode.
     */
    readonly onChange: (date: string, dateFrom: string, fullDaysMode: boolean) => void;
    /**
     * Picks minutes.
     */
    readonly pickMinutes: () => void;
    readonly step: Step.hours | Step.minutes;
    readonly timeFormat: string;
}
/**
 * @internal
 */
export interface ScopedIcon {
    readonly BackChevronIcon: true;
    readonly ForwardChevronIcon: true;
}
/**
 * @internal
 */
export interface ScopedWord {
    readonly Am: true;
    readonly Pm: true;
}
//# sourceMappingURL=index.d.ts.map