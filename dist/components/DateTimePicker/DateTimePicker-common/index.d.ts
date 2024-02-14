import type { CommonProps } from "react-misc";
export declare enum Step {
    date = "date",
    hours = "hours",
    minutes = "minutes"
}
export declare enum Mode {
    date = "date",
    datetime = "datetime",
    time = "time"
}
/**
 * @internal
 */
export interface HintProps extends CommonProps.Children {
    readonly hintActionDone: boolean;
    /**
     * Unset hint action done.
     */
    readonly unsetHintActionDone: () => void;
}
//# sourceMappingURL=index.d.ts.map