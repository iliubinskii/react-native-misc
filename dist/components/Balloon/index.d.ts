import * as React from "react";
import type { Anchor } from "./MeasuredBalloon";
import MeasuredBalloon from "./MeasuredBalloon";
export type { Anchor } from "./MeasuredBalloon";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends Omit<React.ComponentProps<typeof MeasuredBalloon>, "anchor" | "layout" | "windowDimensions"> {
    readonly anchor?: Anchor | undefined;
}
//# sourceMappingURL=index.d.ts.map