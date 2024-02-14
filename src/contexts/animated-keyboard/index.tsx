import * as React from "react";
import { BaseAnimatedKeyboardProvider } from "./base-animated-keyboard";
import type { CommonProps } from "react-misc";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { memo } from "react-misc";

export { useAnimatedKeyboard } from "./base-animated-keyboard";

export const AnimatedKeyboardProvider = memo(
  "AnimatedKeyboardProvider",
  ({ children, statusBarTranslucent }: Props) => (
    <KeyboardProvider statusBarTranslucent={statusBarTranslucent}>
      <BaseAnimatedKeyboardProvider>{children}</BaseAnimatedKeyboardProvider>
    </KeyboardProvider>
  )
);

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly statusBarTranslucent: boolean;
}
