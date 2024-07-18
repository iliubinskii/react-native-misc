import type { IndexedRecord, booleanU } from "typescript-misc";
import type { CommonNativeProps } from "../../types";
import Day from "./Day";
import React from "react";
declare const _default: <T>(props: Props<T>) => React.JSX.Element | undefined;
export default _default;
/**
 * @internal
 */
export interface Props<T> extends CommonNativeProps.ViewStyle, Pick<React.ComponentProps<typeof Day<T>>, "getKey" | "getLabel" | "getTextStyle" | "isFeatured"> {
    readonly borderBottom?: booleanU;
    readonly borderEnd?: booleanU;
    readonly borderStart?: booleanU;
    readonly borderTop?: booleanU;
    readonly items: IndexedRecord<readonly T[]>;
    readonly month: string;
    /**
     * Handles day press.
     */
    readonly onDayPress?: ((date: string) => void) | undefined;
    /**
     * Handles month change.
     * @param month - Month.
     */
    readonly onMonthChange: (month: string) => void;
    readonly weekStartsOn: 0 | 1;
    readonly workweekStartsOn: 0 | 1;
}
//# sourceMappingURL=index.d.ts.map