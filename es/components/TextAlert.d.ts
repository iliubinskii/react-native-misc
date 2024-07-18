import { Text } from "./common-components";
import type { Icon } from "../icons";
import React from "react";
import type { stringU } from "typescript-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends React.ComponentProps<typeof Text> {
    readonly AlertIcon?: Icon | undefined;
    readonly alertIconColor?: stringU;
}
//# sourceMappingURL=TextAlert.d.ts.map