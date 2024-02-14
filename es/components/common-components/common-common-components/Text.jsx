import * as React from "react";
import { HyphenationFrequency, TextVariant } from "../../../types";
import { Text } from "react-native-paper";
import { memo } from "react-misc";
export default memo("Text", ({ 
// eslint-disable-next-line @typescript-eslint/naming-convention -- Ok
android_hyphenationFrequency, variant, ...props }) => (<Text android_hyphenationFrequency={android_hyphenationFrequency ?? HyphenationFrequency.full} variant={variant ?? TextVariant.bodyMedium} {...props}/>));
//# sourceMappingURL=Text.jsx.map