import type * as React from "react";
import { unfreeze } from "typescript-misc";
import { useAnimatedReaction as useAnimatedReactionBase } from "react-native-reanimated";

/**
 * Animated reaction hook.
 *
 * @param callbacks - Callbacks.
 * @param deps - Dependencies.
 */
export function useAnimatedReaction<T>(
  callbacks: () => Callbacks<T>,
  deps: React.DependencyList
): void {
  const { prepare, react } = callbacks();

  useAnimatedReactionBase(prepare, react, unfreeze(deps));
}

export interface Callbacks<T> {
  /**
   * Prepares data.
   *
   * @returns Data.
   */
  readonly prepare: () => T;
  /**
   * Reacts to data change.
   *
   * @param prepareResult - Prepare result.
   * @param preparePreviousResult - Prepare previous result.
   */
  readonly react: (prepareResult: T, preparePreviousResult: T | null) => void;
}
