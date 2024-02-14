import { useProxyRef, useResource } from "react-misc";
import { NavigationEvent } from "../types";
import { useNavigation } from "@react-navigation/native";
/**
 * Navigation listener hook.
 *
 * @param event - Navigation event.
 * @param callback - Callback.
 */
export function useNavigationListener(event, callback) {
    const callbackRef = useProxyRef(callback);
    const eventRef = useProxyRef(event);
    // eslint-disable-next-line @typescript-eslint/ban-types -- Postponed
    const navigation = useNavigation();
    // Listen to navigation events
    useResource(() => navigation.addListener(event, () => {
        callbackRef.current();
    }), [callbackRef, event, navigation]);
    // Blur on destroy
    useResource(() => () => {
        if (eventRef.current === NavigationEvent.blur)
            callbackRef.current();
    }, [callbackRef, eventRef]);
}
//# sourceMappingURL=useNavigationListener.js.map