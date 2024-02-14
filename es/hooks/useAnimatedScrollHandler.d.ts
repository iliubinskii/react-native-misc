import type * as React from "react";
import type { IndexedObject } from "typescript-misc";
import type { ScrollHandlers } from "react-native-reanimated";
import { useAnimatedScrollHandler as useAnimatedScrollHandlerBase } from "react-native-reanimated";
/**
 * Animated scroll handler hook.
 *
 * @param handlers - Handlers.
 * @param deps - Dependencies.
 * @returns Scroll handler.
 */
export declare function useAnimatedScrollHandler(handlers: () => ScrollHandlers<IndexedObject>, deps: React.DependencyList): ReturnType<typeof useAnimatedScrollHandlerBase>;
//# sourceMappingURL=useAnimatedScrollHandler.d.ts.map