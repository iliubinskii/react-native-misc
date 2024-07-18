import type { CommonProps } from "react-misc";
import React from "react";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly customRef?: React.MutableRefObject<Ref> | undefined;
}
export interface Ref {
    /**
     * Starts shake animation.
     */
    readonly shake: () => void;
}
//# sourceMappingURL=Shakable.d.ts.map