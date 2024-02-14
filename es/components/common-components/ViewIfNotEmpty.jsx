import * as React from "react";
import { View } from "react-native";
import { is } from "typescript-misc";
import { memo } from "react-misc";
export default memo("ViewIfNotEmpty", ({ children, ...props }) => {
    if (is.empty(children))
        return undefined;
    if (is.array(children) && children.filter(is.not.empty).length === 0)
        return undefined;
    return <View {...props}>{children}</View>;
});
//# sourceMappingURL=ViewIfNotEmpty.jsx.map