import Modal from "./Modal";
import React from "react";
import { memo } from "react-misc";
export default memo("Modal", ({ visible, ...props }) => visible ? <Modal {...props}/> : undefined);
//# sourceMappingURL=index.jsx.map