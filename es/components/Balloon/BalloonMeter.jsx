import * as React from "react";
import { PointerEvents } from "../../types";
import { View } from "react-native";
import { consts } from "../../core";
import { memo } from "react-misc";
export default memo("BalloonMeter", ({ children, onLayout, width }) => (<View onLayout={onLayout} pointerEvents={PointerEvents.none} style={{ opacity: 0, padding, width }}>
    {children}
  </View>));
const { padding } = consts.Balloon;
//# sourceMappingURL=BalloonMeter.jsx.map