import React from "react";
import { TextInput } from "react-native";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
export interface Props extends Omit<React.ComponentProps<typeof TextInput>, "ref"> {
    readonly customRef?: React.MutableRefObject<Ref | null> | undefined;
}
export type Ref = TextInput;
//# sourceMappingURL=TextInput.d.ts.map