"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_misc_1 = require("react-misc");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const core_1 = require("../core");
exports.default = (0, react_misc_1.memo)("Shakable", ({ children, customRef }) => {
    const pan = (0, react_native_reanimated_1.useSharedValue)(0);
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => ({
        transform: [
            {
                translateX: translateX * Math.sin(2 * Math.PI * oscillations * pan.value)
            },
            { scale: 1 + scale * Math.sin(Math.PI * pan.value) ** 2 }
        ]
    }), [pan]);
    (0, react_misc_1.useUpdater)(() => {
        if (customRef)
            customRef.current = {
                shake: () => {
                    pan.value = (0, react_native_reanimated_1.withTiming)(pan.value + 1, { duration });
                }
            };
    }, [customRef, pan]);
    return <react_native_reanimated_1.default.View style={animatedStyle}>{children}</react_native_reanimated_1.default.View>;
});
const { duration, oscillations, scale, translateX } = core_1.consts.Shakable;
//# sourceMappingURL=Shakable.jsx.map