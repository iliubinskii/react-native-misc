import type { numberU } from "typescript-misc";
import type { CommonProps } from "react-misc";
import type { MD3ThemeExtended } from "../types";
import React from "react";
import { Snackbar } from "react-native-paper";
export declare const SnackbarProvider: import("react-misc").FunctionComponent<Props>;
export declare enum Variant {
    error = "error"
}
/**
 * Consumes snackbar context.
 * @returns Snackbar context.
 */
export declare function useSnackbar(): Context;
/**
 * @internal
 */
export interface Context {
    /**
     * Hides snackbar.
     */
    readonly hideSnackbar: () => void;
    /**
     * Shows snackbar.
     * @param text - Text.
     * @param options - Options.
     */
    readonly showSnackbar: (text: string, options?: Options) => void;
}
/**
 * @internal
 */
export interface Options {
    readonly action?: Exclude<React.ComponentProps<typeof Snackbar>["action"], undefined> | undefined;
    readonly duration?: numberU;
    readonly offset?: numberU;
    readonly variant?: Variant | undefined;
}
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly defaultOffset?: numberU;
    readonly theme: MD3ThemeExtended;
    readonly translucent: boolean;
}
//# sourceMappingURL=snackbar.d.ts.map