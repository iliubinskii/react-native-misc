import type { LayoutChangeEvent, LayoutRectangle } from "react-native";
import React from "react";

/**
 * Layout hook.
 * @returns Result.
 */
export function useLayout(): Result {
  const [layout, setLayout] = React.useState<LayoutRectangle>();

  const clearLayout = React.useCallback(() => {
    setLayout(undefined);
  }, []);

  const onLayout = React.useCallback(({ nativeEvent }: LayoutChangeEvent) => {
    setLayout(nativeEvent.layout);
  }, []);

  return React.useMemo(() => {
    return { clearLayout, layout, onLayout };
  }, [clearLayout, layout, onLayout]);
}

export interface Result {
  /**
   * Clears layout.
   */
  readonly clearLayout: () => void;
  readonly layout?: LayoutRectangle | undefined;
  /**
   * Handles layout event.
   * @param event - Event.
   */
  readonly onLayout: (event: LayoutChangeEvent) => void;
}
