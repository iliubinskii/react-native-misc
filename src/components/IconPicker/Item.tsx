import * as React from "react";
import type { Icon } from "../../icons";
import { IconButton } from "../common-components";
import { consts } from "../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";

export default memo("Item", ({ getIcon, name, onSelect, selected }: Props) => {
  const Icon = React.useMemo(() => getIcon(name), [getIcon, name]);

  const { colors } = useThemeExtended();

  const onPress = React.useCallback(() => {
    onSelect(name);
  }, [name, onSelect]);

  return (
    <IconButton
      Icon={Icon}
      iconColor={selected ? colors.inverseOnPrimary : undefined}
      onPress={onPress}
      padding={padding}
      size={size}
      style={{
        backgroundColor: selected ? colors.inversePrimary : undefined,
        margin
      }}
    />
  );
});

/**
 * @internal
 */
export interface Props {
  /**
   * Icon extractor.
   *
   * @param name - Name.
   * @returns Icon.
   */
  readonly getIcon: (name: string) => Icon;
  readonly name: string;
  /**
   * Selects icon.
   *
   * @param name - Name.
   */
  readonly onSelect: (name: string) => void;
  readonly selected: boolean;
}

const { margin, padding, size } = consts.IconPicker;
