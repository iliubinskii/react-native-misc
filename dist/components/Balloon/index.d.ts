import type { Anchor } from "./MeasuredBalloon";
import MeasuredBalloon from "./MeasuredBalloon";
import React from "react";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends Omit<React.ComponentProps<typeof MeasuredBalloon>, "anchor" | "layout" | "windowDimensions"> {
    readonly anchor?: Anchor | undefined;
}
export type { Anchor } from "./MeasuredBalloon";
//# sourceMappingURL=index.d.ts.map