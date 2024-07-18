import { memo, useBoolean, useBusyState, useDeferredEffect } from "react-misc";
import type { CommonProps } from "react-misc";
import React from "react";
import { View } from "react-native";

export default memo(
  "LazyRender",
  ({ children, placeholder: createPlaceholder }: Props) => {
    const busy = useBusyState();

    const [prerendered, setPrerendered] = useBoolean();

    const placeholder = React.useMemo(
      () => (prerendered ? undefined : createPlaceholder()),
      [createPlaceholder, prerendered]
    );

    useDeferredEffect(() => {
      if (busy) {
        // Wait
      } else setPrerendered();
    }, [busy]);

    return <View>{prerendered ? children : placeholder}</View>;
  }
);

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  /**
   * Placeholder.
   * @returns React node.
   */
  readonly placeholder: () => React.ReactNode;
}
