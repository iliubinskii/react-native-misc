import type * as React from "react";
/**
 * Animated reaction hook.
 *
 * @param callbacks - Callbacks.
 * @param deps - Dependencies.
 */
export declare function useAnimatedReaction<T>(callbacks: () => Callbacks<T>, deps: React.DependencyList): void;
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
//# sourceMappingURL=useAnimatedReaction.d.ts.map