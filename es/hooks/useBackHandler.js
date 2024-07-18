import { EventName, useProxyRef, useResource } from "react-misc";
import { BackHandler } from "react-native";
/**
 * Handles hardware back press.
 * @param handler - Handler.
 */
export function useBackHandler(handler) {
    const handlerRef = useProxyRef(handler);
    // Back handler
    useResource(() => {
        const subscription = BackHandler.addEventListener(EventName.hardwareBackPress, () => handlerRef.current());
        return () => {
            subscription.remove();
        };
    }, [handlerRef]);
}
//# sourceMappingURL=useBackHandler.js.map