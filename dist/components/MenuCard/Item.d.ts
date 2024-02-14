import type { booleanU, stringU } from "typescript-misc";
import type { CommonProps } from "react-misc";
import type { Icon } from "../../icons";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends CommonProps.Pressable {
    readonly Icon: Icon;
    readonly caption: string;
    readonly color?: stringU;
    readonly disabled?: booleanU;
    readonly loading?: booleanU;
    readonly outlined?: booleanU;
    readonly selected?: booleanU;
    readonly selectedColor?: stringU;
}
//# sourceMappingURL=Item.d.ts.map