import { JustifyContent, TextVariant } from "../../types";
import type { DimensionValue, StyleProp, ViewStyle } from "react-native";
import type { CommonProps } from "react-misc";
import React from "react";
import { View } from "react-native";
import type { stringU } from "typescript-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly actions?: React.ReactNode;
    readonly actionsJustifyContent?: JustifyContent | undefined;
    readonly contentsStyle?: StyleProp<ViewStyle> | undefined;
    readonly menu?: React.ReactNode;
    readonly onLayout?: React.ComponentProps<typeof View>["onLayout"];
    readonly title?: stringU;
    readonly titleTextVariant?: TextVariant | undefined;
    readonly width?: DimensionValue | undefined;
}
//# sourceMappingURL=Card.d.ts.map