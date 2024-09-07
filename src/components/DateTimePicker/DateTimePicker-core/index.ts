import type { CommonProps } from "react-misc";
import type React from "react";

export interface HintProps extends CommonProps.Children {
  readonly customRef: React.MutableRefObject<HintRef>;
}

export interface HintRef {
  /**
   * Set the hint as seen.
   */
  readonly setSeen: () => void;
}
