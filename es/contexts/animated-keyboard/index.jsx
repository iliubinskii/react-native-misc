import { BaseAnimatedKeyboardProvider } from "./base-animated-keyboard";
import { KeyboardProvider } from "react-native-keyboard-controller";
import React from "react";
import { memo } from "react-misc";
export const AnimatedKeyboardProvider = memo("AnimatedKeyboardProvider", ({ children, statusBarTranslucent }) => (<KeyboardProvider statusBarTranslucent={statusBarTranslucent}>
      <BaseAnimatedKeyboardProvider>{children}</BaseAnimatedKeyboardProvider>
    </KeyboardProvider>));
export { useAnimatedKeyboard } from "./base-animated-keyboard";
//# sourceMappingURL=index.jsx.map