import type { LayoutRectangle, ScaledSize } from "react-native";
import type { CommonNativeProps } from "../../../types";
import type { CommonProps } from "react-misc";
import type { numberU } from "typescript-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
export interface Anchor {
    readonly x: number;
    readonly y: number | {
        readonly bottom: number;
        readonly top: number;
    };
}
/**
 * @internal
 */
export interface Props extends CommonProps.Children, CommonProps.Closeable, CommonNativeProps.ViewStyle {
    readonly anchor: Anchor;
    readonly keyboardHeightFactor?: numberU;
    readonly layout: LayoutRectangle;
    readonly visible: boolean;
    readonly width?: numberU;
    readonly windowDimensions: ScaledSize;
}
//# sourceMappingURL=index.d.ts.map