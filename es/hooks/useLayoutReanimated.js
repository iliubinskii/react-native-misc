import React from "react";
import { useSharedValue } from "react-native-reanimated";
/**
 * Layout hook.
 * @returns Result.
 */
export function useLayoutReanimated() {
    const layout = useSharedValue(undefined);
    const onLayout = React.useCallback(({ nativeEvent }) => {
        layout.value = nativeEvent.layout;
    }, [layout]);
    return React.useMemo(() => {
        return { layout, onLayout };
    }, [layout, onLayout]);
}
//# sourceMappingURL=useLayoutReanimated.js.map