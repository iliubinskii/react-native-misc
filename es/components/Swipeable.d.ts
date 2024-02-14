import type { TextInput } from "react-native";
import type { booleanU, numberU } from "typescript-misc";
import type { CommonProps } from "react-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
export interface Props extends CommonProps.Children {
    readonly failOnSwipeEnd?: booleanU;
    readonly failOnSwipeStart?: booleanU;
    /**
     * Handles "OnSwipeEnd" event.
     */
    readonly onSwipeEnd?: (() => void) | undefined;
    /**
     * Handles "OnSwipeStart" event.
     */
    readonly onSwipeStart?: (() => void) | undefined;
    readonly resetKey?: unknown;
    readonly threshold?: numberU;
}
export type Ref = TextInput;
//# sourceMappingURL=Swipeable.d.ts.map