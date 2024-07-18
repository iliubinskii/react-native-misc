import { runOnJS, withTiming } from "react-native-reanimated";
/**
 * Creates animation.
 * @param options - Options.
 * @returns Animation.
 */
export function createTimingAnimation(options) {
    const { duration, easing } = options;
    return (animated, toValue, _velocity, callback) => {
        animated.value = withTiming(toValue, { duration, easing }, (...args) => {
            if (callback)
                runOnJS(callback)(...args);
        });
    };
}
//# sourceMappingURL=createTimingAnimation.js.map