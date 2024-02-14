import * as React from "react";
import type { numberU, strings } from "typescript-misc";
import type { BottomTabBar } from "@react-navigation/bottom-tabs";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends React.ComponentProps<typeof BottomTabBar> {
    /**
     * Returns tab bar page.
     *
     * @param index - Index.
     * @param names - Names.
     * @returns Tab bar page.
     */
    readonly getPage?: ((index: number, names: strings) => numberU) | undefined;
    readonly height: number;
    readonly iconSize: number;
    /**
     * Handles page change.
     *
     * @param page - Page.
     */
    readonly onPageChange?: ((page: number) => void) | undefined;
    readonly pageCount: number;
    readonly pageSize: number;
}
//# sourceMappingURL=index.d.ts.map