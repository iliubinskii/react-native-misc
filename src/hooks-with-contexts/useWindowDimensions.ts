import type { ScaledSize } from "react-native";
import { useAppInfo } from "../contexts";
import { useWindowDimensionsParams } from "../hooks";

/**
 * Window dimensions hook.
 *
 * @returns Window dimensions.
 */
export function useWindowDimensions(): ScaledSize {
  const { translucent } = useAppInfo();

  return useWindowDimensionsParams(translucent);
}
