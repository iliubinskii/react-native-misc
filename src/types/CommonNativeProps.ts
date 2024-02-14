import type {
  TextStyle as BaseTextStyle,
  ViewStyle as BaseViewStyle,
  LayoutChangeEvent,
  StyleProp
} from "react-native";

export interface Layout {
  /**
   * Handles layout change event.
   *
   * @param event - Event.
   */
  readonly onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}

export interface TextStyle {
  readonly style?: StyleProp<BaseTextStyle> | undefined;
}

export interface ViewStyle {
  readonly style?: StyleProp<BaseViewStyle> | undefined;
}
