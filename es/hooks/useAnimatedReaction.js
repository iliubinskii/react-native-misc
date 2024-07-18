import { unfreeze } from "typescript-misc";
import { useAnimatedReaction as useAnimatedReactionBase } from "react-native-reanimated";
/**
 * Animated reaction hook.
 * @param callbacks - Callbacks.
 * @param deps - Dependencies.
 */
export function useAnimatedReaction(callbacks, deps) {
    const { prepare, react } = callbacks();
    useAnimatedReactionBase(prepare, react, unfreeze(deps));
}
//# sourceMappingURL=useAnimatedReaction.js.map