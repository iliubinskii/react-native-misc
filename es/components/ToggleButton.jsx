import React from "react";
import { ToggleButton } from "react-native-paper";
import { ToggleButtonStatus } from "../types";
import { memo } from "react-misc";
export default memo("ToggleButton", ({ checked = false, ...props }) => (<ToggleButton status={checked ? ToggleButtonStatus.checked : ToggleButtonStatus.unchecked} {...props}/>));
//# sourceMappingURL=ToggleButton.jsx.map