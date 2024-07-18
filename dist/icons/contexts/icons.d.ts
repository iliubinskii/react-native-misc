import type { IconName, Icons } from "../icons-common";
import type { CommonProps } from "react-misc";
export declare const IconsProvider: import("react-misc").FunctionComponent<Props>;
/**
 * Consumes icons context.
 * @returns Icons context.
 */
export declare function useIcons<I extends IconName = never>(): Icons<I>;
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly icons: Icons;
}
//# sourceMappingURL=icons.d.ts.map