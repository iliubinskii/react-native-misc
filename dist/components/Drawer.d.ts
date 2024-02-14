import * as React from "react";
import type { SharedValue } from "react-native-reanimated";
import type { booleanU, numberU } from "typescript-misc";
import type { CommonProps } from "react-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
export declare enum DrawerPosition {
    bottom = "bottom",
    flexEnd = "flexEnd",
    flexStart = "flexStart",
    top = "top"
}
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly customRef?: React.MutableRefObject<Ref> | undefined;
    readonly dragToOpen?: booleanU;
    readonly drawerContents?: React.ReactNode;
    readonly height?: numberU;
    /**
     * Triggered when close animation finishes.
     */
    readonly onClosed?: (() => void) | undefined;
    /**
     * Triggered when open animation starts.
     */
    readonly onOpened?: (() => void) | undefined;
    readonly openRef?: SharedValue<boolean> | undefined;
    readonly position: DrawerPosition;
    readonly width?: numberU;
}
export interface Ref {
    /**
     * Closes drawer.
     */
    readonly close: () => void;
    /**
     * Opens drawer.
     */
    readonly open: () => void;
}
//# sourceMappingURL=Drawer.d.ts.map