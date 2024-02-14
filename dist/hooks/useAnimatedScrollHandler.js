"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimatedScrollHandler = void 0;
const typescript_misc_1 = require("typescript-misc");
const react_native_reanimated_1 = require("react-native-reanimated");
/**
 * Animated scroll handler hook.
 *
 * @param handlers - Handlers.
 * @param deps - Dependencies.
 * @returns Scroll handler.
 */
function useAnimatedScrollHandler(handlers, deps) {
    return (0, react_native_reanimated_1.useAnimatedScrollHandler)(handlers(), (0, typescript_misc_1.unfreeze)(deps));
}
exports.useAnimatedScrollHandler = useAnimatedScrollHandler;
//# sourceMappingURL=useAnimatedScrollHandler.js.map