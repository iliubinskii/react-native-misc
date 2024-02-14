import type { NumStr, numberU } from "typescript-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
export interface Candlestick {
    readonly closing: number;
    readonly high: number;
    readonly key: NumStr;
    readonly low: number;
    readonly opening: number;
}
export type Candlesticks = readonly Candlestick[];
/**
 * @internal
 */
export interface Props {
    readonly bearBarColor: string;
    readonly bullBarColor: string;
    readonly color: string;
    readonly data: Candlesticks;
    /**
     * Returns label for a key.
     *
     * @param key - Candlestick key.
     * @returns Label.
     */
    readonly getLabel: (key: NumStr) => string;
    readonly height: number;
    readonly maxHorizontalCells: number;
    readonly minLabelsDistance: number;
    readonly minLabelsEdgeDistance: number;
    readonly paddingBottom: number;
    readonly paddingEnd: number;
    readonly paddingStart: number;
    readonly paddingTop: number;
    readonly range0: number;
    readonly range1: number;
    readonly selectedColor: string;
    readonly selectedIndex?: numberU;
    readonly verticalLabels: VerticalLabels;
    readonly width: number;
}
export interface VerticalLabel {
    readonly label: string;
    readonly value: number;
}
export type VerticalLabels = readonly VerticalLabel[];
//# sourceMappingURL=BaseChart.d.ts.map