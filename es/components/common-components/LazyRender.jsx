import { memo, useBoolean, useBusyState, useDeferredEffect } from "react-misc";
import React from "react";
import { View } from "react-native";
export default memo("LazyRender", ({ children, placeholder: createPlaceholder }) => {
    const busy = useBusyState();
    const [prerendered, setPrerendered] = useBoolean();
    const placeholder = React.useMemo(() => (prerendered ? undefined : createPlaceholder()), [createPlaceholder, prerendered]);
    useDeferredEffect(() => {
        if (busy) {
            // Wait
        }
        else
            setPrerendered();
    }, [busy]);
    return <View>{prerendered ? children : placeholder}</View>;
});
//# sourceMappingURL=LazyRender.jsx.map