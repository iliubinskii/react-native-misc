"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAnimatedKeyboardProvider = void 0;
exports.useAnimatedKeyboard = useAnimatedKeyboard;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
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
 * @returns Keyboard height.
 */
function useAnimatedKeyboard() {
    return react_1.default.useContext(AnimatedKeyboardContext);
}
const AnimatedKeyboardContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=base-animated-keyboard.jsx.map