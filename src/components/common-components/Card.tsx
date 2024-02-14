import * as React from "react";
import { AlignItems, JustifyContent, TextVariant } from "../../types";
import type { DimensionValue, StyleProp, ViewStyle } from "react-native";
import { Row, Text } from "./common-common-components";
import type { CommonProps } from "react-misc";
import { View } from "react-native";
import { consts } from "../../core";
import { is } from "typescript-misc";
import { memo } from "react-misc";
import type { stringU } from "typescript-misc";
import { useThemeExtended } from "../../contexts";

export default memo(
  "Card",
  ({
    actions,
    actionsJustifyContent,
    children,
    contentsStyle,
    menu,
    onLayout,
    title,
    titleTextVariant,
    width
  }: Props) => {
    const { colors, roundness } = useThemeExtended();

    return (
      <View
        onLayout={onLayout}
        style={{
          backgroundColor: colors.surface,
          borderRadius: borderRadius * roundness,
          gap,
          padding,
          width
        }}
      >
        {is.not.empty(title) || is.not.empty(menu) ? (
          <Row
            style={{
              alignItems: AlignItems.flexStart,
              justifyContent: JustifyContent.spaceBetween
            }}
          >
            {is.not.empty(title) ? (
              <Text variant={titleTextVariant ?? TextVariant.titleLarge}>
                {title}
              </Text>
            ) : undefined}
            {is.not.empty(menu) ? (
              <View style={{ marginEnd, marginTop }}>{menu}</View>
            ) : undefined}
          </Row>
        ) : undefined}
        <View style={contentsStyle}>{children}</View>
        {is.not.empty(actions) ? (
          <Row
            style={{
              alignItems: AlignItems.flexEnd,
              justifyContent: actionsJustifyContent ?? JustifyContent.flexEnd
            }}
          >
            {actions}
          </Row>
        ) : undefined}
      </View>
    );
  }
);

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly actions?: React.ReactNode;
  readonly actionsJustifyContent?: JustifyContent | undefined;
  readonly contentsStyle?: StyleProp<ViewStyle> | undefined;
  readonly menu?: React.ReactNode;
  readonly onLayout?: React.ComponentProps<typeof View>["onLayout"];
  readonly title?: stringU;
  readonly titleTextVariant?: TextVariant | undefined;
  readonly width?: DimensionValue | undefined;
}

const { borderRadius, gap, marginEnd, marginTop, padding } = consts.Card;
