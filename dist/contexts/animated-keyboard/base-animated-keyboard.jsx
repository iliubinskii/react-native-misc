"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimatedKeyboard = exports.BaseAnimatedKeyboardProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
const react_native_keyboard_controller_1 = require("react-native-keyboard-controller");
const react_native_reanimated_1 = require("react-native-reanimated");
exports.BaseAnimatedKeyboardProvider = (0, react_misc_1.memo)("BaseAnimatedKeyboardProvider", ({ children }) => {
    const height = (0, react_native_reanimated_1.useSharedValue)(0);
    (0, react_native_keyboard_controller_1.useKeyboardHandler)({
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
function useAnimatedKeyboard() {
    return React.useContext(AnimatedKeyboardContext);
}
exports.useAnimatedKeyboard = useAnimatedKeyboard;
const AnimatedKeyboardContext = React.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=base-animated-keyboard.jsx.map