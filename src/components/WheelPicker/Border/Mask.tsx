import * as React from "react";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { unfreeze } from "typescript-misc";

export default memo("Mask", ({ children, height, width }: Props) => (
  <MaskedView
    maskElement={
      <LinearGradient colors={unfreeze(colors)} style={{ height, width }} />
    }
    style={{ height, width }}
  >
    {children}
  </MaskedView>
));

/**
 * @internal
 */
export interface Props {
  readonly children?: React.ReactNode;
  readonly height: number;
  readonly width: number;
}

const { colors } = consts.WheelPicker.Border.Mask;
