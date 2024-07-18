"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVelocityAnimation = createVelocityAnimation;
const react_native_reanimated_1 = require("react-native-reanimated");
const typescript_misc_1 = require("typescript-misc");
/**
 * Creates animation.
 * @param options - Options.
 * @returns Animation.
 */
function createVelocityAnimation(options) {
    const { averageVelocity, easing, maxDuration, minDuration } = options;
    return (animated, toValue, velocity, callback) => {
        const duration = velocity
            ? typescript_misc_1.num.limit(1000 * ((toValue - animated.value) / (averageVelocity * velocity)), minDuration, maxDuration)
            : maxDuration;
        animated.value = (0, react_native_reanimated_1.withTiming)(toValue, { duration, easing }, (...args) => {
            if (callback)
                (0, react_native_reanimated_1.runOnJS)(callback)(...args);
        });
    };
}
//# sourceMappingURL=createVelocityAnimation.js.map