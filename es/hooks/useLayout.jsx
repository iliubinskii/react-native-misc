import * as React from "react";
import { o } from "typescript-misc";
/**
 * Layout hook.
 *
 * @returns Result.
 */
export function useLayout() {
    const [layout, setLayout] = React.useState();
    const clearLayout = React.useCallback(() => {
        setLayout(undefined);
    }, []);
    const onLayout = React.useCallback(({ nativeEvent }) => {
        setLayout(nativeEvent.layout);
    }, []);
    return React.useMemo(() => o.removeUndefinedKeys({ clearLayout, layout, onLayout }), [clearLayout, layout, onLayout]);
}
//# sourceMappingURL=useLayout.jsx.map