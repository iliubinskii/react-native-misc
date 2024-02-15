import * as React from "react";
import {
  AnimatedScrollView,
  AnimatedScrollViewDirection,
  Text
} from "../../common-components";
import type { NumStr, stringU } from "typescript-misc";
import type { StyleProp, ViewStyle } from "react-native";
import { TextAlign, VerticalAlign } from "../../../types";
import { a, fn, neverDemand, num } from "typescript-misc";
import {
  createTimingAnimation,
  createVelocityAnimation
} from "../../../functions";
import { memo, useBooleanRef, useRealEffect, useUpdater } from "react-misc";
import type { AnimatedScrollViewRef } from "../../common-components";
import Mask from "./Mask";
import type { SharedValue } from "react-native-reanimated";
import { View } from "react-native";
import { consts } from "../../../core";
import { useSound } from "../../../hooks";

export default memo(
  "BaseWheelPicker",
  // eslint-disable-next-line prefer-arrow-callback -- Ok
  function <T extends NumStr>({
    color,
    customRef,
    disabled,
    largeSwipeSize,
    largeSwipeStopInterval,
    onChange,
    onOverflow,
    onScrollEnd = fn.noop,
    onScrollStart = fn.noop,
    options,
    smallSwipeSize,
    smallSwipeStopInterval,
    tick,
    value
  }: Props<T>) {
    const index = React.useMemo(
      () =>
        Math.max(
          options.findIndex(candidate => candidate.value === value),
          0
        ),
      [options, value]
    );

    const overflowLastPos = React.useRef(index);

    const page = React.useRef(0);

    const pageView = React.useRef(neverDemand<View>());

    const pos = index + page.current * options.length;

    const text = React.useMemo(
      () =>
        a
          .fromRange(0, copies - 1)
          .map(() => options.map(({ label }) => label).join("\n"))
          .join("\n"),
      [options]
    );

    const tickLastPos = React.useRef(index);

    const [tickSkipNext, skipNextTick, skippedTick] = useBooleanRef();

    const tickSound = useSound(tick);

    const view = React.useRef(neverDemand<AnimatedScrollViewRef>());

    const width = React.useMemo(
      () =>
        Math.max(...options.map(({ label }) => label.length)) *
          fontAspectRatio *
          fontSize +
        2 * padding,
      [options]
    );

    const getStyle = React.useCallback(
      (): StyleProp<ViewStyle> => ({
        transform: [
          { translateY: ((page.current - 1) * options.length + 2) * height }
        ]
      }),
      [options.length]
    );

    const viewOnScroll = React.useCallback(
      (offset: number) => {
        const currentPos = -offset / height;

        const nextPos = Math.round(currentPos);

        if (
          onOverflow &&
          Math.abs(currentPos - overflowLastPos.current) > overflowThreshold
        ) {
          const nextPage = Math.floor(nextPos / options.length);

          const prevPage = Math.floor(overflowLastPos.current / options.length);

          if (nextPage > prevPage) onOverflow(1);

          if (nextPage < prevPage) onOverflow(-1);

          overflowLastPos.current = nextPos;
        }

        if (
          Math.abs(currentPos - tickLastPos.current) > tickThreshold &&
          tickSound.isLoaded() &&
          !tickSound.isPlaying()
        ) {
          tickLastPos.current = nextPos;

          if (tickSkipNext.current) skippedTick();
          else tickSound.setVolume(volume).play();
        }
      },
      [options.length, onOverflow, skippedTick, tickSkipNext, tickSound]
    );

    const viewOnScrollEnd = React.useCallback(
      (offset: number) => {
        const currentPos = -offset / height;

        const nextPos = Math.round(currentPos);

        const nextIndex = mod(nextPos, options.length);

        const option = a.get(options, nextIndex);

        page.current = Math.floor(nextPos / options.length);
        pageView.current.setNativeProps({ style: getStyle() });
        onScrollEnd(option.value);

        if (option.value === value) {
          // Skip
        } else onChange(option.value);
      },
      [getStyle, onChange, onScrollEnd, options, value]
    );

    const viewOnScrollStart = onScrollStart;

    // Reset internal state
    useRealEffect(() => {
      overflowLastPos.current = pos;
      tickLastPos.current = pos;
    }, [pos]);

    // Update customRef
    useUpdater(() => {
      if (customRef)
        customRef.current = {
          overflow: overflow => {
            skipNextTick();
            view.current.scrollBy(-overflow * height);
          }
        };
    }, [customRef, skipNextTick]);

    return (
      <Mask height={size * height} width={width}>
        <AnimatedScrollView
          customRef={view}
          direction={AnimatedScrollViewDirection.column}
          disabled={disabled}
          height={size * height}
          initialOffset={-pos * height}
          largeSwipeSize={largeSwipeSize * height}
          largeSwipeStopInterval={largeSwipeStopInterval * height}
          onScroll={viewOnScroll}
          onScrollEnd={viewOnScrollEnd}
          onScrollStart={viewOnScrollStart}
          smallSwipeSize={smallSwipeSize * height}
          smallSwipeStopInterval={smallSwipeStopInterval * height}
          snapAnimation={snapAnimation}
          snapInterval={height}
          swipeAnimation={swipeAnimation}
          width={width}
        >
          <View ref={pageView} style={getStyle()}>
            <Text
              style={{
                color,
                fontFamily,
                fontSize,
                height: copies * options.length * height,
                lineHeight: height,
                textAlign: TextAlign.center,
                verticalAlign: VerticalAlign.middle,
                width
              }}
            >
              {text}
            </Text>
          </View>
        </AnimatedScrollView>
      </Mask>
    );
  }
);

