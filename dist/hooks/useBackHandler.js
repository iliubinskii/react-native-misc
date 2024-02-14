"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackHandler = void 0;
const react_misc_1 = require("react-misc");
const react_native_1 = require("react-native");
/**
 * Handles hardware back press.
 *
 * @param handler - Handler.
 */
function useBackHandler(handler) {
    const handlerRef = (0, react_misc_1.useProxyRef)(handler);
    // Back handler
    (0, react_misc_1.useResource)(() => {
        const subscription = react_native_1.BackHandler.addEventListener(react_misc_1.EventName.hardwareBackPress, () => handlerRef.current());
        return () => {
            subscription.remove();
        };
    }, [handlerRef]);
}
exports.useBackHandler = useBackHandler;
//# sourceMappingURL=useBackHandler.js.map