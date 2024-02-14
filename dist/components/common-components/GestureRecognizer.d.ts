import * as React from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import type { PanResponderGestureState } from "react-native";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends Omit<React.ComponentProps<typeof GestureRecognizer>, "onSwipeLeft" | "onSwipeRight"> {
    /**
     * Handles swipe in the end direction.
     *
     * @param gestureState - Gesture state.
     */
    readonly onSwipeEnd?: ((gestureState: PanResponderGestureState) => void) | undefined;
    /**
     * Handles swipe in the start direction.
     *
     * @param gestureState - Gesture state.
     */
    readonly onSwipeStart?: ((gestureState: PanResponderGestureState) => void) | undefined;
}
//# sourceMappingURL=GestureRecognizer.d.ts.map