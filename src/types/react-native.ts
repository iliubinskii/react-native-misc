export enum ColorSchemeName {
  dark = "dark",
  light = "light"
}

export enum ExpoStatusBarStyle {
  auto = "auto",
  dark = "dark",
  inverted = "inverted",
  light = "light"
}

export enum FlatListDecelerationRate {
  fast = "fast",
  normal = "normal"
}

export enum HyphenationFrequency {
  full = "full",
  none = "none",
  normal = "normal"
}

export enum KeyboardAvoidingViewBehavior {
  height = "height",
  padding = "padding",
  position = "position"
}

export enum KeyboardDismissMode {
  interactive = "interactive",
  none = "none",
  onDrag = "on-drag"
}

export enum KeyboardEventName {
  keyboardDidChangeFrame = "keyboardDidChangeFrame",
  keyboardDidHide = "keyboardDidHide",
  keyboardDidShow = "keyboardDidShow",
  keyboardWillChangeFrame = "keyboardWillChangeFrame",
  keyboardWillHide = "keyboardWillHide",
  keyboardWillShow = "keyboardWillShow"
}

export enum KeyboardShouldPersistTaps {
  always = "always",
  handled = "handled",
  never = "never"
}

export enum OS {
  android = "android",
  ios = "ios",
  macos = "macos",
  web = "web",
  windows = "windows"
}

export enum PointerEvents {
  auto = "auto",
  boxNone = "box-none",
  boxOnly = "box-only",
  none = "none"
}

export enum StatusBarStyle {
  darkContent = "dark-content",
  default = "default",
  lightContent = "light-content"
}

export enum TextTransform {
  capitalize = "capitalize",
  none = "none"
}

export interface VirtualizedListLayout {
  readonly index: number;
  readonly length: number;
  readonly offset: number;
}
