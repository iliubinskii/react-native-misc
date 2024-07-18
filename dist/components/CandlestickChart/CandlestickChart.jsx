"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_reanimated_1 = require("react-native-reanimated");
const CandlestickChart_common_1 = require("./CandlestickChart-common");
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../../core");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../contexts");
const functions_1 = require("../../functions");
exports.default = (0, react_misc_1.memo)("CandlestickChart", ({ data, initialRangeFrom, initialRangeTo, maxSliceLength, minSliceLength, onSelect = typescript_misc_1.fn.noop, paddingEnd, paddingStart, verticalLabels, verticalRangeFrom, verticalRangeTo, width, ...props }) => {
    const enabled = initialRangeFrom >= 0 &&
        initialRangeTo <= data.length &&
        initialRangeTo - initialRangeFrom >= minSliceLength &&
        initialRangeTo - initialRangeFrom <= maxSliceLength;
    const { hideSnackbar } = (0, contexts_1.useSnackbar)();
    const initialRange = react_1.default.useMemo(() => enabled ? [initialRangeFrom, initialRangeTo] : [0, minSliceLength], [enabled, initialRangeFrom, initialRangeTo, minSliceLength]);
    const pan = (0, react_native_reanimated_1.useSharedValue)(initialRange);
    const pan0 = (0, react_native_reanimated_1.useSharedValue)(initialRange);
    const panNumberOfPointers = (0, react_native_reanimated_1.useSharedValue)(0);
    const panScale = (0, react_native_reanimated_1.useSharedValue)(1);
    const panTranslationX = (0, react_native_reanimated_1.useSharedValue)(0);
    const [range, setRange] = react_1.default.useState(initialRange);
    const normalize = react_1.default.useCallback((value) => (value - verticalRangeFrom) / (verticalRangeTo - verticalRangeFrom), [verticalRangeFrom, verticalRangeTo]);
    const updateRange = react_1.default.useCallback(() => {
        setRange(pan.value);
    }, [pan]);
    const gesture = react_1.default.useMemo(() => react_native_gesture_handler_1.Gesture.Race(react_native_gesture_handler_1.Gesture.Simultaneous(react_native_gesture_handler_1.Gesture.Pan()
        .enabled(enabled)
        .minDistance(core_1.consts.Gesture.pan.minDistance)
        .onBegin(({ numberOfPointers, translationX }) => {
        "worklet";
        pan0.value = pan.value;
        panNumberOfPointers.value = numberOfPointers;
        panTranslationX.value = translationX;
    })
        .onStart(() => {
        "worklet";
        (0, react_native_reanimated_1.runOnJS)(hideSnackbar)();
    })
        .onUpdate(({ numberOfPointers, translationX }) => {
        "worklet";
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
            const average = functions_1.worklets.limit(prevAverage - translationXDelta / barWidth, 0.5 * prevSize, data.length - 0.5 * prevSize);
            const size = prevSize;
            pan.value = [
                Math.round(average - 0.5 * size),
                Math.round(average + 0.5 * size)
            ];
            (0, react_native_reanimated_1.runOnJS)(updateRange)();
        }
    }), react_native_gesture_handler_1.Gesture.Pinch()
        .enabled(enabled)
        .onBegin(({ numberOfPointers, scale }) => {
        "worklet";
        pan0.value = pan.value;
        panNumberOfPointers.value = numberOfPointers;
        panScale.value = scale;
    })
        .onStart(() => {
        "worklet";
        (0, react_native_reanimated_1.runOnJS)(hideSnackbar)();
    })
        .onUpdate(({ numberOfPointers, scale }) => {
        "worklet";
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
            const size = functions_1.worklets.limit(prevSize / scaleDelta, minSliceLength, maxSliceLength);
            pan.value = [
                Math.max(Math.round(average - 0.5 * size), 0),
                Math.min(Math.round(average + 0.5 * size), data.length)
            ];
            (0, react_native_reanimated_1.runOnJS)(updateRange)();
        }
    })), react_native_gesture_handler_1.Gesture.Tap().onEnd(({ x }) => {
        "worklet";
        const dataWidth = width - paddingStart - paddingEnd;
        const barCount = pan0.value[1] - pan0.value[0];
        const barWidth = dataWidth / barCount;
        const index = range[0] + Math.floor((x - paddingStart) / barWidth);
        if (index >= range[0] && index < range[1])
            (0, react_native_reanimated_1.runOnJS)(onSelect)(index);
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
    const normalizedData = react_1.default.useMemo(() => data.map(({ closing, high, low, opening, ...candlestick }) => {
        return {
            closing: normalize(closing),
            high: normalize(high),
            low: normalize(low),
            opening: normalize(opening),
            ...candlestick
        };
    }), [data, normalize]);
    const normalizedVerticalLabels = react_1.default.useMemo(() => verticalLabels.map(({ value, ...label }) => {
        return {
            value: normalize(value),
            ...label
        };
    }), [normalize, verticalLabels]);
    return (<react_native_gesture_handler_1.GestureDetector gesture={gesture}>
        <CandlestickChart_common_1.BaseChart data={normalizedData} paddingEnd={paddingEnd} paddingStart={paddingStart} range0={range[0]} range1={range[1]} verticalLabels={normalizedVerticalLabels} width={width} {...props}/>
      </react_native_gesture_handler_1.GestureDetector>);
});
//# sourceMappingURL=CandlestickChart.jsx.map