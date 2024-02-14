import * as React from "react";
import { Button } from "react-native-paper";
import { ButtonMode } from "../types";
import { consts } from "../core";
import { memo } from "react-misc";
export default memo("SquareButton", ({ contentStyle, ...props }) => (<Button contentStyle={[{ paddingVertical }, contentStyle]} mode={ButtonMode.contained} theme={{ roundness }} {...props}/>));
const { paddingVertical, roundness } = consts.SquareButton;
//# sourceMappingURL=SquareButton.jsx.map