import * as React from "react";
import type { Icon } from "../../icons";
import { TextInput } from "react-native-paper";
import type { booleanU } from "typescript-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends Omit<React.ComponentProps<typeof TextInput>, "right"> {
    readonly Icon: Icon;
    readonly iconDisabled?: booleanU;
    /**
     * Handles icon press.
     */
    readonly onIconPress: () => void;
}
//# sourceMappingURL=TextInputWithRightIcon.d.ts.map