"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimatedReaction = void 0;
const typescript_misc_1 = require("typescript-misc");
const react_native_reanimated_1 = require("react-native-reanimated");
/**
 * Animated reaction hook.
 *
 * @param callbacks - Callbacks.
 * @param deps - Dependencies.
 */
function useAnimatedReaction(callbacks, deps) {
    const { prepare, react } = callbacks();
    (0, react_native_reanimated_1.useAnimatedReaction)(prepare, react, (0, typescript_misc_1.unfreeze)(deps));
}
exports.useAnimatedReaction = useAnimatedReaction;
//# sourceMappingURL=useAnimatedReaction.js.map