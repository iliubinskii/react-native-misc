import React from "react";
import { statusBarHeight } from "../consts";
import { useWindowDimensions } from "react-native";
/**
 * Window dimensions hook.
 * @param translucent - Whether status bar is translucent.
 * @returns Window dimensions.
 */
export function useWindowDimensionsParams(translucent) {
    const { fontScale, height, scale, width } = useWindowDimensions();
    return React.useMemo(() => {
        return {
            fontScale,
            height: translucent ? height + statusBarHeight : height,
            scale,
            width
        };
    }, [fontScale, height, scale, translucent, width]);
}
//# sourceMappingURL=useWindowDimensionsParams.js.map