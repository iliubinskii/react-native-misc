import type { CommonProps } from "react-misc";
export declare const AppInfoProvider: import("react-misc").FunctionComponent<Props>;
/**
 * Consumes app info context.
 * @returns App info context.
 */
export declare function useAppInfo(): Context;
/**
 * @internal
 */
export interface Context {
    readonly translucent: boolean;
}
/**
 * @internal
 */
export interface Props extends CommonProps.Children, Context {
}
//# sourceMappingURL=app-info.d.ts.map