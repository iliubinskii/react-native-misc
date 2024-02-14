import * as React from "react";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { unfreeze } from "typescript-misc";
export default memo("Mask", ({ children, height, width }) => (<MaskedView maskElement={<LinearGradient colors={unfreeze(colors)} style={{ height, width }}/>} style={{ height, width }}>
    {children}
  </MaskedView>));
const { colors } = consts.WheelPicker.Border.Mask;
//# sourceMappingURL=Mask.jsx.map