"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const functions_1 = require("../functions");
const react_misc_1 = require("react-misc");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../core");
const typescript_misc_1 = require("typescript-misc");
const hooks_1 = require("../hooks");
exports.default = (0, react_misc_1.memo)("Swipeable", ({ children, failOnSwipeEnd = false, failOnSwipeStart = false, onSwipeEnd = typescript_misc_1.fn.noop, onSwipeStart = typescript_misc_1.fn.noop, resetKey, threshold = 0 }) => {
    const { layout, onLayout } = (0, hooks_1.useLayout)();
    const activated = (0, react_native_reanimated_1.useSharedValue)(false);
    const initialTouch = (0, react_native_reanimated_1.useSharedValue)(undefined);
    const opacity = (0, react_native_reanimated_1.useSharedValue)(1);
    const pan = (0, react_native_reanimated_1.useSharedValue)(0);
    const pan0 = (0, react_native_reanimated_1.useSharedValue)(0);
    const panOpacity = (0, react_native_reanimated_1.useSharedValue)(0);
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            opacity: opacity.value * (1 - Math.abs(panOpacity.value)),
            transform: [{ translateX: pan.value + panOpacity.value * translateX }]
        };
    }, [opacity, pan, panOpacity]);
    const onEnd = react_1.default.useCallback(({ velocityX }) => {
        if (velocityX > velocityThreshold)
            if (failOnSwipeEnd)
                (0, functions_1.springAnimation)(pan, 0, velocityX, (finished = false) => {
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
                (0, functions_1.springAnimation)(pan, 0, velocityX, (finished = false) => {
                    if (finished)
                        onSwipeStart();
                });
            else
                velocityAnimation(panOpacity, -1, velocityX, (finished = false) => {
                    if (finished)
                        onSwipeStart();
                });
        else
            (0, functions_1.springAnimation)(pan, 0, velocityX);
    }, [
        failOnSwipeEnd,
        failOnSwipeStart,
        onSwipeEnd,
        onSwipeStart,
        pan,
        panOpacity
    ]);
    const gesture = react_1.default.useMemo(() => react_native_gesture_handler_1.Gesture.Pan()
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
            if (dx ** 2 + dy ** 2 > core_1.consts.Gesture.pan.minDistance ** 2)
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
        (0, react_native_reanimated_1.cancelAnimation)(pan);
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
        (0, react_native_reanimated_1.runOnJS)(onEnd)(event);
    })
        .onFinalize(() => {
        "worklet";
        activated.value = false;
    }), [activated, initialTouch, layout, onEnd, pan, pan0, panOpacity, threshold]);
    (0, react_misc_1.useRealEffect)(() => {
        if (pan.value || panOpacity.value) {
            opacity.value = 0;
            opacity.value = (0, react_native_reanimated_1.withTiming)(1, { duration });
            pan.value = 0;
            panOpacity.value = 0;
        }
    }, [resetKey]);
    return (<react_native_gesture_handler_1.GestureDetector gesture={gesture}>
        <react_native_reanimated_1.default.View onLayout={onLayout} style={animatedStyle}>
          {children}
        </react_native_reanimated_1.default.View>
      </react_native_gesture_handler_1.GestureDetector>);
});
const { averageVelocity, directionThreshold, duration, easing, maxDuration, minDuration, translateX, velocityThreshold } = core_1.consts.Swipeable;
const velocityAnimation = (0, functions_1.createVelocityAnimation)({
    averageVelocity,
    easing,
    maxDuration,
    minDuration
});
//# sourceMappingURL=Swipeable.jsx.map