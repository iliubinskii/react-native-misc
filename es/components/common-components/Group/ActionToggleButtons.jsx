import * as React from "react";
import { Row } from "../common-common-components";
import { consts } from "../../../core";
import { memo } from "react-misc";
export default memo("ActionToggleButtons", ({ start = false, style, ...props }) => (<Row style={[
        {
            gap,
            marginBottom,
            marginEnd: start ? undefined : marginHorizontal,
            marginStart: start ? marginHorizontal : undefined
        },
        style
    ]} {...props}/>));
export const { gap, marginBottom, marginHorizontal } = consts.Group.ActionToggleButtons;
//# sourceMappingURL=ActionToggleButtons.jsx.map