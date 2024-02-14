import * as React from "react";
import type { CommonProps } from "react-misc";
import { memo } from "react-misc";

export default memo("Dummy", ({ children }: CommonProps.Children) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment -- Ok
  <>{children}</>
));
