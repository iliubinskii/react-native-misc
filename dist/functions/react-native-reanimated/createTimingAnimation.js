"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTimingAnimation = createTimingAnimation;
const react_native_reanimated_1 = require("react-native-reanimated");
/**
 * Creates animation.
 * @param options - Options.
 * @returns Animation.
 */
function createTimingAnimation(options) {
    const { duration, easing } = options;
    return (animated, toValue, _velocity, callback) => {
        animated.value = (0, react_native_reanimated_1.withTiming)(toValue, { duration, easing }, (...args) => {
            if (callback)
                (0, react_native_reanimated_1.runOnJS)(callback)(...args);
        });
    };
}
//# sourceMappingURL=createTimingAnimation.js.map