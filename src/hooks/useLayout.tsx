import * as React from "react";
import type { LayoutChangeEvent, LayoutRectangle } from "react-native";
import { o } from "typescript-misc";

/**
 * Layout hook.
 *
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

  return React.useMemo(
    (): Result => o.removeUndefinedKeys({ clearLayout, layout, onLayout }),
    [clearLayout, layout, onLayout]
  );
}

export interface Result {
  /**
   * Clears layout.
   */
  readonly clearLayout: () => void;
  readonly layout?: LayoutRectangle;
  /**
   * Handles layout event.
   *
   * @param event - Event.
   */
  readonly onLayout: (event: LayoutChangeEvent) => void;
}
