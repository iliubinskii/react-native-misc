import * as React from "react";
import type { AnimationCallback, SharedValue } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import type {
  GestureUpdateEvent,
  PanGestureHandlerEventPayload
} from "react-native-gesture-handler";
import { evaluate, fn, num } from "typescript-misc";
import { memo, useRealEffect, useUpdater } from "react-misc";
import Animated, {
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";
import type { NativeAnimation } from "../../functions";
import { Overflow } from "../../types";
import { View } from "react-native";
import type { ViewStyle } from "react-native";
import { consts } from "../../core";
import type { numberU } from "typescript-misc";
import { rtlSign } from "../../consts";
import { useSnackbar } from "../../contexts";

export default memo(
  "AnimatedScrollView",
  ({
    children,
    customRef,
    direction,
    disabled,
    height,
    initialOffset,
    largeSwipeSize,
    largeSwipeStopInterval,
    max = Number.MAX_SAFE_INTEGER,
    min = Number.MIN_SAFE_INTEGER,
    onScroll = fn.noop,
    onScrollEnd = fn.noop,
    onScrollStart = fn.noop,
    smallSwipeSize,
    smallSwipeStopInterval,
    snapAnimation,
    snapInterval,
    swipeAnimation,
    toggleThreshold = Number.MAX_SAFE_INTEGER,
    width
  }: Props) => {
    const pan = useSharedValue(0);

    const pan0 = useSharedValue(0);

    const panLastStop = useSharedValue(0);

    const animatedStyle = useAnimatedStyle((): ViewStyle => {
      runOnJS(onScroll)(pan.value);

      switch (direction) {
        case Direction.column:
          return { transform: [{ translateY: pan.value }], width };

        case Direction.row:
          return { transform: [{ translateX: rtlSign * pan.value }], width };
      }
    }, [direction, onScroll, pan, width]);

    const animate = React.useCallback(
      (value: number, velocity: number, swipe: boolean, step: number) => {
        value = num.limit(num.round.step(value, step), min, max);

        const callback: AnimationCallback = (finished = false) => {
          onScroll(pan.value);

          if (finished) onScrollEnd(pan.value);
        };

        onScrollStart();

        if (swipe) swipeAnimation(pan, value, velocity, callback);
        else snapAnimation(pan, value, velocity, callback);
      },
      [
        max,
        min,
        onScroll,
        onScrollEnd,
        onScrollStart,
        pan,
        snapAnimation,
        swipeAnimation
      ]
    );

    const getDelta = React.useCallback(
      ({
        translationX,
        translationY
      }: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
        "worklet";

        switch (direction) {
          case Direction.column:
            return translationY;

          case Direction.row:
            return rtlSign * translationX;
        }
      },
      [direction]
    );

    const getVelocity = React.useCallback(
      ({
        velocityX,
        velocityY
      }: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
        "worklet";

        switch (direction) {
          case Direction.column:
            return velocityY;

          case Direction.row:
            return rtlSign * velocityX;
        }
      },
      [direction]
    );

    const { hideSnackbar } = useSnackbar();

    const snap = React.useCallback(
      (delta: number, velocity: number) => {
        const value = evaluate(() => {
          if (delta > toggleThreshold * snapInterval)
            return num.ceil.step(pan0.value + delta, snapInterval);

          if (delta < -toggleThreshold * snapInterval)
            return num.floor.step(pan0.value + delta, snapInterval);

          return pan0.value + delta;
        });

        runOnJS(animate)(value, velocity, false, snapInterval);
      },
      [animate, pan0, snapInterval, toggleThreshold]
    );

    const gesture = React.useMemo(
      () =>
        Gesture.Pan()
          .minDistance(consts.Gesture.pan.minDistance)
          .onTouchesDown((_event, { fail }) => {
            if (disabled && disabled.value) fail();
          })
          .onBegin(() => {
            cancelAnimation(pan);
            pan0.value = pan.value;
            panLastStop.value = pan.value;
          })
          .onStart(() => {
            runOnJS(hideSnackbar)();
          })
          .onUpdate(event => {
            const delta = getDelta(event);

            const velocity = getVelocity(event);

            const value = Math.min(Math.max(pan0.value + delta, min), max);

            pan.value = value;

            if (Math.abs(velocity) < movementThreshold)
              panLastStop.value = value;

            runOnJS(onScroll)(value);
          })
          .onFinalize(event => {
            const delta = getDelta(event);

            const velocity = getVelocity(event);

            if (velocity > largeSwipeThreshold)
              runOnJS(animate)(
                panLastStop.value + largeSwipeSize,
                velocity,
                true,
                largeSwipeStopInterval
              );
            else if (velocity > smallSwipeThreshold)
              runOnJS(animate)(
                panLastStop.value + smallSwipeSize,
                velocity,
                true,
                smallSwipeStopInterval
              );
            else if (velocity < -largeSwipeThreshold)
              runOnJS(animate)(
                panLastStop.value - largeSwipeSize,
                velocity,
                true,
                largeSwipeStopInterval
              );
            else if (velocity < -smallSwipeThreshold)
              runOnJS(animate)(
                panLastStop.value - smallSwipeSize,
                velocity,
                true,
                smallSwipeStopInterval
              );
            else runOnJS(snap)(delta, velocity);
          }),
      [
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
      ]
    );

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

    return (
      <GestureDetector gesture={gesture}>
        <View style={{ height, overflow: Overflow.hidden, width }}>
          <Animated.View style={animatedStyle}>{children}</Animated.View>
        </View>
      </GestureDetector>
    );
  }
);

export enum Direction {
  column = "column",
  row = "row"
}

/**
 * @internal
 */
export interface Props {
  readonly children?: React.ReactNode;
  readonly customRef?: React.MutableRefObject<Ref> | undefined;
  readonly direction: Direction;
  readonly disabled?: SharedValue<boolean> | undefined;
  readonly height: number;
  readonly initialOffset: number;
  readonly largeSwipeSize: number;
  readonly largeSwipeStopInterval: number;
  readonly max?: numberU;
  readonly min?: numberU;
  /**
   * Handles scroll event.
   *
   * @param offset - Offset.
   */
  readonly onScroll?: ((offset: number) => void) | undefined;
  /**
   * Handles scroll end event.
   *
   * @param offset - Offset.
   */
  readonly onScrollEnd?: ((offset: number) => void) | undefined;
  /**
   * Handles scroll start event.
   */
  readonly onScrollStart?: (() => void) | undefined;
  readonly smallSwipeSize: number;
  readonly smallSwipeStopInterval: number;
  readonly snapAnimation: NativeAnimation;
  readonly snapInterval: number;
  readonly swipeAnimation: NativeAnimation;
  readonly toggleThreshold?: numberU;
  readonly width: number;
}

export interface Ref {
  /**
   * Scrolls by a given delta.
   *
   * @param delta - Delta.
   */
  readonly scrollBy: (delta: number) => void;
}

const { largeSwipeThreshold, movementThreshold, smallSwipeThreshold } =
  consts.AnimatedScrollView;