export interface Option<T extends NumStr> {
  readonly label: string;
  readonly value: T;
}

export type Options<T extends NumStr> = ReadonlyArray<Option<T>>;

/**
 * @internal
 */
export interface Props<T extends NumStr> {
  readonly color?: stringU;
  readonly customRef?: React.MutableRefObject<Ref> | undefined;
  readonly disabled?: SharedValue<boolean> | undefined;
  readonly largeSwipeSize: number;
  readonly largeSwipeStopInterval: number;
  /**
   * Handles value change.
   *
   * @param value - Value.
   */
  readonly onChange: (value: T) => void;
  /**
   * Handles overflow event.
   *
   * @param overflow - Overflow.
   */
  readonly onOverflow?: ((overflow: -1 | 1) => void) | undefined;
  /**
   * Handles scroll end event.
   *
   * @param value - Value.
   */
  readonly onScrollEnd?: ((value: T) => void) | undefined;
  /**
   * Handles scroll start event.
   */
  readonly onScrollStart?: (() => void) | undefined;
  readonly options: Options<T>;
  readonly smallSwipeSize: number;
  readonly smallSwipeStopInterval: number;
  readonly tick: string;
  readonly value: T;
}

export interface Ref {
  /**
   * Applies overflow to the component.
   *
   * @param overflow - Overflow.
   */
  readonly overflow: (overflow: -1 | 1) => void;
}

const {
  BaseWheelPicker: {
    copies,
    fontAspectRatio,
    fontFamily,
    fontSize,
    overflowThreshold,
    padding,
    snapAnimationConfig,
    swipeAnimationConfig,
    tickThreshold,
    volume
  },
  height,
  size
} = consts.WheelPicker;

const snapAnimation = createTimingAnimation(snapAnimationConfig);

const swipeAnimation = createVelocityAnimation(swipeAnimationConfig);

/**
 * Modulo.
 *
 * @param value - Value.
 * @param step - Step.
 * @param from - From.
 * @returns Modulo.
 */
// eslint-disable-next-line no-warning-comments -- Wait for typescript-misc update
// fixme
function mod(value: number, step: number, from = 0): number {
  return value - num.floor.step(value, step, from);
}
