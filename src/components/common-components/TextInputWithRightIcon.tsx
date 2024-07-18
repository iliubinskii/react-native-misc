import type { Icon } from "../../icons";
import { IconButton } from "./common-common-components";
import React from "react";
import { TextInput } from "react-native-paper";
import type { booleanU } from "typescript-misc";
import { memo } from "react-misc";

export default memo(
  "TextInputWithRightIcon",
  ({ Icon, iconDisabled, onIconPress, ...props }: Props) => {
    const right = React.useCallback<Icon>(
      ({ color, size }) => (
        <IconButton
          Icon={Icon}
          disabled={iconDisabled}
          iconColor={color}
          onPress={onIconPress}
          size={size}
          style={{ margin: 0 }}
        />
      ),
      [Icon, iconDisabled, onIconPress]
    );

    return <TextInput right={<TextInput.Icon icon={right} />} {...props} />;
  }
);

/**
 * @internal
 */
export interface Props
  extends Omit<React.ComponentProps<typeof TextInput>, "right"> {
  readonly Icon: Icon;
  readonly iconDisabled?: booleanU;
  /**
   * Handles icon press.
   */
  readonly onIconPress: () => void;
}
