import { ActivityIndicator, TouchableRipple } from "react-native-paper";
import { AlignItems, TextVariant } from "../../types";
import { Row, Text } from "../common-components";
import type { booleanU, stringU } from "typescript-misc";
import { memo, useDelayedValue } from "react-misc";
import type { CommonProps } from "react-misc";
import type { Icon } from "../../icons";
import React from "react";
import { consts } from "../../core";
import { fn } from "typescript-misc";
import { useThemeExtended } from "../../contexts";

export default memo(
  "Item",
  ({
    Icon,
    caption,
    color,
    disabled = false,
    loading = false,
    onLongPress = fn.noop,
    onPress = fn.noop,
    onPressIn = fn.noop,
    onPressOut = fn.noop,
    outlined = false,
    selected = false,
    selectedColor
  }: Props) => {
    const { colors, roundness } = useThemeExtended();

    const backgroundColor = React.useMemo(() => {
      if (outlined)
        return selected ? colors.menuCard.selected.background : undefined;

      return (selected ? selectedColor : color) ?? colors.primary;
    }, [color, colors, outlined, selected, selectedColor]);

    const borderColor = React.useMemo(() => {
      if (outlined)
        return selected ? colors.menuCard.selected.outline : colors.outline;

      return undefined;
    }, [colors, outlined, selected]);

    const loadingDelayed = useDelayedValue(loading, loadingDelay, [false]);

    const foregroundColor = React.useMemo(() => {
      if (outlined)
        return selected
          ? colors.menuCard.selected.foreground
          : colors.secondLine;

      return colors.onPrimary;
    }, [colors, outlined, selected]);

    return (
      <TouchableRipple
        disabled={disabled}
        onLongPress={onLongPress}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{
          backgroundColor,
          borderColor,
          borderRadius: roundness,
          borderWidth: outlined ? 1 : 0,
          opacity: disabled ? disabledOpacity : 1,
          padding: outlined ? padding - 1 : padding
        }}
      >
        <Row style={{ alignItems: AlignItems.center, gap }}>
          {loadingDelayed ? (
            <ActivityIndicator color={foregroundColor} size={iconSize} />
          ) : (
            <Icon color={foregroundColor} size={iconSize} />
          )}
          <Text
            style={{ color: foregroundColor }}
            variant={TextVariant.labelLarge}
          >
            {caption}
          </Text>
        </Row>
      </TouchableRipple>
    );
  }
);

/**
 * @internal
 */
export interface Props extends CommonProps.Pressable {
  readonly Icon: Icon;
  readonly caption: string;
  readonly color?: stringU;
  readonly disabled?: booleanU;
  readonly loading?: booleanU;
  readonly outlined?: booleanU;
  readonly selected?: booleanU;
  readonly selectedColor?: stringU;
}

const { disabledOpacity, gap, iconSize, loadingDelay, padding } =
  consts.MenuCard.Item;
