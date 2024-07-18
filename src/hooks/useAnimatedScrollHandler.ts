import type { IndexedObject } from "typescript-misc";
import type React from "react";
import type { ScrollHandlers } from "react-native-reanimated";
import { unfreeze } from "typescript-misc";
import { useAnimatedScrollHandler as useAnimatedScrollHandlerBase } from "react-native-reanimated";

/**
 * Animated scroll handler hook.
 * @param handlers - Handlers.
 * @param deps - Dependencies.
 * @returns Scroll handler.
 */
export function useAnimatedScrollHandler(
  handlers: () => ScrollHandlers<IndexedObject>,
  deps: React.DependencyList
): ReturnType<typeof useAnimatedScrollHandlerBase> {
  return useAnimatedScrollHandlerBase(handlers(), unfreeze(deps));
}
