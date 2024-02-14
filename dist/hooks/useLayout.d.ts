import type { LayoutChangeEvent, LayoutRectangle } from "react-native";
/**
 * Layout hook.
 *
 * @returns Result.
 */
export declare function useLayout(): Result;
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
//# sourceMappingURL=useLayout.d.ts.map