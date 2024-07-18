import { CalendarDayType } from "../../../hooks";
import type { CommonProps } from "react-misc";
import Item from "./Item";
import type { NumStr } from "typescript-misc";
import React from "react";
declare const _default: <T>(props: Props<T>) => React.JSX.Element | undefined;
export default _default;
/**
 * @internal
 */
export interface Props<T> extends CommonProps.Pressable, Pick<React.ComponentProps<typeof Item<T>>, "getLabel" | "getTextStyle"> {
    readonly date: string;
    readonly day: number;
    /**
     * Extracts key.
     * @param item - Item.
     * @returns Key.
     */
    readonly getKey: (item: T) => NumStr;
    readonly index: number;
    /**
     * Checks if item is featured.
     * @param item - Item.
     * @returns _True_ if item is featured, _false_ otherwise.
     */
    readonly isFeatured: (item: T) => boolean;
    readonly items?: readonly T[] | undefined;
    readonly type: CalendarDayType;
}
//# sourceMappingURL=index.d.ts.map