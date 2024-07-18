/* eslint-disable misc/consistent-enum-members -- Ok */

import type { MD3Theme } from "react-native-paper";

export enum ButtonMode {
  contained = "contained",
  containedTonal = "contained-tonal",
  elevated = "elevated",
  outlined = "outlined",
  text = "text"
}

export enum CheckboxStatus {
  checked = "checked",
  indeterminate = "indeterminate",
  unchecked = "unchecked"
}

export enum MenuAnchorPosition {
  bottom = "bottom",
  top = "top"
}

export enum TextAlign {
  auto = "auto",
  center = "center",
  justify = "justify",
  left = "left",
  right = "right"
}

export enum TextInputAutoCapitalize {
  characters = "characters",
  none = "none",
  sentences = "sentences",
  words = "words"
}

export enum TextInputAutoComplete {
  email = "email",
  name = "name",
  newPassword = "new-password",
  off = "off",
  password = "password",
  username = "username"
}

export enum TextInputMode {
  flat = "flat",
  outlined = "outlined"
}

export enum TextInputKeyboardType {
  decimalPad = "decimal-pad",
  default = "default",
  emailAddress = "email-address",
  numberPad = "number-pad",
  numeric = "numeric",
  phonePad = "phone-pad"
}

export enum TextInputTextContentType {
  emailAddress = "emailAddress",
  name = "name",
  newPassword = "newPassword",
  none = "none",
  password = "password",
  username = "username"
}

export enum TextVariant {
  bodyLarge = "bodyLarge",
  bodyMedium = "bodyMedium",
  bodySmall = "bodySmall",
  displayLarge = "displayLarge",
  displayMedium = "displayMedium",
  displaySmall = "displaySmall",
  headlineLarge = "headlineLarge",
  headlineMedium = "headlineMedium",
  headlineSmall = "headlineSmall",
  labelLarge = "labelLarge",
  labelMedium = "labelMedium",
  labelSmall = "labelSmall",
  titleLarge = "titleLarge",
  titleMedium = "titleMedium",
  titleSmall = "titleSmall"
}

export enum ToggleButtonStatus {
  checked = "checked",
  unchecked = "unchecked"
}

export enum VerticalAlign {
  auto = "auto",
  bottom = "bottom",
  middle = "middle",
  top = "top"
}

/**
 * @internal
 */
export type MD3Colors = MD3Theme["colors"];

export interface MD3ColorsExtended
  extends MD3ColorsExtendedBasic,
    MD3ColorsExtendedComponents {}

export interface MD3ColorsExtendedBasic extends MD3Colors {
  readonly errorContainerOutline: string;
  readonly fade: string;
  readonly fadeMore: string;
  readonly featured: string;
  readonly foreground: string;
  readonly hyperlink: string;
  readonly inverseOnPrimary: string;
  readonly inversePrimaryOutline: string;
  readonly ok: string;
  readonly okContainer: string;
  readonly okContainerOutline: string;
  readonly onOk: string;
  readonly onOkContainer: string;
  readonly onWarning: string;
  readonly onWarningContainer: string;
  readonly primaryContainerOutline: string;
  readonly secondLine: string;
  readonly secondaryContainerOutline: string;
  readonly svgShadow: string;
  readonly tertiaryContainerOutline: string;
  readonly warning: string;
  readonly warningContainer: string;
  readonly warningContainerOutline: string;
}

export interface MD3ColorsExtendedComponents {
  readonly avatar: {
    readonly background: string;
    readonly foreground: string;
  };
  readonly button: {
    readonly secondary: string;
  };
  readonly calendar: {
    readonly featured: {
      readonly background: string;
      readonly foreground: string;
    };
    readonly offDay: string;
    readonly padding: string;
    readonly selection: string;
    readonly selectionInterval: string;
    readonly today: string;
    readonly workday: string;
  };
  readonly chip: {
    readonly background: string;
    readonly foreground: string;
    readonly outline: string;
  };
  readonly dense: {
    readonly background: string;
    readonly foreground: string;
    readonly toggleButton: {
      readonly background: string;
      readonly checked: {
        readonly background: string;
        readonly foreground: string;
      };
      readonly foreground: string;
    };
  };
  readonly list: {
    readonly selected: {
      readonly background: string;
      readonly foreground: string;
    };
  };
  readonly menuCard: {
    readonly selected: {
      readonly background: string;
      readonly foreground: string;
      readonly outline: string;
    };
  };
  readonly switch: {
    readonly thumb: string;
    readonly track: {
      readonly false: string;
      readonly true: string;
    };
  };
}

export interface MD3ThemeExtended extends MD3Theme {
  readonly colors: MD3ColorsExtended;
}
