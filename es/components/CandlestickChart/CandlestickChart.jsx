import * as React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import { BaseChart } from "./CandlestickChart-common";
import { consts } from "../../core";
import { fn } from "typescript-misc";
import { memo } from "react-misc";
import { useSnackbar } from "../../contexts";
import { worklets } from "../../functions";
export default memo("CandlestickChart", ({ data, initialRangeFrom, initialRangeTo, maxSliceLength, minSliceLength, onSelect = fn.noop, paddingEnd, paddingStart, verticalLabels, verticalRangeFrom, verticalRangeTo, width, ...props }) => {
    const enabled = initialRangeFrom >= 0 &&
        initialRangeTo <= data.length &&
        initialRangeTo - initialRangeFrom >= minSliceLength &&
        initialRangeTo - initialRangeFrom <= maxSliceLength;
    const { hideSnackbar } = useSnackbar();
    const initialRange = React.useMemo(() => enabled ? [initialRangeFrom, initialRangeTo] : [0, minSliceLength], [enabled, initialRangeFrom, initialRangeTo, minSliceLength]);
    const pan = useSharedValue(initialRange);
    const pan0 = useSharedValue(initialRange);
    const panNumberOfPointers = useSharedValue(0);
    const panScale = useSharedValue(1);
    const panTranslationX = useSharedValue(0);
    const [range, setRange] = React.useState(initialRange);
    const normalize = React.useCallback((value) => (value - verticalRangeFrom) / (verticalRangeTo - verticalRangeFrom), [verticalRangeFrom, verticalRangeTo]);
    const updateRange = React.useCallback(() => {
        setRange(pan.value);
    }, [pan]);
    const gesture = React.useMemo(() => Gesture.Race(Gesture.Simultaneous(Gesture.Pan()
        .enabled(enabled)
        .minDistance(consts.Gesture.pan.minDistance)
        .onBegin(({ numberOfPointers, translationX }) => {
        pan0.value = pan.value;
        panNumberOfPointers.value = numberOfPointers;
        panTranslationX.value = translationX;
    })
        .onStart(() => {
        runOnJS(hideSnackbar)();
    })
        .onUpdate(({ numberOfPointers, translationX }) => {
        if (numberOfPointers <= 1) {
            if (panNumberOfPointers.value === numberOfPointers) {
                // No need to restart
            }
            else {
                pan0.value = pan.value;
                panNumberOfPointers.value = numberOfPointers;
                panTranslationX.value = translationX;
            }
            const translationXDelta = translationX - panTranslationX.value;
            const dataWidth = width - paddingStart - paddingEnd;
            const barCount = pan0.value[1] - pan0.value[0];
            const barWidth = dataWidth / barCount;
            const prevAverage = 0.5 * (pan0.value[0] + pan0.value[1]);
            const prevSize = pan0.value[1] - pan0.value[0];
            const average = worklets.limit(prevAverage - translationXDelta / barWidth, 0.5 * prevSize, data.length - 0.5 * prevSize);
            const size = prevSize;
            pan.value = [
                Math.round(average - 0.5 * size),
                Math.round(average + 0.5 * size)
            ];
            runOnJS(updateRange)();
        }
    }), Gesture.Pinch()
        .enabled(enabled)
        .onBegin(({ numberOfPointers, scale }) => {
        pan0.value = pan.value;
        panNumberOfPointers.value = numberOfPointers;
        panScale.value = scale;
    })
        .onStart(() => {
        runOnJS(hideSnackbar)();
    })
        .onUpdate(({ numberOfPointers, scale }) => {
        if (numberOfPointers >= 2) {
            if (panNumberOfPointers.value === numberOfPointers) {
                // No need to restart
            }
            else {
                pan0.value = pan.value;
                panNumberOfPointers.value = numberOfPointers;
                panScale.value = scale;
            }
            const scaleDelta = scale / panScale.value;
            const prevAverage = 0.5 * (pan0.value[0] + pan0.value[1]);
            const prevSize = pan0.value[1] - pan0.value[0];
            const average = prevAverage;
            const size = worklets.limit(prevSize / scaleDelta, minSliceLength, maxSliceLength);
            pan.value = [
                Math.max(Math.round(average - 0.5 * size), 0),
                Math.min(Math.round(average + 0.5 * size), data.length)
            ];
            runOnJS(updateRange)();
        }
    })), Gesture.Tap().onEnd(({ x }) => {
        const dataWidth = width - paddingStart - paddingEnd;
        const barCount = pan0.value[1] - pan0.value[0];
        const barWidth = dataWidth / barCount;
        const index = range[0] + Math.floor((x - paddingStart) / barWidth);
        if (index >= range[0] && index < range[1])
            runOnJS(onSelect)(index);
    })), [
        data.length,
        enabled,
        hideSnackbar,
        maxSliceLength,
        minSliceLength,
        onSelect,
        paddingEnd,
        paddingStart,
        pan,
        pan0,
        panNumberOfPointers,
        panScale,
        panTranslationX,
        range,
        updateRange,
        width
    ]);
    const normalizedData = React.useMemo(() => data.map(({ closing, high, low, opening, ...candlestick }) => ({
        closing: normalize(closing),
        high: normalize(high),
        low: normalize(low),
        opening: normalize(opening),
        ...candlestick
    })), [data, normalize]);
    const normalizedVerticalLabels = React.useMemo(() => verticalLabels.map(({ value, ...label }) => ({
        value: normalize(value),
        ...label
    })), [normalize, verticalLabels]);
    return (<GestureDetector gesture={gesture}>
        <BaseChart data={normalizedData} paddingEnd={paddingEnd} paddingStart={paddingStart} range0={range[0]} range1={range[1]} verticalLabels={normalizedVerticalLabels} width={width} {...props}/>
      </GestureDetector>);
});
//# sourceMappingURL=CandlestickChart.jsx.map