import type { SharedValue } from "react-native-reanimated";
import type { NativeAnimation } from "../../functions";
import React from "react";
import type { numberU } from "typescript-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
export declare enum Direction {
    column = "column",
    row = "row"
}
/**
 * @internal
 */
export interface Props {
    readonly children?: React.ReactNode;
    readonly customRef?: React.MutableRefObject<Ref> | undefined;
    readonly direction: Direction;
    readonly disabled?: SharedValue<boolean> | undefined;
    readonly height: number;
    readonly initialOffset: number;
    readonly largeSwipeSize: number;
    readonly largeSwipeStopInterval: number;
    readonly max?: numberU;
    readonly min?: numberU;
    /**
     * Handles scroll event.
     * @param offset - Offset.
     */
    readonly onScroll?: ((offset: number) => void) | undefined;
    /**
     * Handles scroll end event.
     * @param offset - Offset.
     */
    readonly onScrollEnd?: ((offset: number) => void) | undefined;
    /**
     * Handles scroll start event.
     */
    readonly onScrollStart?: (() => void) | undefined;
    readonly smallSwipeSize: number;
    readonly smallSwipeStopInterval: number;
    readonly snapAnimation: NativeAnimation;
    readonly snapInterval: number;
    readonly swipeAnimation: NativeAnimation;
    readonly toggleThreshold?: numberU;
    readonly width: number;
}
export interface Ref {
    /**
     * Scrolls by a given delta.
     * @param delta - Delta.
     */
    readonly scrollBy: (delta: number) => void;
}
//# sourceMappingURL=AnimatedScrollView.d.ts.map