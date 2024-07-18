import { Menu } from "react-native-paper";
import React from "react";
import { fn } from "typescript-misc";
import { memo } from "react-misc";
import { useMenu } from "./core";
export default memo("Item", ({ onPress = fn.noop, ...props }) => {
    const { onDismiss } = useMenu();
    const itemPressHandler = React.useCallback((e) => {
        onDismiss();
        onPress(e);
    }, [onDismiss, onPress]);
    return <Menu.Item onPress={itemPressHandler} {...props}/>;
});
//# sourceMappingURL=Item.jsx.map