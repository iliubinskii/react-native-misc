import { useAppInfo } from "../contexts";
import { useWindowDimensionsParams } from "../hooks";
/**
 * Window dimensions hook.
 *
 * @returns Window dimensions.
 */
export function useWindowDimensions() {
    const { translucent } = useAppInfo();
    return useWindowDimensionsParams(translucent);
}
//# sourceMappingURL=useWindowDimensions.js.map