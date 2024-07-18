import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { evaluate, fn, num } from "typescript-misc";
import { memo, useRealEffect, useUpdater } from "react-misc";
import Animated, { cancelAnimation, runOnJS, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { Overflow } from "../../types";
import React from "react";
import { View } from "react-native";
import { consts } from "../../core";
import { rtlSign } from "../../consts";
import { useSnackbar } from "../../contexts";
export default memo("AnimatedScrollView", ({ children, customRef, direction, disabled, height, initialOffset, largeSwipeSize, largeSwipeStopInterval, max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER, onScroll = fn.noop, onScrollEnd = fn.noop, onScrollStart = fn.noop, smallSwipeSize, smallSwipeStopInterval, snapAnimation, snapInterval, swipeAnimation, toggleThreshold = Number.MAX_SAFE_INTEGER, width }) => {
    const pan = useSharedValue(0);
    const pan0 = useSharedValue(0);
    const panLastStop = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        runOnJS(onScroll)(pan.value);
        switch (direction) {
            case Direction.column: {
                return { transform: [{ translateY: pan.value }], width };
            }
            case Direction.row: {
                return { transform: [{ translateX: rtlSign * pan.value }], width };
            }
        }
    }, [direction, onScroll, pan, width]);
    const animate = React.useCallback((value, velocity, swipe, step) => {
        value = num.limit(num.round.step(value, step), min, max);
        const callback = (finished = false) => {
            onScroll(pan.value);
            if (finished)
                onScrollEnd(pan.value);
        };
        onScrollStart();
        if (swipe)
            swipeAnimation(pan, value, velocity, callback);
        else
            snapAnimation(pan, value, velocity, callback);
    }, [
        max,
        min,
        onScroll,
        onScrollEnd,
        onScrollStart,
        pan,
        snapAnimation,
        swipeAnimation
    ]);
    const getDelta = React.useCallback(({ translationX, translationY }) => {
        "worklet";
        switch (direction) {
            case Direction.column: {
                return translationY;
            }
            case Direction.row: {
                return rtlSign * translationX;
            }
        }
    }, [direction]);
    const getVelocity = React.useCallback(({ velocityX, velocityY }) => {
        "worklet";
        switch (direction) {
            case Direction.column: {
                return velocityY;
            }
            case Direction.row: {
                return rtlSign * velocityX;
            }
        }
    }, [direction]);
    const { hideSnackbar } = useSnackbar();
    const snap = React.useCallback((delta, velocity) => {
        const value = evaluate(() => {
            if (delta > toggleThreshold * snapInterval)
                return num.ceil.step(pan0.value + delta, snapInterval);
            if (delta < -toggleThreshold * snapInterval)
                return num.floor.step(pan0.value + delta, snapInterval);
            return pan0.value + delta;
        });
        runOnJS(animate)(value, velocity, false, snapInterval);
    }, [animate, pan0, snapInterval, toggleThreshold]);
    const gesture = React.useMemo(() => Gesture.Pan()
        .minDistance(consts.Gesture.pan.minDistance)
        .onTouchesDown((_event, { fail }) => {
        "worklet";
        if (disabled && disabled.value)
            fail();
    })
        .onBegin(() => {
        "worklet";
        cancelAnimation(pan);
        pan0.value = pan.value;
        panLastStop.value = pan.value;
    })
        .onStart(() => {
        "worklet";
        runOnJS(hideSnackbar)();
    })
        .onUpdate(event => {
        "worklet";
        const delta = getDelta(event);
        const velocity = getVelocity(event);
        const value = Math.min(Math.max(pan0.value + delta, min), max);
        pan.value = value;
        if (Math.abs(velocity) < movementThreshold)
            panLastStop.value = value;
        runOnJS(onScroll)(value);
    })
        .onFinalize(event => {
        "worklet";
        const delta = getDelta(event);
        const velocity = getVelocity(event);
        if (velocity > largeSwipeThreshold)
            runOnJS(animate)(panLastStop.value + largeSwipeSize, velocity, true, largeSwipeStopInterval);
        else if (velocity > smallSwipeThreshold)
            runOnJS(animate)(panLastStop.value + smallSwipeSize, velocity, true, smallSwipeStopInterval);
        else if (velocity < -largeSwipeThreshold)
            runOnJS(animate)(panLastStop.value - largeSwipeSize, velocity, true, largeSwipeStopInterval);
        else if (velocity < -smallSwipeThreshold)
            runOnJS(animate)(panLastStop.value - smallSwipeSize, velocity, true, smallSwipeStopInterval);
        else
            runOnJS(snap)(delta, velocity);
    }), [
        animate,
        disabled,
        getDelta,
        getVelocity,
        hideSnackbar,
        largeSwipeSize,
        largeSwipeStopInterval,
        max,
        min,
        onScroll,
        pan,
        pan0,
        panLastStop,
        smallSwipeSize,
        smallSwipeStopInterval,
        snap
    ]);
    // Reset internal state
    useRealEffect(() => {
        pan.value = initialOffset;
    }, [initialOffset]);
    // Update customRef
    useUpdater(() => {
        if (customRef)
            customRef.current = {
                scrollBy: delta => {
                    animate(pan.value + delta, 0, false, snapInterval);
                }
            };
    }, [animate, customRef, pan, snapInterval]);
    return (<GestureDetector gesture={gesture}>
        <View style={{ height, overflow: Overflow.hidden, width }}>
          <Animated.View style={animatedStyle}>{children}</Animated.View>
        </View>
      </GestureDetector>);
});
export var Direction;
(function (Direction) {
    Direction["column"] = "column";
    Direction["row"] = "row";
})(Direction || (Direction = {}));
const { largeSwipeThreshold, movementThreshold, smallSwipeThreshold } = consts.AnimatedScrollView;
//# sourceMappingURL=AnimatedScrollView.jsx.map