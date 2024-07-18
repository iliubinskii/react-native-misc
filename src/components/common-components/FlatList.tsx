import type { FlatListProps, ViewStyle } from "react-native";
import type { IndexedObject, numberU } from "typescript-misc";
import { Overflow, PointerEvents, Position } from "../../types";
import { a, evaluate, is, json, num } from "typescript-misc";
import { memo, useRealEffect } from "react-misc";
import { useAnimatedReaction, useAnimatedScrollHandler } from "../../hooks";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming
} from "react-native-reanimated";
import type { AnimatedReactionCallbacks } from "../../hooks";
import type { FlatList } from "react-native-gesture-handler";
import React from "react";
import type { ScrollHandlers } from "react-native-reanimated";
import { View } from "react-native";
import { consts } from "../../core";
import { useThemeExtended } from "../../contexts";
import { worklets } from "../../functions";

export default memo("FlatList", function FlatList<
  T
>({ data, height: containerHeight, itemMinHeight, keyExtractor, numColumns = 1, paddingBottom = 0, paddingTop = 0, showsVerticalScrollIndicator = true, ...props }: Props<T>) {
  const { colors } = useThemeExtended();

  const contentHeight = useSharedValue<numberU>(undefined);

  const contentMinHeight = React.useMemo(() => {
    const dataMinHeight = evaluate(() => {
      if (data.length > 0) {
        const averageHeight = is.number(itemMinHeight)
          ? itemMinHeight
          : num.sum(...data.map(itemMinHeight)) / data.length;

        return Math.ceil(data.length / numColumns) * averageHeight;
      }

      return 0;
    });

    return dataMinHeight + paddingTop + paddingBottom;
  }, [data, itemMinHeight, numColumns, paddingBottom, paddingTop]);

  const contentOffset = useSharedValue(0);

  const initialNumToRender = React.useMemo(() => {
    if (is.number(itemMinHeight))
      return Math.ceil(containerHeight / itemMinHeight);

    let h = 0;

    let n = 0;

    for (const item of data) {
      h += itemMinHeight(item);
      n += 1;

      if (h > containerHeight) return n;
    }

    return Math.max(data.length, 1);
  }, [containerHeight, data, itemMinHeight]);

  const keys = React.useMemo(
    () =>
      json.encode(a.sort(data.map((item, index) => keyExtractor(item, index)))),
    [data, keyExtractor]
  );

  const opacity = useSharedValue(0);

  const ListFooterComponent = React.useCallback(
    () => <View style={{ height: paddingBottom }} />,
    [paddingBottom]
  );

  const ListHeaderComponent = React.useCallback(
    () => <View style={{ height: paddingTop }} />,
    [paddingTop]
  );

  const getRange = React.useCallback(
    (nextContentOffset: number, nextContentHeight: number): Range => {
      "worklet";

      const height = Math.max(nextContentHeight, contentMinHeight);

      const offset1 = nextContentOffset;

      const offset2 = nextContentOffset + containerHeight;

      return [offset1 / height, offset2 / height];
    },
    [containerHeight, contentMinHeight]
  );

  const onContentSizeChange = React.useCallback<
    CallSignature<FlatListProps<T>["onContentSizeChange"]>
  >(
    (_width, height) => {
      contentHeight.value = height;
    },
    [contentHeight]
  );

  const onScroll =
    useAnimatedScrollHandler((): ScrollHandlers<IndexedObject> => {
      return {
        onScroll: nativeEvent => {
          "worklet";

          contentOffset.value = nativeEvent.contentOffset.y;
          contentHeight.value = nativeEvent.contentSize.height;
        }
      };
    }, [contentHeight, contentOffset]);

  const showScrollIndicator = React.useCallback(
    (nextContentOffset: number, nextContentHeight: number) => {
      "worklet";

      const range = getRange(nextContentOffset, nextContentHeight);

      if (range[1] - range[0] < 1) {
        if (opacity.value === 0)
          opacity.value = withTiming(1, {}, (finished = false) => {
            if (finished) opacity.value = withDelay(delay, withTiming(0));
          });

        if (opacity.value === 1)
          opacity.value = withDelay(delay, withTiming(0));
      }
    },
    [getRange, opacity]
  );

  const animatedStyle = useAnimatedStyle((): ViewStyle => {
    if (
      worklets.notEmpty(contentHeight.value) &&
      contentHeight.value > containerHeight
    ) {
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
  useAnimatedReaction((): AnimatedReactionCallbacks<ReactionValues> => {
    return {
      prepare: () => {
        "worklet";

        return [contentOffset.value, contentHeight.value];
      },
      react: (next, prev) => {
        "worklet";

        const [nextContentOffset, nextContentHeight] = next;

        if (worklets.notEmpty(nextContentHeight))
          if (prev) {
            const [prevContentOffset, prevContentHeight] = prev;

            if (
              nextContentOffset === prevContentOffset &&
              worklets.notEmpty(prevContentHeight)
            ) {
              // Skip
            } else showScrollIndicator(nextContentOffset, nextContentHeight);
          } else showScrollIndicator(nextContentOffset, nextContentHeight);
      }
    };
  }, [contentHeight, contentOffset, showScrollIndicator]);

  // Show scroll indicator when content changes
  useRealEffect(() => {
    if (is.not.empty(contentHeight.value))
      showScrollIndicator(contentOffset.value, contentHeight.value);
  }, [keys]);

  return (
    <View style={{ height: containerHeight }}>
      <Animated.FlatList<T>
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={ListHeaderComponent}
        data={data}
        initialNumToRender={initialNumToRender}
        keyExtractor={keyExtractor}
        numColumns={numColumns}
        onContentSizeChange={onContentSizeChange}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        {...props}
      />
      {showsVerticalScrollIndicator ? (
        <View
          pointerEvents={PointerEvents.none}
          style={{
            bottom: 0,
            overflow: Overflow.hidden,
            position: Position.absolute,
            right: 0,
            top: 0,
            width
          }}
        >
          <Animated.View style={animatedStyle} />
        </View>
      ) : undefined}
    </View>
  );
});

/**
 * @internal
 */
export interface Props<T>
  extends Omit<
    React.ComponentProps<typeof FlatList<T>>,
    | "data"
    | "initialNumToRender"
    | "keyExtractor"
    | "CellRendererComponent"
    | "ListFooterComponent"
    | "ListHeaderComponent"
    | "ref"
    | "style"
  > {
  readonly data: readonly T[];
  readonly height: number;
  /**
   * Returns item min height.
   * @param item - Item.
   * @param index - Index.
   * @returns Min height.
   */
  readonly itemMinHeight: number | ((item: T) => number);
  /**
   * Key extractor.
   * @param item - Item.
   * @param index - Index.
   * @returns Key.
   */
  readonly keyExtractor: (item: T, index: number) => string;
  readonly paddingBottom?: numberU;
  readonly paddingTop?: numberU;
}

const { delay, scrollIndicatorMinHeight, width } = consts.FlatList;

// eslint-disable-next-line no-warning-comments -- Wait for typescript-misc update
// fixme
type CallSignature<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : never;

type Range = readonly [number, number];

type ReactionValues = readonly [number, numberU];
