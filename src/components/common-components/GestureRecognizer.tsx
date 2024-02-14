import * as React from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import type { PanResponderGestureState } from "react-native";
import { isRtl } from "../../consts";
import { memo } from "react-misc";
import { o } from "typescript-misc";

export default memo(
  "GestureRecognizer",
  ({ onSwipeEnd, onSwipeStart, ...props }: Props) => {
    const onSwipeLeft = isRtl ? onSwipeEnd : onSwipeStart;

    const onSwipeRight = isRtl ? onSwipeStart : onSwipeEnd;

    return (
      <GestureRecognizer
        {...o.removeUndefinedKeys({ onSwipeLeft, onSwipeRight, ...props })}
      />
    );
  }
);

/**
 * @internal
 */
export interface Props
  extends Omit<
    React.ComponentProps<typeof GestureRecognizer>,
    "onSwipeLeft" | "onSwipeRight"
  > {
  /**
   * Handles swipe in the end direction.
   *
   * @param gestureState - Gesture state.
   */
  readonly onSwipeEnd?:
    | ((gestureState: PanResponderGestureState) => void)
    | undefined;
  /**
   * Handles swipe in the start direction.
   *
   * @param gestureState - Gesture state.
   */
  readonly onSwipeStart?:
    | ((gestureState: PanResponderGestureState) => void)
    | undefined;
}
