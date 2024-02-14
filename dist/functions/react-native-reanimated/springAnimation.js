"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.springAnimation = void 0;
const react_native_reanimated_1 = require("react-native-reanimated");
const core_1 = require("../../core");
const springAnimation = (animated, toValue, velocity, callback) => {
    // eslint-disable-next-line no-warning-comments -- Wait for react-native-reanimated update
    // fixme
    if (toValue === animated.value)
        animated.value = toValue - Math.sign(velocity) * smallNumber;
    animated.value = (0, react_native_reanimated_1.withSpring)(toValue, {
        damping,
        mass,
        stiffness,
        velocity
    }, finished => {
        if (callback)
            (0, react_native_reanimated_1.runOnJS)(callback)(finished);
    });
};
exports.springAnimation = springAnimation;
const { damping, mass, smallNumber, stiffness } = core_1.consts.springAnimation;
//# sourceMappingURL=springAnimation.js.map