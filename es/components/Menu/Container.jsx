import { Menu } from "react-native-paper";
import { MenuProvider } from "./core";
import React from "react";
import { memo } from "react-misc";
import { noop } from "lodash-commonjs-es";
import { statusBarHeight } from "../../consts";
import { useAppInfo } from "../../contexts";
export default memo("Container", ({ children, onDismiss = noop, ...props }) => {
    const { translucent } = useAppInfo();
    return (<Menu onDismiss={onDismiss} statusBarHeight={translucent ? statusBarHeight : 0} {...props}>
        <MenuProvider onDismiss={onDismiss}>{children}</MenuProvider>
      </Menu>);
});
//# sourceMappingURL=Container.jsx.map