import * as React from "react";
import { Menu } from "react-native-paper";
import { MenuProvider } from "./core";
import { memo } from "react-misc";
import { o } from "typescript-misc";
import { statusBarHeight } from "../../consts";
import { useAppInfo } from "../../contexts";

export default memo(
  "Container",
  ({ children, onDismiss, ...props }: React.ComponentProps<typeof Menu>) => {
    const { translucent } = useAppInfo();

    return (
      <Menu
        statusBarHeight={translucent ? statusBarHeight : 0}
        {...o.removeUndefinedKeys({ onDismiss, ...props })}
      >
        <MenuProvider onDismiss={onDismiss}>{children}</MenuProvider>
      </Menu>
    );
  }
);
