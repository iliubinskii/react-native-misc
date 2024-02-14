import * as React from "react";
import { BaseChart } from "./CandlestickChart-common";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends Omit<React.ComponentProps<typeof BaseChart>, "range0" | "range1"> {
    readonly initialRangeFrom: number;
    readonly initialRangeTo: number;
    readonly maxSliceLength: number;
    readonly minSliceLength: number;
    /**
     * Selects index.
     *
     * @param index - Index.
     */
    readonly onSelect?: ((index: number) => void) | undefined;
    readonly verticalRangeFrom: number;
    readonly verticalRangeTo: number;
}
//# sourceMappingURL=CandlestickChart.d.ts.map