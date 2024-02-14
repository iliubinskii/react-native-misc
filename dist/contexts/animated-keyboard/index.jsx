"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedKeyboardProvider = exports.useAnimatedKeyboard = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const base_animated_keyboard_1 = require("./base-animated-keyboard");
const react_native_keyboard_controller_1 = require("react-native-keyboard-controller");
const react_misc_1 = require("react-misc");
var base_animated_keyboard_2 = require("./base-animated-keyboard");
Object.defineProperty(exports, "useAnimatedKeyboard", { enumerable: true, get: function () { return base_animated_keyboard_2.useAnimatedKeyboard; } });
exports.AnimatedKeyboardProvider = (0, react_misc_1.memo)("AnimatedKeyboardProvider", ({ children, statusBarTranslucent }) => (<react_native_keyboard_controller_1.KeyboardProvider statusBarTranslucent={statusBarTranslucent}>
      <base_animated_keyboard_1.BaseAnimatedKeyboardProvider>{children}</base_animated_keyboard_1.BaseAnimatedKeyboardProvider>
    </react_native_keyboard_controller_1.KeyboardProvider>));
//# sourceMappingURL=index.jsx.map