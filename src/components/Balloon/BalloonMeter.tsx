import type { CommonNativeProps } from "../../types";
import type { CommonProps } from "react-misc";
import { PointerEvents } from "../../types";
import React from "react";
import { View } from "react-native";
import { consts } from "../../core";
import { memo } from "react-misc";
import type { numberU } from "typescript-misc";

export default memo("BalloonMeter", ({ children, onLayout, width }: Props) => (
  <View
    onLayout={onLayout}
    pointerEvents={PointerEvents.none}
    style={{ opacity: 0, padding, width }}
  >
    {children}
  </View>
));

/**
 * @internal
 */
export interface Props extends CommonProps.Children, CommonNativeProps.Layout {
  readonly width?: numberU;
}

const { padding } = consts.Balloon;
