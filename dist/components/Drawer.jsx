"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerPosition = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const types_1 = require("../types");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const functions_1 = require("../functions");
const typescript_misc_1 = require("typescript-misc");
const consts_1 = require("../consts");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../contexts");
const hooks_1 = require("../hooks");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const react_native_1 = require("react-native");
const core_1 = require("../core");
const hooks_with_contexts_1 = require("../hooks-with-contexts");
exports.default = (0, react_misc_1.memo)("Drawer", ({ children, customRef, dragToOpen = false, drawerContents, height, onClosed = typescript_misc_1.fn.noop, onOpened = typescript_misc_1.fn.noop, openRef, position, width // eslint-disable-next-line sonarjs/cognitive-complexity -- Ok
 }) => {
    const active = (0, react_native_reanimated_1.useSharedValue)(false);
    const alignItems = alignItemsMap[position];
    const busy = (0, react_native_reanimated_1.useSharedValue)(false);
    const { colors } = (0, contexts_1.useThemeExtended)();
    const justifyContent = justifyContentMap[position];
    const keyboardHeight = (0, contexts_1.useAnimatedKeyboard)();
    const pan = (0, react_native_reanimated_1.useSharedValue)(1);
    const pan0 = (0, react_native_reanimated_1.useSharedValue)(1);
    const [pointerEvents, setPointerEvents, unsetPointerEvents] = (0, react_misc_1.useBoolean)(false);
    const positionBiDir = React.useMemo(() => {
        switch (position) {
            case DrawerPosition.flexStart:
                return consts_1.isRtl ? DrawerPositionBiDir.right : DrawerPositionBiDir.left;
            case DrawerPosition.flexEnd:
                return consts_1.isRtl ? DrawerPositionBiDir.left : DrawerPositionBiDir.right;
            case DrawerPosition.bottom:
                return DrawerPositionBiDir.bottom;
            case DrawerPosition.top:
                return DrawerPositionBiDir.top;
        }
    }, [position]);
    const size = (0, react_native_reanimated_1.useSharedValue)(getSize(width, height, position));
    const windowDimensions = (0, hooks_with_contexts_1.useWindowDimensions)();
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        const translateX = functions_1.worklets.evaluate(() => {
            switch (position) {
                case DrawerPosition.flexStart:
                    return -consts_1.rtlSign * pan.value * size.value;
                case DrawerPosition.flexEnd:
                    return consts_1.rtlSign * pan.value * size.value;
                case DrawerPosition.top:
                case DrawerPosition.bottom:
                    return 0;
            }
        });
        const translateY = functions_1.worklets.evaluate(() => {
            switch (position) {
                case DrawerPosition.flexStart:
                case DrawerPosition.flexEnd:
                    return 0;
                case DrawerPosition.top:
                    return -pan.value * size.value;
                case DrawerPosition.bottom:
                    return pan.value * size.value - keyboardHeight.value;
            }
        });
        return {
            backgroundColor: colors.surface,
            height,
            opacity: pan.value === 1 ? 0 : 1,
            transform: [{ translateX }, { translateY }],
            width
        };
    }, [colors, height, keyboardHeight, pan, position, size, width]);
    const animatedBackdropStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => ({
        backgroundColor: colors.backdrop,
        height: windowDimensions.height,
        opacity: 1 - pan.value,
        position: types_1.Position.absolute,
        width: windowDimensions.width
    }), [windowDimensions.height, windowDimensions.width, colors, pan]);
    const { hideSnackbar } = (0, contexts_1.useSnackbar)();
    const inboundValue = React.useCallback((x, y) => {
        "worklet";
        switch (positionBiDir) {
            case DrawerPositionBiDir.left:
                return x;
            case DrawerPositionBiDir.right:
                return windowDimensions.width - x;
            case DrawerPositionBiDir.top:
                return y;
            case DrawerPositionBiDir.bottom:
                return windowDimensions.height - keyboardHeight.value - y;
        }
    }, [
        windowDimensions.height,
        windowDimensions.width,
        keyboardHeight,
        positionBiDir
    ]);
    const outboundDelta = React.useCallback((dx, dy) => {
        "worklet";
        switch (position) {
            case DrawerPosition.flexStart:
                return -consts_1.rtlSign * dx;
            case DrawerPosition.flexEnd:
                return consts_1.rtlSign * dx;
            case DrawerPosition.top:
                return -dy;
            case DrawerPosition.bottom:
                return dy;
        }
    }, [position]);
    const gestureValue = React.useCallback((event) => {
        "worklet";
        const delta = outboundDelta(event.translationX, event.translationY) -
            Math.max(inboundValue(event.x, event.y) - size.value, 0);
        return functions_1.worklets.limit(pan0.value + delta / size.value, 0, 1);
    }, [inboundValue, outboundDelta, pan0, size]);
    const moveIn = React.useCallback((velocity) => {
        if (busy.value || pan.value === 0) {
            // Skip
        }
        else {
            if (active.value) {
                // Already active
            }
            else {
                active.value = true;
                setPointerEvents();
                onOpened();
            }
            busy.value = true;
            animation(pan, 0, velocity, size.value, () => {
                busy.value = false;
            });
        }
    }, [active, busy, onOpened, pan, setPointerEvents, size]);
    const moveOut = React.useCallback((velocity) => {
        if (busy.value || pan.value === 1) {
            // Skip
        }
        else {
            busy.value = true;
            animation(pan, 1, velocity, size.value, (finished = false) => {
                busy.value = false;
                if (finished && active.value) {
                    active.value = false;
                    unsetPointerEvents();
                    onClosed();
                }
            });
        }
    }, [active, busy, onClosed, pan, size, unsetPointerEvents]);
    const onLayout = React.useCallback(({ nativeEvent: { layout } }) => {
        size.value = getSize(layout.width, layout.height, position);
    }, [position, size]);
    const gesture = React.useMemo(() => react_native_gesture_handler_1.Gesture.Race(react_native_gesture_handler_1.Gesture.Pan()
        .minDistance(core_1.consts.Gesture.pan.minDistance)
        .onTouchesDown(({ allTouches }, { fail }) => {
        "worklet";
        if (active.value ||
            (dragToOpen &&
                allTouches.every(touch => inboundValue(touch.x, touch.y) < dragToOpenThreshold))) {
            // Pannable
        }
        else
            fail();
    })
        .onBegin(event => {
        "worklet";
        (0, react_native_reanimated_1.cancelAnimation)(pan);
        pan0.value =
            pan.value -
                Math.max(inboundValue(event.x, event.y) / size.value - 1, 0);
    })
        .onStart(() => {
        "worklet";
        (0, react_native_reanimated_1.runOnJS)(hideSnackbar)();
        if (active.value) {
            // Already active
        }
        else {
            active.value = true;
            (0, react_native_reanimated_1.runOnJS)(setPointerEvents)();
            (0, react_native_reanimated_1.runOnJS)(onOpened)();
        }
        busy.value = true;
    })
        .onUpdate(event => {
        "worklet";
        pan.value = gestureValue(event);
    })
        .onEnd(() => {
        "worklet";
        busy.value = false;
    })
        .onFinalize(event => {
        "worklet";
        if (active.value)
            if (pan.value === 1) {
                active.value = false;
                (0, react_native_reanimated_1.runOnJS)(unsetPointerEvents)();
                (0, react_native_reanimated_1.runOnJS)(onClosed)();
            }
            else {
                const value = gestureValue(event);
                const delta = outboundDelta(event.translationX, event.translationY);
                const velocity = outboundDelta(event.velocityX, event.velocityY);
                const action = functions_1.worklets.evaluate(() => {
                    if (velocity > swipeThreshold)
                        return Action.swipeOut;
                    if (velocity < -swipeThreshold)
                        return Action.swipeIn;
                    const threshold = functions_1.worklets.evaluate(() => {
                        if (delta > moveOutThreshold.delta)
                            return moveOutThreshold.low;
                        if (delta < -moveOutThreshold.delta)
                            return moveOutThreshold.high;
                        return 0.5;
                    });
                    return value > threshold ? Action.moveOut : Action.moveIn;
                });
                switch (action) {
                    case Action.moveIn:
                        (0, react_native_reanimated_1.runOnJS)(moveIn)();
                        break;
                    case Action.moveOut:
                        (0, react_native_reanimated_1.runOnJS)(moveOut)();
                        break;
                    case Action.swipeIn:
                        (0, react_native_reanimated_1.runOnJS)(moveIn)(velocity);
                        break;
                    case Action.swipeOut:
                        (0, react_native_reanimated_1.runOnJS)(moveOut)(velocity);
                }
            }
    }), react_native_gesture_handler_1.Gesture.Tap()
        .onTouchesDown((_event, { fail }) => {
        "worklet";
        if (active.value) {
            // Tappable
        }
        else
            fail();
    })
        .onEnd(() => {
        "worklet";
        (0, react_native_reanimated_1.runOnJS)(hideSnackbar)();
        (0, react_native_reanimated_1.runOnJS)(moveOut)();
    })), [
        active,
        busy,
        dragToOpen,
        gestureValue,
        hideSnackbar,
        inboundValue,
        moveIn,
        moveOut,
        onClosed,
        onOpened,
        outboundDelta,
        pan,
        pan0,
        setPointerEvents,
        size,
        unsetPointerEvents
    ]);
    const gestureStopPropagation = React.useMemo(() => react_native_gesture_handler_1.Gesture.Tap(), []);
    // Back handler
    (0, hooks_1.useBackHandler)(() => {
        if (active.value) {
            moveOut();
            return true;
        }
        return false;
    });
    // Update customRef
    (0, react_misc_1.useUpdater)(() => {
        if (customRef)
            customRef.current = { close: moveOut, open: moveIn };
    }, [customRef, moveIn, moveOut]);
    // Update openRef
    (0, hooks_1.useAnimatedReaction)(() => ({
        prepare: () => {
            "worklet";
            return pan.value < 1;
        },
        react: next => {
            "worklet";
            if (openRef)
                openRef.value = next;
        }
    }), [openRef, pan]);
    return (<react_native_gesture_handler_1.GestureDetector gesture={gesture}>
        <react_native_1.View>
          {children}
          <react_native_reanimated_1.default.View pointerEvents={pointerEvents ? undefined : types_1.PointerEvents.none} style={animatedBackdropStyle}/>
          <react_native_1.View pointerEvents={pointerEvents ? undefined : types_1.PointerEvents.none} style={{
            alignItems,
            height: windowDimensions.height,
            justifyContent,
            position: types_1.Position.absolute,
            width: windowDimensions.width
        }}>
            <react_native_gesture_handler_1.GestureDetector gesture={gestureStopPropagation}>
              <react_native_reanimated_1.default.View onLayout={onLayout} style={animatedStyle}>
                {drawerContents}
                {position === DrawerPosition.bottom ? (<react_native_1.View style={{
                backgroundColor: colors.surface,
                height: bottomPlaceholderHeight,
                marginBottom: -bottomPlaceholderHeight,
                width
            }}/>) : undefined}
              </react_native_reanimated_1.default.View>
            </react_native_gesture_handler_1.GestureDetector>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_gesture_handler_1.GestureDetector>);
});
var DrawerPosition;
(function (DrawerPosition) {
    DrawerPosition["bottom"] = "bottom";
    DrawerPosition["flexEnd"] = "flexEnd";
    DrawerPosition["flexStart"] = "flexStart";
    DrawerPosition["top"] = "top";
})(DrawerPosition || (exports.DrawerPosition = DrawerPosition = {}));
var Action;
(function (Action) {
    Action["moveIn"] = "moveIn";
    Action["moveOut"] = "moveOut";
    Action["swipeIn"] = "swipeIn";
    Action["swipeOut"] = "swipeOut";
})(Action || (Action = {}));
var DrawerPositionBiDir;
(function (DrawerPositionBiDir) {
    DrawerPositionBiDir["bottom"] = "bottom";
    DrawerPositionBiDir["left"] = "left";
    DrawerPositionBiDir["right"] = "right";
    DrawerPositionBiDir["top"] = "top";
})(DrawerPositionBiDir || (DrawerPositionBiDir = {}));
const { averageVelocity, bottomPlaceholderHeight, dragToOpenThreshold, duration, easing, maxDuration, minDuration, moveOutThreshold, offScreen, swipeThreshold } = core_1.consts.Drawer;
const alignItemsMap = {
    [DrawerPosition.bottom]: types_1.AlignItems.center,
    [DrawerPosition.flexEnd]: types_1.AlignItems.flexEnd,
    [DrawerPosition.flexStart]: types_1.AlignItems.flexStart,
    [DrawerPosition.top]: types_1.AlignItems.center
};
const justifyContentMap = {
    [DrawerPosition.bottom]: types_1.JustifyContent.flexEnd,
    [DrawerPosition.flexEnd]: types_1.JustifyContent.center,
    [DrawerPosition.flexStart]: types_1.JustifyContent.center,
    [DrawerPosition.top]: types_1.JustifyContent.flexStart
};
const timingAnimation = (0, functions_1.createTimingAnimation)({ duration, easing });
const velocityAnimation = (0, functions_1.createVelocityAnimation)({
    averageVelocity,
    easing,
    maxDuration,
    minDuration
});
/**
 * Native animation.
 *
 * @param animated - Animated value.
 * @param toValue - Target value.
 * @param velocity - Initial velocity.
 * @param size - Size.
 * @param callback - Callback.
 */
function animation(animated, toValue, velocity, size, callback) {
    if (typescript_misc_1.is.not.empty(velocity))
        velocityAnimation(animated, toValue, velocity / size, callback);
    else
        timingAnimation(animated, toValue, 0, callback);
}
/**
 * Returns drawer size.
 *
 * @param width - Width.
 * @param height - Height.
 * @param position - Position.
 * @returns Drawer size.
 */
function getSize(width, height, position) {
    "worklet";
    switch (position) {
        case DrawerPosition.flexStart:
        case DrawerPosition.flexEnd:
            return width ?? offScreen;
        case DrawerPosition.top:
        case DrawerPosition.bottom:
            return height ?? offScreen;
    }
}
//# sourceMappingURL=Drawer.jsx.map