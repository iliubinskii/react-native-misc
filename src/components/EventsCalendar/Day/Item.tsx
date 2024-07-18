import React from "react";
import { Text } from "../../common-components";
import type { TextStyle } from "react-native";
import type { booleanU } from "typescript-misc";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../../contexts";

export default memo("Item", function Item<
  T
>({ getLabel, getTextStyle, isFeatured = false, item }: Props<T>) {
  const { colors, roundness } = useThemeExtended();

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          borderRadius: roundnessFactor * roundness,
          fontSize,
          lineHeight,
          paddingHorizontal,
          paddingVertical
        },
        isFeatured
          ? {
              backgroundColor: colors.calendar.featured.background,
              color: colors.calendar.featured.foreground
            }
          : {
              backgroundColor: colors.surfaceDisabled,
              color: colors.onSurfaceDisabled
            },
        getTextStyle?.(item)
      ]}
    >
      {getLabel(item)}
    </Text>
  );
});

/**
 * @internal
 */
export interface Props<T> {
  /**
   * Extracts label.
   * @param item - Item.
   * @returns Label.
   */
  readonly getLabel: (item: T) => string;
  /**
   * Returns text style for an item.
   * @param item - Item.
   * @returns Text style.
   */
  readonly getTextStyle?: ((item: T) => TextStyle | undefined) | undefined;
  readonly isFeatured?: booleanU;
  readonly item: T;
}

const {
  fontSize,
  lineHeight,
  numberOfLines,
  paddingHorizontal,
  paddingVertical,
  roundnessFactor
} = consts.EventsCalendar.Day.Item;
