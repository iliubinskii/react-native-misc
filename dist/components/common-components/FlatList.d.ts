import type { numberU } from "typescript-misc";
import type { FlatList } from "react-native-gesture-handler";
import React from "react";
declare const _default: <T>(props: Props<T>) => React.JSX.Element | undefined;
export default _default;
/**
 * @internal
 */
export interface Props<T> extends Omit<React.ComponentProps<typeof FlatList<T>>, "data" | "initialNumToRender" | "keyExtractor" | "CellRendererComponent" | "ListFooterComponent" | "ListHeaderComponent" | "ref" | "style"> {
    readonly data: readonly T[];
    readonly height: number;
    /**
     * Returns item min height.
     * @param item - Item.
     * @param index - Index.
     * @returns Min height.
     */
    readonly itemMinHeight: number | ((item: T) => number);
    /**
     * Key extractor.
     * @param item - Item.
     * @param index - Index.
     * @returns Key.
     */
    readonly keyExtractor: (item: T, index: number) => string;
    readonly paddingBottom?: numberU;
    readonly paddingTop?: numberU;
}
//# sourceMappingURL=FlatList.d.ts.map