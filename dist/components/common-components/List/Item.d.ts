import type { booleanU, stringU } from "typescript-misc";
import type { Icon } from "../../../icons";
import { List } from "react-native-paper";
import React from "react";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends Omit<React.ComponentProps<typeof List.Item>, "left"> {
    readonly AlertIcon?: Icon | undefined;
    readonly Icon?: Icon | undefined;
    readonly alertIconColor?: stringU;
    readonly selected?: booleanU;
    readonly title: string;
}
//# sourceMappingURL=Item.d.ts.map