import * as React from "react";
import { AlignItems, JustifyContent, PointerEvents, Position } from "../types";
import type { AnimationCallback, SharedValue } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import type {
  GestureUpdateEvent,
  PanGestureHandlerEventPayload
} from "react-native-gesture-handler";
import type { LayoutChangeEvent, ViewStyle } from "react-native";
import type { booleanU, numberU } from "typescript-misc";
import {
  createTimingAnimation,
  createVelocityAnimation,
  worklets
} from "../functions";
import { fn, is } from "typescript-misc";
import { isRtl, rtlSign } from "../consts";
import { memo, useBoolean, useUpdater } from "react-misc";
import {
  useAnimatedKeyboard,
  useSnackbar,
  useThemeExtended
} from "../contexts";
import { useAnimatedReaction, useBackHandler } from "../hooks";
import Animated, {
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";
import type { AnimatedReactionCallbacks } from "../hooks";
import type { CommonProps } from "react-misc";
import { View } from "react-native";
import { consts } from "../core";
import { useWindowDimensions } from "../hooks-with-contexts";

export default memo(
  "Drawer",
  ({
    children,
    customRef,
    dragToOpen = false,
    drawerContents,
    height,
    onClosed = fn.noop,
    onOpened = fn.noop,
    openRef,
    position,
    width // eslint-disable-next-line sonarjs/cognitive-complexity -- Ok
  }: Props) => {
    const active = useSharedValue(false);

    const alignItems = alignItemsMap[position];

    const busy = useSharedValue(false);

    const { colors } = useThemeExtended();

    const justifyContent = justifyContentMap[position];

    const keyboardHeight = useAnimatedKeyboard();

    const pan = useSharedValue(1);

    const pan0 = useSharedValue(1);

    const [pointerEvents, setPointerEvents, unsetPointerEvents] =
      useBoolean(false);

    const positionBiDir = React.useMemo(() => {
      switch (position) {
        case DrawerPosition.flexStart:
          return isRtl ? DrawerPositionBiDir.right : DrawerPositionBiDir.left;

        case DrawerPosition.flexEnd:
          return isRtl ? DrawerPositionBiDir.left : DrawerPositionBiDir.right;

        case DrawerPosition.bottom:
          return DrawerPositionBiDir.bottom;

        case DrawerPosition.top:
          return DrawerPositionBiDir.top;
      }
    }, [position]);

    const size = useSharedValue(getSize(width, height, position));

    const windowDimensions = useWindowDimensions();

    const animatedStyle = useAnimatedStyle((): ViewStyle => {
      const translateX = worklets.evaluate(() => {
        switch (position) {
          case DrawerPosition.flexStart:
            return -rtlSign * pan.value * size.value;

          case DrawerPosition.flexEnd:
            return rtlSign * pan.value * size.value;

          case DrawerPosition.top:
          case DrawerPosition.bottom:
            return 0;
        }
      });

      const translateY = worklets.evaluate(() => {
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

    const animatedBackdropStyle = useAnimatedStyle(
      (): ViewStyle => ({
        backgroundColor: colors.backdrop,
        height: windowDimensions.height,
        opacity: 1 - pan.value,
        position: Position.absolute,
        width: windowDimensions.width
      }),
      [windowDimensions.height, windowDimensions.width, colors, pan]
    );

    const { hideSnackbar } = useSnackbar();

    const inboundValue = React.useCallback(
      (x: number, y: number) => {
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
      },
      [
        windowDimensions.height,
        windowDimensions.width,
        keyboardHeight,
        positionBiDir
      ]
    );

    const outboundDelta = React.useCallback(
      (dx: number, dy: number) => {
        "worklet";

        switch (position) {
          case DrawerPosition.flexStart:
            return -rtlSign * dx;

          case DrawerPosition.flexEnd:
            return rtlSign * dx;

          case DrawerPosition.top:
            return -dy;

          case DrawerPosition.bottom:
            return dy;
        }
      },
      [position]
    );

    const gestureValue = React.useCallback(
      (event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
        "worklet";

        const delta =
          outboundDelta(event.translationX, event.translationY) -
          Math.max(inboundValue(event.x, event.y) - size.value, 0);

        return worklets.limit(pan0.value + delta / size.value, 0, 1);
      },
      [inboundValue, outboundDelta, pan0, size]
    );

    const moveIn = React.useCallback(
      (velocity?: number) => {
        if (busy.value || pan.value === 0) {
          // Skip
        } else {
          if (active.value) {
            // Already active
          } else {
            active.value = true;
            setPointerEvents();
            onOpened();
          }

          busy.value = true;
          animation(pan, 0, velocity, size.value, () => {
            busy.value = false;
          });
        }
      },
      [active, busy, onOpened, pan, setPointerEvents, size]
    );

    const moveOut = React.useCallback(
      (velocity?: number) => {
        if (busy.value || pan.value === 1) {
          // Skip
        } else {
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
      },
      [active, busy, onClosed, pan, size, unsetPointerEvents]
    );

    const onLayout = React.useCallback(
      ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
        size.value = getSize(layout.width, layout.height, position);
      },
      [position, size]
    );

    const gesture = React.useMemo(
      () =>
        Gesture.Race(
          Gesture.Pan()
            .minDistance(consts.Gesture.pan.minDistance)
            .onTouchesDown(({ allTouches }, { fail }) => {
              if (
                active.value ||
                (dragToOpen &&
                  allTouches.every(
                    touch =>
                      inboundValue(touch.x, touch.y) < dragToOpenThreshold
                  ))
              ) {
                // Pannable
              } else fail();
            })
            .onBegin(event => {
              cancelAnimation(pan);
              pan0.value =
                pan.value -
                Math.max(inboundValue(event.x, event.y) / size.value - 1, 0);
            })
            .onStart(() => {
              runOnJS(hideSnackbar)();

              if (active.value) {
                // Already active
              } else {
                active.value = true;
                runOnJS(setPointerEvents)();
                runOnJS(onOpened)();
              }

              busy.value = true;
            })
            .onUpdate(event => {
              pan.value = gestureValue(event);
            })
            .onEnd(() => {
              busy.value = false;
            })
            .onFinalize(event => {
              if (active.value)
                if (pan.value === 1) {
                  active.value = false;
                  runOnJS(unsetPointerEvents)();
                  runOnJS(onClosed)();
                } else {
                  const value = gestureValue(event);

                  const delta = outboundDelta(
                    event.translationX,
                    event.translationY
                  );

                  const velocity = outboundDelta(
                    event.velocityX,
                    event.velocityY
                  );

                  const action = worklets.evaluate(() => {
                    if (velocity > swipeThreshold) return Action.swipeOut;

                    if (velocity < -swipeThreshold) return Action.swipeIn;

                    const threshold = worklets.evaluate(() => {
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
                      runOnJS(moveIn)();

                      break;

                    case Action.moveOut:
                      runOnJS(moveOut)();

                      break;

                    case Action.swipeIn:
                      runOnJS(moveIn)(velocity);

                      break;

                    case Action.swipeOut:
                      runOnJS(moveOut)(velocity);
                  }
                }
            }),
          Gesture.Tap()
            .onTouchesDown((_event, { fail }) => {
              if (active.value) {
                // Tappable
              } else fail();
            })
            .onEnd(() => {
              runOnJS(hideSnackbar)();
              runOnJS(moveOut)();
            })
        ),
      [
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
      ]
    );

    const gestureStopPropagation = React.useMemo(() => Gesture.Tap(), []);

    // Back handler
    useBackHandler(() => {
      if (active.value) {
        moveOut();

        return true;
      }

      return false;
    });

    // Update customRef
    useUpdater(() => {
      if (customRef) customRef.current = { close: moveOut, open: moveIn };
    }, [customRef, moveIn, moveOut]);

    // Update openRef
    useAnimatedReaction(
      (): AnimatedReactionCallbacks<boolean> => ({
        prepare: () => {
          "worklet";

          return pan.value < 1;
        },
        react: next => {
          "worklet";

          if (openRef) openRef.value = next;
        }
      }),
      [openRef, pan]
    );

    return (
      <GestureDetector gesture={gesture}>
        <View>
          {children}
          <Animated.View
            pointerEvents={pointerEvents ? undefined : PointerEvents.none}
            style={animatedBackdropStyle}
          />
          <View
            pointerEvents={pointerEvents ? undefined : PointerEvents.none}
            style={{
              alignItems,
              height: windowDimensions.height,
              justifyContent,
              position: Position.absolute,
              width: windowDimensions.width
            }}
          >
            <GestureDetector gesture={gestureStopPropagation}>
              <Animated.View onLayout={onLayout} style={animatedStyle}>
                {drawerContents}
                {position === DrawerPosition.bottom ? (
                  <View
                    style={{
                      backgroundColor: colors.surface,
                      height: bottomPlaceholderHeight,
                      marginBottom: -bottomPlaceholderHeight,
                      width
                    }}
                  />
                ) : undefined}
              </Animated.View>
            </GestureDetector>
          </View>
        </View>
      </GestureDetector>
    );
  }
);

export enum DrawerPosition {
  bottom = "bottom",
  flexEnd = "flexEnd",
  flexStart = "flexStart",
  top = "top"
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly customRef?: React.MutableRefObject<Ref> | undefined;
  readonly dragToOpen?: booleanU;
  readonly drawerContents?: React.ReactNode;
  readonly height?: numberU;
  /**
   * Triggered when close animation finishes.
   */
  readonly onClosed?: (() => void) | undefined;
  /**
   * Triggered when open animation starts.
   */
  readonly onOpened?: (() => void) | undefined;
  readonly openRef?: SharedValue<boolean> | undefined;
  readonly position: DrawerPosition;
  readonly width?: numberU;
}

export interface Ref {
  /**
   * Closes drawer.
   */
  readonly close: () => void;
  /**
   * Opens drawer.
   */
  readonly open: () => void;
}

enum Action {
  moveIn = "moveIn",
  moveOut = "moveOut",
  swipeIn = "swipeIn",
  swipeOut = "swipeOut"
}

enum DrawerPositionBiDir {
  bottom = "bottom",
  left = "left",
  right = "right",
  top = "top"
}

const {
  averageVelocity,
  bottomPlaceholderHeight,
  dragToOpenThreshold,
  duration,
  easing,
  maxDuration,
  minDuration,
  moveOutThreshold,
  offScreen,
  swipeThreshold
} = consts.Drawer;

const alignItemsMap = {
  [DrawerPosition.bottom]: AlignItems.center,
  [DrawerPosition.flexEnd]: AlignItems.flexEnd,
  [DrawerPosition.flexStart]: AlignItems.flexStart,
  [DrawerPosition.top]: AlignItems.center
} as const;

const justifyContentMap = {
  [DrawerPosition.bottom]: JustifyContent.flexEnd,
  [DrawerPosition.flexEnd]: JustifyContent.center,
  [DrawerPosition.flexStart]: JustifyContent.center,
  [DrawerPosition.top]: JustifyContent.flexStart
} as const;

const timingAnimation = createTimingAnimation({ duration, easing });

const velocityAnimation = createVelocityAnimation({
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
function animation(
  animated: SharedValue<number>,
  toValue: number,
  velocity: numberU,
  size: number,
  callback?: AnimationCallback
): void {
  if (is.not.empty(velocity))
    velocityAnimation(animated, toValue, velocity / size, callback);
  else timingAnimation(animated, toValue, 0, callback);
}

/**
 * Returns drawer size.
 *
 * @param width - Width.
 * @param height - Height.
 * @param position - Position.
 * @returns Drawer size.
 */
function getSize(
  width: numberU,
  height: numberU,
  position: DrawerPosition
): number {
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
