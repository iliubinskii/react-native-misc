import * as React from "react";
import { AnimatedScrollView, AnimatedScrollViewDirection, Text } from "../../common-components";
import { TextAlign, VerticalAlign } from "../../../types";
import { a, fn, neverDemand, num } from "typescript-misc";
import { createTimingAnimation, createVelocityAnimation } from "../../../functions";
import { memo, useBooleanRef, useRealEffect, useUpdater } from "react-misc";
import Mask from "./Mask";
import { View } from "react-native";
import { consts } from "../../../core";
import { tick } from "../../../assets";
import { useSound } from "../../../hooks";
export default memo("BaseWheelPicker", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function ({ color, customRef, disabled, largeSwipeSize, largeSwipeStopInterval, onChange, onOverflow, onScrollEnd = fn.noop, onScrollStart = fn.noop, options, smallSwipeSize, smallSwipeStopInterval, value }) {
    const index = React.useMemo(() => Math.max(options.findIndex(candidate => candidate.value === value), 0), [options, value]);
    const overflowLastPos = React.useRef(index);
    const page = React.useRef(0);
    const pageView = React.useRef(neverDemand());
    const pos = index + page.current * options.length;
    const text = React.useMemo(() => a
        .fromRange(0, copies - 1)
        .map(() => options.map(({ label }) => label).join("\n"))
        .join("\n"), [options]);
    const tickLastPos = React.useRef(index);
    const [tickSkipNext, skipNextTick, skippedTick] = useBooleanRef();
    const tickSound = useSound(tick);
    const view = React.useRef(neverDemand());
    const width = React.useMemo(() => Math.max(...options.map(({ label }) => label.length)) *
        fontAspectRatio *
        fontSize +
        2 * padding, [options]);
    const getStyle = React.useCallback(() => ({
        transform: [
            { translateY: ((page.current - 1) * options.length + 2) * height }
        ]
    }), [options.length]);
    const viewOnScroll = React.useCallback((offset) => {
        const currentPos = -offset / height;
        const nextPos = Math.round(currentPos);
        if (onOverflow &&
            Math.abs(currentPos - overflowLastPos.current) > overflowThreshold) {
            const nextPage = Math.floor(nextPos / options.length);
            const prevPage = Math.floor(overflowLastPos.current / options.length);
            if (nextPage > prevPage)
                onOverflow(1);
            if (nextPage < prevPage)
                onOverflow(-1);
            overflowLastPos.current = nextPos;
        }
        if (Math.abs(currentPos - tickLastPos.current) > tickThreshold &&
            tickSound.isLoaded() &&
            !tickSound.isPlaying()) {
            tickLastPos.current = nextPos;
            if (tickSkipNext.current)
                skippedTick();
            else
                tickSound.setVolume(volume).play();
        }
    }, [options.length, onOverflow, skippedTick, tickSkipNext, tickSound]);
    const viewOnScrollEnd = React.useCallback((offset) => {
        const currentPos = -offset / height;
        const nextPos = Math.round(currentPos);
        const nextIndex = mod(nextPos, options.length);
        const option = a.get(options, nextIndex);
        page.current = Math.floor(nextPos / options.length);
        pageView.current.setNativeProps({ style: getStyle() });
        onScrollEnd(option.value);
        if (option.value === value) {
            // Skip
        }
        else
            onChange(option.value);
    }, [getStyle, onChange, onScrollEnd, options, value]);
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
    return (<Mask height={size * height} width={width}>
        <AnimatedScrollView customRef={view} direction={AnimatedScrollViewDirection.column} disabled={disabled} height={size * height} initialOffset={-pos * height} largeSwipeSize={largeSwipeSize * height} largeSwipeStopInterval={largeSwipeStopInterval * height} onScroll={viewOnScroll} onScrollEnd={viewOnScrollEnd} onScrollStart={viewOnScrollStart} smallSwipeSize={smallSwipeSize * height} smallSwipeStopInterval={smallSwipeStopInterval * height} snapAnimation={snapAnimation} snapInterval={height} swipeAnimation={swipeAnimation} width={width}>
          <View ref={pageView} style={getStyle()}>
            <Text style={{
            color,
            fontFamily,
            fontSize,
            height: copies * options.length * height,
            lineHeight: height,
            textAlign: TextAlign.center,
            verticalAlign: VerticalAlign.middle,
            width
        }}>
              {text}
            </Text>
          </View>
        </AnimatedScrollView>
      </Mask>);
});
const { BaseWheelPicker: { copies, fontAspectRatio, fontFamily, fontSize, overflowThreshold, padding, snapAnimationConfig, swipeAnimationConfig, tickThreshold, volume }, height, size } = consts.WheelPicker;
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
function mod(value, step, from = 0) {
    return value - num.floor.step(value, step, from);
}
//# sourceMappingURL=index.jsx.map