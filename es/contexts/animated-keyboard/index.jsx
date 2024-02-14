import * as React from "react";
import { BaseAnimatedKeyboardProvider } from "./base-animated-keyboard";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { memo } from "react-misc";
export { useAnimatedKeyboard } from "./base-animated-keyboard";
export const AnimatedKeyboardProvider = memo("AnimatedKeyboardProvider", ({ children, statusBarTranslucent }) => (<KeyboardProvider statusBarTranslucent={statusBarTranslucent}>
      <BaseAnimatedKeyboardProvider>{children}</BaseAnimatedKeyboardProvider>
    </KeyboardProvider>));
//# sourceMappingURL=index.jsx.map