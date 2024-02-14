"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavigationListener = void 0;
const react_misc_1 = require("react-misc");
const types_1 = require("../types");
const native_1 = require("@react-navigation/native");
/**
 * Navigation listener hook.
 *
 * @param event - Navigation event.
 * @param callback - Callback.
 */
function useNavigationListener(event, callback) {
    const callbackRef = (0, react_misc_1.useProxyRef)(callback);
    const eventRef = (0, react_misc_1.useProxyRef)(event);
    // eslint-disable-next-line @typescript-eslint/ban-types -- Postponed
    const navigation = (0, native_1.useNavigation)();
    // Listen to navigation events
    (0, react_misc_1.useResource)(() => navigation.addListener(event, () => {
        callbackRef.current();
    }), [callbackRef, event, navigation]);
    // Blur on destroy
    (0, react_misc_1.useResource)(() => () => {
        if (eventRef.current === types_1.NavigationEvent.blur)
            callbackRef.current();
    }, [callbackRef, eventRef]);
}
exports.useNavigationListener = useNavigationListener;
//# sourceMappingURL=useNavigationListener.js.map