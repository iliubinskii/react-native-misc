import { Row, Text } from "../common-common-components";
import type { booleanU, stringU } from "typescript-misc";
import type { CommonNativeProps } from "../../../types";
import type { Icon } from "../../../icons";
import { List } from "react-native-paper";
import React from "react";
import { TextVariant } from "../../../types";
import { View } from "react-native";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { rtlSign } from "../../../consts";
import { useThemeExtended } from "../../../contexts";

export default memo(
  "Item",
  ({
    AlertIcon,
    Icon,
    alertIconColor,
    disabled = false,
    selected = false,
    style,
    title,
    titleStyle,
    ...props
  }: Props) => {
    const { colors } = useThemeExtended();

    const backgroundColor = React.useMemo(() => {
      if (disabled) return undefined;

      return selected ? colors.list.selected.background : undefined;
    }, [colors, disabled, selected]);

    const color = React.useMemo(() => {
      if (disabled) return colors.onSurfaceDisabled;

      return selected ? colors.list.selected.foreground : undefined;
    }, [colors, disabled, selected]);

    const renderLeft = React.useCallback(
      ({ style: iconStyle }: IconProps) => {
        if (Icon)
          return color ? (
            <List.Icon color={color} icon={Icon} style={iconStyle} />
          ) : (
            <List.Icon icon={Icon} style={iconStyle} />
          );

        return undefined;
      },
      [Icon, color]
    );

    const renderTitle = React.useCallback(
      () => (
        <Row>
          <Text
            numberOfLines={1}
            style={[{ color }, titleStyle]}
            variant={TextVariant.bodyLarge}
          >
            {title}
          </Text>
          {AlertIcon ? (
            <View
              style={{
                transform: [
                  { translateX: rtlSign * alertIconTranslateX },
                  { translateY: alertIconTranslateY }
                ]
              }}
            >
              <AlertIcon color={alertIconColor} size={alertIconSize} />
            </View>
          ) : undefined}
        </Row>
      ),
      [AlertIcon, alertIconColor, color, title, titleStyle]
    );

    return (
      <List.Item
        disabled={disabled}
        left={renderLeft}
        style={[{ backgroundColor }, style]}
        title={renderTitle}
        {...props}
      />
    );
  }
);

/**
 * @internal
 */
export interface Props
  extends Omit<React.ComponentProps<typeof List.Item>, "left"> {
  readonly AlertIcon?: Icon | undefined;
  readonly Icon?: Icon | undefined;
  readonly alertIconColor?: stringU;
  readonly selected?: booleanU;
  readonly title: string;
}

const { alertIconSize, alertIconTranslateX, alertIconTranslateY } =
  consts.List.Item;

interface IconProps extends CommonNativeProps.ViewStyle {
  readonly color: string;
}
