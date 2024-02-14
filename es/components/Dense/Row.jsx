import * as React from "react";
import { Row } from "../common-components";
import { consts } from "../../core";
import { memo } from "react-misc";
export default memo("Row", ({ style, ...props }) => (<Row style={[{ gap }, style]} {...props}/>));
const { gap } = consts.Dense.Row;
//# sourceMappingURL=Row.jsx.map