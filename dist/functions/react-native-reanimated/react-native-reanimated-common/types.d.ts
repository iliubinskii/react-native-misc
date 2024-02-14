import type { AnimationCallback, SharedValue } from "react-native-reanimated";
export interface NativeAnimation {
    /**
     * Native animation.
     *
     * @param animated - Animated value.
     * @param toValue - Target value.
     * @param velocity - Initial velocity.
     * @param callback - Callback.
     */
    (animated: SharedValue<number>, toValue: number, velocity: number, callback?: AnimationCallback): void;
}
//# sourceMappingURL=types.d.ts.map