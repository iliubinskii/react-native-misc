import * as React from "react";
import Modal from "./Modal";
import { memo } from "react-misc";
export default memo("Modal", ({ visible, ...props }) => visible ? <Modal {...props}/> : undefined);
//# sourceMappingURL=index.jsx.map