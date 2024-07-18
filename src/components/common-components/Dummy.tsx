import type { CommonProps } from "react-misc";
import React from "react";
import { memo } from "react-misc";

export default memo("Dummy", ({ children }: CommonProps.Children) => (
  <>{children}</>
));
