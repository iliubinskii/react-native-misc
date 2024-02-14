import * as React from "react";
import type { NumStr } from "typescript-misc";
import { Select } from "../common-components";
import { consts } from "../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";

export default memo(
  "Select",
  // eslint-disable-next-line prefer-arrow-callback -- Ok
  function <T extends NumStr>(props: React.ComponentProps<typeof Select<T>>) {
    const { colors } = useThemeExtended();

    return (
      <Select
        backgroundColor={colors.dense.background}
        foregroundColor={colors.dense.foreground}
        rowStyle={{ borderWidth: 0, height }}
        {...props}
      />
    );
  }
);

const { height } = consts.Dense.Select;
