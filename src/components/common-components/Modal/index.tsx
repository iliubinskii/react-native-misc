import * as React from "react";
import Modal from "./Modal";
import { memo } from "react-misc";

export default memo("Modal", ({ visible, ...props }: Props) =>
  visible ? <Modal {...props} /> : undefined
);

/**
 * @internal
 */
export interface Props extends React.ComponentProps<typeof Modal> {
  readonly visible: boolean;
}
