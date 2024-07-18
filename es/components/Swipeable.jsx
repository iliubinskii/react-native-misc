import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { createVelocityAnimation, springAnimation } from "../functions";
import { memo, useRealEffect } from "react-misc";
import Animated, { cancelAnimation, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import React from "react";
import { consts } from "../core";
import { fn } from "typescript-misc";
import { useLayout } from "../hooks";
export default memo("Swipeable", ({ children, failOnSwipeEnd = false, failOnSwipeStart = false, onSwipeEnd = fn.noop, onSwipeStart = fn.noop, resetKey, threshold = 0 }) => {
    const { layout, onLayout } = useLayout();
    const activated = useSharedValue(false);
    const initialTouch = useSharedValue(undefined);
    const opacity = useSharedValue(1);
    const pan = useSharedValue(0);
    const pan0 = useSharedValue(0);
    const panOpacity = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value * (1 - Math.abs(panOpacity.value)),
            transform: [{ translateX: pan.value + panOpacity.value * translateX }]
        };
    }, [opacity, pan, panOpacity]);
    const onEnd = React.useCallback(({ velocityX }) => {
        if (velocityX > velocityThreshold)
            if (failOnSwipeEnd)
                springAnimation(pan, 0, velocityX, (finished = false) => {
                    if (finished)
                        onSwipeEnd();
                });
            else
                velocityAnimation(panOpacity, 1, velocityX, (finished = false) => {
                    if (finished)
                        onSwipeEnd();
                });
        else if (velocityX < -velocityThreshold)
            if (failOnSwipeStart)
                springAnimation(pan, 0, velocityX, (finished = false) => {
                    if (finished)
                        onSwipeStart();
                });
            else
                velocityAnimation(panOpacity, -1, velocityX, (finished = false) => {
                    if (finished)
                        onSwipeStart();
                });
        else
            springAnimation(pan, 0, velocityX);
    }, [
        failOnSwipeEnd,
        failOnSwipeStart,
        onSwipeEnd,
        onSwipeStart,
        pan,
        panOpacity
    ]);
    const gesture = React.useMemo(() => Gesture.Pan()
        .manualActivation(true)
        .onTouchesDown(({ allTouches }, { fail }) => {
        "worklet";
        const touch = allTouches[0];
        if (activated.value) {
            // Activated
        }
        else if (allTouches.length === 1 &&
            layout &&
            touch &&
            touch.x > layout.x + threshold &&
            touch.x < layout.x + layout.width - threshold)
            initialTouch.value = touch;
        else
            fail();
    })
        .onTouchesMove(({ allTouches }, { activate, fail }) => {
        "worklet";
        const touch = allTouches[0];
        if (activated.value) {
            // Activated
        }
        else if (allTouches.length === 1 &&
            layout &&
            initialTouch.value &&
            touch &&
            touch.x > layout.x + threshold &&
            touch.x < layout.x + layout.width - threshold) {
            const dx = touch.x - initialTouch.value.x;
            const dy = touch.y - initialTouch.value.y;
            if (dx ** 2 + dy ** 2 > consts.Gesture.pan.minDistance ** 2)
                if (Math.abs(dy) < directionThreshold * Math.abs(dx))
                    activate();
                else
                    fail();
        }
        else
            fail();
    })
        .onStart(() => {
        "worklet";
        cancelAnimation(pan);
        activated.value = true;
        pan0.value = pan.value;
        panOpacity.value = 0;
    })
        .onUpdate(event => {
        "worklet";
        pan.value = pan0.value + event.translationX;
    })
        .onEnd(event => {
        "worklet";
        runOnJS(onEnd)(event);
    })
        .onFinalize(() => {
        "worklet";
        activated.value = false;
    }), [activated, initialTouch, layout, onEnd, pan, pan0, panOpacity, threshold]);
    useRealEffect(() => {
        if (pan.value || panOpacity.value) {
            opacity.value = 0;
            opacity.value = withTiming(1, { duration });
            pan.value = 0;
            panOpacity.value = 0;
        }
    }, [resetKey]);
    return (<GestureDetector gesture={gesture}>
        <Animated.View onLayout={onLayout} style={animatedStyle}>
          {children}
        </Animated.View>
      </GestureDetector>);
});
const { averageVelocity, directionThreshold, duration, easing, maxDuration, minDuration, translateX, velocityThreshold } = consts.Swipeable;
const velocityAnimation = createVelocityAnimation({
    averageVelocity,
    easing,
    maxDuration,
    minDuration
});
//# sourceMappingURL=Swipeable.jsx.map