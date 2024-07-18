import type { CommonProps } from "react-misc";
export declare const MenuProvider: import("react-misc").FunctionComponent<Props>;
/**
 * Consumes menu context.
 * @returns Menu context.
 */
export declare function useMenu(): Context;
/**
 * @internal
 */
export interface Context {
    /**
     * Dismisses menu.
     */
    readonly onDismiss: () => void;
}
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    /**
     * Dismisses menu.
     */
    readonly onDismiss?: (() => void) | undefined;
}
//# sourceMappingURL=menu.d.ts.map