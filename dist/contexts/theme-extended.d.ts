import type { CommonProps } from "react-misc";
import type { MD3ThemeExtended } from "../types";
export declare const ThemeExtendedProvider: import("react-misc").FunctionComponent<Props>;
/**
 * Consumes theme context.
 *
 * @returns Theme context.
 */
export declare function useThemeExtended(): MD3ThemeExtended;
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly theme: MD3ThemeExtended;
}
//# sourceMappingURL=theme-extended.d.ts.map