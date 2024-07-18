import type {
  EasingFunction,
  EasingFunctionFactory
} from "react-native-reanimated";
import { runOnJS, withTiming } from "react-native-reanimated";
import type { NativeAnimation } from "./react-native-reanimated-common";
import { num } from "typescript-misc";

/**
 * Creates animation.
 * @param options - Options.
 * @returns Animation.
 */
export function createVelocityAnimation(options: Options): NativeAnimation {
  const { averageVelocity, easing, maxDuration, minDuration } = options;

  return (animated, toValue, velocity, callback) => {
    const duration = velocity
      ? num.limit(
          1000 * ((toValue - animated.value) / (averageVelocity * velocity)),
          minDuration,
          maxDuration
        )
      : maxDuration;

    animated.value = withTiming(toValue, { duration, easing }, (...args) => {
      if (callback) runOnJS(callback)(...args);
    });
  };
}

/**
 * @internal
 */
export interface Options {
  readonly averageVelocity: number;
  readonly easing: EasingFunction | EasingFunctionFactory;
  readonly maxDuration: number;
  readonly minDuration: number;
}
