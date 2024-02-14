import * as React from "react";
import type { ScaledSize } from "react-native";
import { statusBarHeight } from "../consts";
import { useWindowDimensions } from "react-native";

/**
 * Window dimensions hook.
 *
 * @param translucent - Whether status bar is translucent.
 * @returns Window dimensions.
 */
export function useWindowDimensionsParams(translucent: boolean): ScaledSize {
  const { fontScale, height, scale, width } = useWindowDimensions();

  return React.useMemo(
    (): ScaledSize => ({
      fontScale,
      height: translucent ? height + statusBarHeight : height,
      scale,
      width
    }),
    [fontScale, height, scale, translucent, width]
  );
}
