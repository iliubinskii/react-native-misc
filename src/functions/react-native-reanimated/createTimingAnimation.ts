import type {
  EasingFunction,
  EasingFunctionFactory
} from "react-native-reanimated";
import { runOnJS, withTiming } from "react-native-reanimated";
import type { NativeAnimation } from "./react-native-reanimated-common";

/**
 * Creates animation.
 *
 * @param options - Options.
 * @returns Animation.
 */
export function createTimingAnimation(options: Options): NativeAnimation {
  const { duration, easing } = options;

  return (animated, toValue, _velocity, callback) => {
    animated.value = withTiming(toValue, { duration, easing }, (...args) => {
      if (callback) runOnJS(callback)(...args);
    });
  };
}

/**
 * @internal
 */
export interface Options {
  readonly duration: number;
  readonly easing: EasingFunction | EasingFunctionFactory;
}
