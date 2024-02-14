import * as React from "react";
import { FlexWrap } from "../../../types";
import { Row } from "../common-common-components";
import { consts } from "../../../core";
import { is } from "typescript-misc";
import { memo } from "react-misc";
export default memo("ChipsIfNotEmpty", ({ children, style, ...props }) => {
    if (is.empty(children))
        return undefined;
    if (is.array(children) && children.filter(is.not.empty).length === 0)
        return undefined;
    return (<Row style={[{ flexWrap: FlexWrap.wrap, gap }, style]} {...props}>
        {children}
      </Row>);
});
export const { gap } = consts.Group.Chips;
//# sourceMappingURL=ChipsIfNotEmpty.jsx.map