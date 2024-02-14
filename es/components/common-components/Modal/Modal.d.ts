import type { StyleProp, ViewStyle } from "react-native";
import type { booleanU, numberU } from "typescript-misc";
import type { CommonProps } from "react-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends CommonProps.Children, CommonProps.Closeable {
    readonly animated?: booleanU;
    readonly backdropStyle?: StyleProp<ViewStyle> | undefined;
    readonly containerStyle?: StyleProp<ViewStyle> | undefined;
    readonly keyboardHeightFactor?: numberU;
    readonly name: string;
    readonly overlayStyle?: StyleProp<ViewStyle> | undefined;
}
//# sourceMappingURL=Modal.d.ts.map