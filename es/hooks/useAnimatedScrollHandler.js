import { unfreeze } from "typescript-misc";
import { useAnimatedScrollHandler as useAnimatedScrollHandlerBase } from "react-native-reanimated";
/**
 * Animated scroll handler hook.
 * @param handlers - Handlers.
 * @param deps - Dependencies.
 * @returns Scroll handler.
 */
export function useAnimatedScrollHandler(handlers, deps) {
    return useAnimatedScrollHandlerBase(handlers(), unfreeze(deps));
}
//# sourceMappingURL=useAnimatedScrollHandler.js.map