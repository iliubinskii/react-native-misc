import React from "react";
/**
 * Layout hook.
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
    return React.useMemo(() => {
        return { clearLayout, layout, onLayout };
    }, [clearLayout, layout, onLayout]);
}
//# sourceMappingURL=useLayout.jsx.map