import type { LayoutChangeEvent, LayoutRectangle } from "react-native";
import React from "react";
import type { SharedValue } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";

/**
 * Layout hook.
 * @returns Result.
 */
export function useLayoutReanimated(): Result {
  const layout = useSharedValue<LayoutRectangle | undefined>(undefined);

  const onLayout = React.useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      layout.value = nativeEvent.layout;
    },
    [layout]
  );

  return React.useMemo((): Result => {
    return { layout, onLayout };
  }, [layout, onLayout]);
}

export interface Result {
  readonly layout: SharedValue<LayoutRectangle | undefined>;
  /**
   * Handles layout event.
   * @param event - Event.
   */
  readonly onLayout: (event: LayoutChangeEvent) => void;
}
