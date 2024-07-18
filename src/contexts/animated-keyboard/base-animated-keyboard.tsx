import type { CommonProps } from "react-misc";
import React from "react";
import type { SharedValue } from "react-native-reanimated";
import { memo } from "react-misc";
import { neverDemand } from "typescript-misc";
import { useKeyboardHandler } from "react-native-keyboard-controller";
import { useSharedValue } from "react-native-reanimated";

export const BaseAnimatedKeyboardProvider = memo(
  "BaseAnimatedKeyboardProvider",
  ({ children }: CommonProps.Children) => {
    const height = useSharedValue(0);

    useKeyboardHandler(
      {
        onEnd: event => {
          "worklet";

          height.value = event.height;
        },
        onMove: event => {
          "worklet";

          height.value = event.height;
        }
      },
      []
    );

    return (
      <AnimatedKeyboardContext.Provider value={height}>
        {children}
      </AnimatedKeyboardContext.Provider>
    );
  }
);

/**
 * Consumes animated keyboard context.
 * @returns Keyboard height.
 */
export function useAnimatedKeyboard(): Readonly<SharedValue<number>> {
  return React.useContext(AnimatedKeyboardContext);
}

const AnimatedKeyboardContext =
  React.createContext(neverDemand<Readonly<SharedValue<number>>>());
