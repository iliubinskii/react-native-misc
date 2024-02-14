"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const types_1 = require("../../types");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const hooks_1 = require("../../hooks");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const react_native_1 = require("react-native");
const core_1 = require("../../core");
const contexts_1 = require("../../contexts");
const functions_1 = require("../../functions");
exports.default = (0, react_misc_1.memo)("FlatList", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function ({ data, height: containerHeight, itemMinHeight, keyExtractor, numColumns = 1, paddingBottom = 0, paddingTop = 0, showsVerticalScrollIndicator = true, ...props }) {
    const { colors } = (0, contexts_1.useThemeExtended)();
    const contentHeight = (0, react_native_reanimated_1.useSharedValue)(undefined);
    const contentMinHeight = React.useMemo(() => {
        const dataMinHeight = (0, typescript_misc_1.evaluate)(() => {
            if (data.length) {
                const averageHeight = typescript_misc_1.is.number(itemMinHeight)
                    ? itemMinHeight
                    : typescript_misc_1.num.sum(...data.map(itemMinHeight)) / data.length;
                return Math.ceil(data.length / numColumns) * averageHeight;
            }
            return 0;
        });
        return dataMinHeight + paddingTop + paddingBottom;
    }, [data, itemMinHeight, numColumns, paddingBottom, paddingTop]);
    const contentOffset = (0, react_native_reanimated_1.useSharedValue)(0);
    const initialNumToRender = React.useMemo(() => {
        if (typescript_misc_1.is.number(itemMinHeight))
            return Math.ceil(containerHeight / itemMinHeight);
        let h = 0;
        let n = 0;
        for (const item of data) {
            h += itemMinHeight(item);
            n += 1;
            if (h > containerHeight)
                return n;
        }
        return Math.max(data.length, 1);
    }, [containerHeight, data, itemMinHeight]);
    const keys = React.useMemo(() => typescript_misc_1.json.encode(typescript_misc_1.a.sort(data.map((item, index) => keyExtractor(item, index)))), [data, keyExtractor]);
    const opacity = (0, react_native_reanimated_1.useSharedValue)(0);
    const ListFooterComponent = React.useCallback(() => <react_native_1.View style={{ height: paddingBottom }}/>, [paddingBottom]);
    const ListHeaderComponent = React.useCallback(() => <react_native_1.View style={{ height: paddingTop }}/>, [paddingTop]);
    const getRange = React.useCallback((nextContentOffset, nextContentHeight) => {
        "worklet";
        const height = Math.max(nextContentHeight, contentMinHeight);
        const offset1 = nextContentOffset;
        const offset2 = nextContentOffset + containerHeight;
        return [offset1 / height, offset2 / height];
    }, [containerHeight, contentMinHeight]);
    const onContentSizeChange = React.useCallback((_width, height) => {
        contentHeight.value = height;
    }, [contentHeight]);
    const onScroll = (0, hooks_1.useAnimatedScrollHandler)(() => ({
        onScroll: nativeEvent => {
            "worklet";
            contentOffset.value = nativeEvent.contentOffset.y;
            contentHeight.value = nativeEvent.contentSize.height;
        }
    }), [contentHeight, contentOffset]);
    const showScrollIndicator = React.useCallback((nextContentOffset, nextContentHeight) => {
        "worklet";
        const range = getRange(nextContentOffset, nextContentHeight);
        if (range[1] - range[0] < 1) {
            if (opacity.value === 0)
                opacity.value = (0, react_native_reanimated_1.withTiming)(1, {}, (finished = false) => {
                    if (finished)
                        opacity.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)(0));
                });
            if (opacity.value === 1)
                opacity.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)(0));
        }
    }, [getRange, opacity]);
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        if (functions_1.worklets.notEmpty(contentHeight.value) &&
            contentHeight.value > containerHeight) {
            const range = getRange(contentOffset.value, contentHeight.value);
            const height = containerHeight - scrollIndicatorMinHeight;
            return {
                backgroundColor: colors.fadeMore,
                height: (range[1] - range[0]) * height + scrollIndicatorMinHeight,
                opacity: opacity.value,
                transform: [{ translateY: range[0] * height }],
                width
            };
        }
        return { opacity: 0 };
    }, [
        colors,
        containerHeight,
        contentHeight,
        contentOffset,
        getRange,
        opacity
    ]);
    // Show scroll indicator
    (0, hooks_1.useAnimatedReaction)(() => ({
        prepare: () => {
            "worklet";
            return [contentOffset.value, contentHeight.value];
        },
        react: (next, prev) => {
            "worklet";
            const [nextContentOffset, nextContentHeight] = next;
            if (functions_1.worklets.notEmpty(nextContentHeight))
                if (prev) {
                    const [prevContentOffset, prevContentHeight] = prev;
                    if (nextContentOffset === prevContentOffset &&
                        functions_1.worklets.notEmpty(prevContentHeight)) {
                        // Skip
                    }
                    else
                        showScrollIndicator(nextContentOffset, nextContentHeight);
                }
                else
                    showScrollIndicator(nextContentOffset, nextContentHeight);
        }
    }), [contentHeight, contentOffset, showScrollIndicator]);
    // Show scroll indicator when content changes
    (0, react_misc_1.useRealEffect)(() => {
        if (typescript_misc_1.is.not.empty(contentHeight.value))
            showScrollIndicator(contentOffset.value, contentHeight.value);
    }, [keys]);
    return (<react_native_1.View style={{ height: containerHeight }}>
        <react_native_reanimated_1.default.FlatList ListFooterComponent={ListFooterComponent} ListHeaderComponent={ListHeaderComponent} data={data} initialNumToRender={initialNumToRender} keyExtractor={keyExtractor} numColumns={numColumns} onContentSizeChange={onContentSizeChange} onScroll={onScroll} showsVerticalScrollIndicator={false} {...props}/>
        {showsVerticalScrollIndicator ? (<react_native_1.View pointerEvents={types_1.PointerEvents.none} style={{
                bottom: 0,
                overflow: types_1.Overflow.hidden,
                position: types_1.Position.absolute,
                right: 0,
                top: 0,
                width
            }}>
            <react_native_reanimated_1.default.View style={animatedStyle}/>
          </react_native_1.View>) : undefined}
      </react_native_1.View>);
});
const { delay, scrollIndicatorMinHeight, width } = core_1.consts.FlatList;
//# sourceMappingURL=FlatList.jsx.map