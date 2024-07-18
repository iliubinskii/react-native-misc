import type { NumStr, stringU } from "typescript-misc";
import React from "react";
import type { SharedValue } from "react-native-reanimated";
declare const _default: <T extends NumStr>(props: Props<T>) => React.JSX.Element | undefined;
export default _default;
export interface Option<T extends NumStr> {
    readonly label: string;
    readonly value: T;
}
export type Options<T extends NumStr> = ReadonlyArray<Option<T>>;
/**
 * @internal
 */
export interface Props<T extends NumStr> {
    readonly color?: stringU;
    readonly customRef?: React.MutableRefObject<Ref> | undefined;
    readonly disabled?: SharedValue<boolean> | undefined;
    readonly largeSwipeSize: number;
    readonly largeSwipeStopInterval: number;
    /**
     * Handles value change.
     * @param value - Value.
     */
    readonly onChange: (value: T) => void;
    /**
     * Handles overflow event.
     * @param overflow - Overflow.
     */
    readonly onOverflow?: ((overflow: -1 | 1) => void) | undefined;
    /**
     * Handles scroll end event.
     * @param value - Value.
     */
    readonly onScrollEnd?: ((value: T) => void) | undefined;
    /**
     * Handles scroll start event.
     */
    readonly onScrollStart?: (() => void) | undefined;
    readonly options: Options<T>;
    readonly smallSwipeSize: number;
    readonly smallSwipeStopInterval: number;
    readonly tick: string;
    readonly value: T;
}
export interface Ref {
    /**
     * Applies overflow to the component.
     * @param overflow - Overflow.
     */
    readonly overflow: (overflow: -1 | 1) => void;
}
//# sourceMappingURL=index.d.ts.map