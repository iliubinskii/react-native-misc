import { memo, useUpdater } from "react-misc";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import React from "react";
import { consts } from "../core";
export default memo("Shakable", ({ children, customRef }) => {
    const pan = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX * Math.sin(2 * Math.PI * oscillations * pan.value)
                },
                { scale: 1 + scale * Math.sin(Math.PI * pan.value) ** 2 }
            ]
        };
    }, [pan]);
    useUpdater(() => {
        if (customRef)
            customRef.current = {
                shake: () => {
                    pan.value = withTiming(pan.value + 1, { duration });
                }
            };
    }, [customRef, pan]);
    return <Animated.View style={animatedStyle}>{children}</Animated.View>;
});
const { duration, oscillations, scale, translateX } = consts.Shakable;
//# sourceMappingURL=Shakable.jsx.map