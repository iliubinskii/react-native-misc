import type { booleanU, numberU, stringU } from "typescript-misc";
import type { CommonNativeProps } from "../../../types";
import type { CommonProps } from "react-misc";
import type { Icon } from "../../../icons";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends CommonProps.Pressable, CommonNativeProps.ViewStyle {
    readonly AlertIcon?: Icon | undefined;
    readonly Icon: Icon;
    readonly alertIconColor?: stringU;
    readonly disabled?: booleanU;
    readonly iconColor?: stringU;
    readonly keepLongPressEnabled?: booleanU;
    readonly padding?: numberU;
    readonly ripple?: booleanU;
    readonly size?: numberU;
}
//# sourceMappingURL=IconButton.d.ts.map