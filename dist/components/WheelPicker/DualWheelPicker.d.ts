import * as React from "react";
import type { NumStr, stringU } from "typescript-misc";
import type { Options as WheelPickerOptions } from "./BaseWheelPicker";
declare const _default: <A extends NumStr, B extends NumStr>(props: Props<A, B>) => React.JSX.Element | undefined;
export default _default;
/**
 * @internal
 */
export interface Props<A extends NumStr, B extends NumStr> {
    readonly color?: stringU;
    /**
     * Handles values change.
     *
     * @param value1 - First value.
     * @param value2 - Second value.
     */
    readonly onChange: (value1: A, value2: B) => void;
    readonly slot1: Slot<A>;
    readonly slot2: Slot<B>;
    readonly tick: string;
}
export interface Slot<T extends NumStr> {
    readonly largeSwipeSize: number;
    readonly largeSwipeStopInterval: number;
    readonly options: WheelPickerOptions<T>;
    readonly smallSwipeSize: number;
    readonly smallSwipeStopInterval: number;
    readonly value: T;
}
//# sourceMappingURL=DualWheelPicker.d.ts.map