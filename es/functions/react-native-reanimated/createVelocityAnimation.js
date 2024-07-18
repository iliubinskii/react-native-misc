import { runOnJS, withTiming } from "react-native-reanimated";
import { num } from "typescript-misc";
/**
 * Creates animation.
 * @param options - Options.
 * @returns Animation.
 */
export function createVelocityAnimation(options) {
    const { averageVelocity, easing, maxDuration, minDuration } = options;
    return (animated, toValue, velocity, callback) => {
        const duration = velocity
            ? num.limit(1000 * ((toValue - animated.value) / (averageVelocity * velocity)), minDuration, maxDuration)
            : maxDuration;
        animated.value = withTiming(toValue, { duration, easing }, (...args) => {
            if (callback)
                runOnJS(callback)(...args);
        });
    };
}
//# sourceMappingURL=createVelocityAnimation.js.map