"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
const tslib_1 = require("tslib");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const types_1 = require("../../types");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const core_1 = require("../../core");
const consts_1 = require("../../consts");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("AnimatedScrollView", ({ children, customRef, direction, disabled, height, initialOffset, largeSwipeSize, largeSwipeStopInterval, max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER, onScroll = typescript_misc_1.fn.noop, onScrollEnd = typescript_misc_1.fn.noop, onScrollStart = typescript_misc_1.fn.noop, smallSwipeSize, smallSwipeStopInterval, snapAnimation, snapInterval, swipeAnimation, toggleThreshold = Number.MAX_SAFE_INTEGER, width }) => {
    const pan = (0, react_native_reanimated_1.useSharedValue)(0);
    const pan0 = (0, react_native_reanimated_1.useSharedValue)(0);
    const panLastStop = (0, react_native_reanimated_1.useSharedValue)(0);
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        (0, react_native_reanimated_1.runOnJS)(onScroll)(pan.value);
        switch (direction) {
            case Direction.column: {
                return { transform: [{ translateY: pan.value }], width };
            }
            case Direction.row: {
                return { transform: [{ translateX: consts_1.rtlSign * pan.value }], width };
            }
        }
    }, [direction, onScroll, pan, width]);
    const animate = react_1.default.useCallback((value, velocity, swipe, step) => {
        value = typescript_misc_1.num.limit(typescript_misc_1.num.round.step(value, step), min, max);
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
    const getDelta = react_1.default.useCallback(({ translationX, translationY }) => {
        "worklet";
        switch (direction) {
            case Direction.column: {
                return translationY;
            }
            case Direction.row: {
                return consts_1.rtlSign * translationX;
            }
        }
    }, [direction]);
    const getVelocity = react_1.default.useCallback(({ velocityX, velocityY }) => {
        "worklet";
        switch (direction) {
            case Direction.column: {
                return velocityY;
            }
            case Direction.row: {
                return consts_1.rtlSign * velocityX;
            }
        }
    }, [direction]);
    const { hideSnackbar } = (0, contexts_1.useSnackbar)();
    const snap = react_1.default.useCallback((delta, velocity) => {
        const value = (0, typescript_misc_1.evaluate)(() => {
            if (delta > toggleThreshold * snapInterval)
                return typescript_misc_1.num.ceil.step(pan0.value + delta, snapInterval);
            if (delta < -toggleThreshold * snapInterval)
                return typescript_misc_1.num.floor.step(pan0.value + delta, snapInterval);
            return pan0.value + delta;
        });
        (0, react_native_reanimated_1.runOnJS)(animate)(value, velocity, false, snapInterval);
    }, [animate, pan0, snapInterval, toggleThreshold]);
    const gesture = react_1.default.useMemo(() => react_native_gesture_handler_1.Gesture.Pan()
        .minDistance(core_1.consts.Gesture.pan.minDistance)
        .onTouchesDown((_event, { fail }) => {
        "worklet";
        if (disabled && disabled.value)
            fail();
    })
        .onBegin(() => {
        "worklet";
        (0, react_native_reanimated_1.cancelAnimation)(pan);
        pan0.value = pan.value;
        panLastStop.value = pan.value;
    })
        .onStart(() => {
        "worklet";
        (0, react_native_reanimated_1.runOnJS)(hideSnackbar)();
    })
        .onUpdate(event => {
        "worklet";
        const delta = getDelta(event);
        const velocity = getVelocity(event);
        const value = Math.min(Math.max(pan0.value + delta, min), max);
        pan.value = value;
        if (Math.abs(velocity) < movementThreshold)
            panLastStop.value = value;
        (0, react_native_reanimated_1.runOnJS)(onScroll)(value);
    })
        .onFinalize(event => {
        "worklet";
        const delta = getDelta(event);
        const velocity = getVelocity(event);
        if (velocity > largeSwipeThreshold)
            (0, react_native_reanimated_1.runOnJS)(animate)(panLastStop.value + largeSwipeSize, velocity, true, largeSwipeStopInterval);
        else if (velocity > smallSwipeThreshold)
            (0, react_native_reanimated_1.runOnJS)(animate)(panLastStop.value + smallSwipeSize, velocity, true, smallSwipeStopInterval);
        else if (velocity < -largeSwipeThreshold)
            (0, react_native_reanimated_1.runOnJS)(animate)(panLastStop.value - largeSwipeSize, velocity, true, largeSwipeStopInterval);
        else if (velocity < -smallSwipeThreshold)
            (0, react_native_reanimated_1.runOnJS)(animate)(panLastStop.value - smallSwipeSize, velocity, true, smallSwipeStopInterval);
        else
            (0, react_native_reanimated_1.runOnJS)(snap)(delta, velocity);
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
    (0, react_misc_1.useRealEffect)(() => {
        pan.value = initialOffset;
    }, [initialOffset]);
    // Update customRef
    (0, react_misc_1.useUpdater)(() => {
        if (customRef)
            customRef.current = {
                scrollBy: delta => {
                    animate(pan.value + delta, 0, false, snapInterval);
                }
            };
    }, [animate, customRef, pan, snapInterval]);
    return (<react_native_gesture_handler_1.GestureDetector gesture={gesture}>
        <react_native_1.View style={{ height, overflow: types_1.Overflow.hidden, width }}>
          <react_native_reanimated_1.default.View style={animatedStyle}>{children}</react_native_reanimated_1.default.View>
        </react_native_1.View>
      </react_native_gesture_handler_1.GestureDetector>);
});
var Direction;
(function (Direction) {
    Direction["column"] = "column";
    Direction["row"] = "row";
})(Direction || (exports.Direction = Direction = {}));
const { largeSwipeThreshold, movementThreshold, smallSwipeThreshold } = core_1.consts.AnimatedScrollView;
//# sourceMappingURL=AnimatedScrollView.jsx.map