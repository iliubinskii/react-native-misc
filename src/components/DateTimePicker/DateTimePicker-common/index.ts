import type { CommonProps } from "react-misc";

export enum Step {
  date = "date",
  hours = "hours",
  minutes = "minutes"
}

export enum Mode {
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
