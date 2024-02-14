import * as React from "react";
import { memo } from "react-misc";
import { neverDemand } from "typescript-misc";
import { useKeyboardHandler } from "react-native-keyboard-controller";
import { useSharedValue } from "react-native-reanimated";
export const BaseAnimatedKeyboardProvider = memo("BaseAnimatedKeyboardProvider", ({ children }) => {
    const height = useSharedValue(0);
    useKeyboardHandler({
        onEnd: event => {
            "worklet";
            height.value = event.height;
        },
        onMove: event => {
            "worklet";
            height.value = event.height;
        }
    }, []);
    return (<AnimatedKeyboardContext.Provider value={height}>
        {children}
      </AnimatedKeyboardContext.Provider>);
});
/**
 * Consumes animated keyboard context.
 *
 * @returns Keyboard height.
 */
export function useAnimatedKeyboard() {
    return React.useContext(AnimatedKeyboardContext);
}
const AnimatedKeyboardContext = React.createContext(neverDemand());
//# sourceMappingURL=base-animated-keyboard.jsx.map