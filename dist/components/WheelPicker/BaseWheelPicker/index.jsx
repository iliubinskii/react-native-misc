"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("../../common-components");
const types_1 = require("../../../types");
const typescript_misc_1 = require("typescript-misc");
const functions_1 = require("../../../functions");
const react_misc_1 = require("react-misc");
const Mask_1 = tslib_1.__importDefault(require("./Mask"));
const react_native_1 = require("react-native");
const core_1 = require("../../../core");
const hooks_1 = require("../../../hooks");
exports.default = (0, react_misc_1.memo)("BaseWheelPicker", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function ({ color, customRef, disabled, largeSwipeSize, largeSwipeStopInterval, onChange, onOverflow, onScrollEnd = typescript_misc_1.fn.noop, onScrollStart = typescript_misc_1.fn.noop, options, smallSwipeSize, smallSwipeStopInterval, tick, value }) {
    const index = React.useMemo(() => Math.max(options.findIndex(candidate => candidate.value === value), 0), [options, value]);
    const overflowLastPos = React.useRef(index);
    const page = React.useRef(0);
    const pageView = React.useRef((0, typescript_misc_1.neverDemand)());
    const pos = index + page.current * options.length;
    const text = React.useMemo(() => typescript_misc_1.a
        .fromRange(0, copies - 1)
        .map(() => options.map(({ label }) => label).join("\n"))
        .join("\n"), [options]);
    const tickLastPos = React.useRef(index);
    const [tickSkipNext, skipNextTick, skippedTick] = (0, react_misc_1.useBooleanRef)();
    const tickSound = (0, hooks_1.useSound)(tick);
    const view = React.useRef((0, typescript_misc_1.neverDemand)());
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
        const option = typescript_misc_1.a.get(options, nextIndex);
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
    (0, react_misc_1.useRealEffect)(() => {
        overflowLastPos.current = pos;
        tickLastPos.current = pos;
    }, [pos]);
    // Update customRef
    (0, react_misc_1.useUpdater)(() => {
        if (customRef)
            customRef.current = {
                overflow: overflow => {
                    skipNextTick();
                    view.current.scrollBy(-overflow * height);
                }
            };
    }, [customRef, skipNextTick]);
    return (<Mask_1.default height={size * height} width={width}>
        <common_components_1.AnimatedScrollView customRef={view} direction={common_components_1.AnimatedScrollViewDirection.column} disabled={disabled} height={size * height} initialOffset={-pos * height} largeSwipeSize={largeSwipeSize * height} largeSwipeStopInterval={largeSwipeStopInterval * height} onScroll={viewOnScroll} onScrollEnd={viewOnScrollEnd} onScrollStart={viewOnScrollStart} smallSwipeSize={smallSwipeSize * height} smallSwipeStopInterval={smallSwipeStopInterval * height} snapAnimation={snapAnimation} snapInterval={height} swipeAnimation={swipeAnimation} width={width}>
          <react_native_1.View ref={pageView} style={getStyle()}>
            <common_components_1.Text style={{
            color,
            fontFamily,
            fontSize,
            height: copies * options.length * height,
            lineHeight: height,
            textAlign: types_1.TextAlign.center,
            verticalAlign: types_1.VerticalAlign.middle,
            width
        }}>
              {text}
            </common_components_1.Text>
          </react_native_1.View>
        </common_components_1.AnimatedScrollView>
      </Mask_1.default>);
});
const { BaseWheelPicker: { copies, fontAspectRatio, fontFamily, fontSize, overflowThreshold, padding, snapAnimationConfig, swipeAnimationConfig, tickThreshold, volume }, height, size } = core_1.consts.WheelPicker;
const snapAnimation = (0, functions_1.createTimingAnimation)(snapAnimationConfig);
const swipeAnimation = (0, functions_1.createVelocityAnimation)(swipeAnimationConfig);
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
    return value - typescript_misc_1.num.floor.step(value, step, from);
}
//# sourceMappingURL=index.jsx.map