import type { LayoutChangeEvent, LayoutRectangle } from "react-native";
import type { SharedValue } from "react-native-reanimated";
/**
 * Layout hook.
 * @returns Result.
 */
export declare function useLayoutReanimated(): Result;
export interface Result {
    readonly layout: SharedValue<LayoutRectangle | undefined>;
    /**
     * Handles layout event.
     * @param event - Event.
     */
    readonly onLayout: (event: LayoutChangeEvent) => void;
}
//# sourceMappingURL=useLayoutReanimated.d.ts.map