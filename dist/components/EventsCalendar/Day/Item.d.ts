import * as React from "react";
import type { TextStyle } from "react-native";
import type { booleanU } from "typescript-misc";
declare const _default: <T>(props: Props<T>) => React.JSX.Element | undefined;
export default _default;
/**
 * @internal
 */
export interface Props<T> {
    /**
     * Extracts label.
     *
     * @param item - Item.
     * @returns Label.
     */
    readonly getLabel: (item: T) => string;
    /**
     * Returns text style for an item.
     *
     * @param item - Item.
     * @returns Text style.
     */
    readonly getTextStyle?: ((item: T) => TextStyle | undefined) | undefined;
    readonly isFeatured?: booleanU;
    readonly item: T;
}
//# sourceMappingURL=Item.d.ts.map