"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_swipe_gestures_1 = tslib_1.__importDefault(require("react-native-swipe-gestures"));
const react_1 = tslib_1.__importDefault(require("react"));
const consts_1 = require("../../consts");
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
exports.default = (0, react_misc_1.memo)("GestureRecognizer", ({ onSwipeEnd, onSwipeStart, ...props }) => {
    const onSwipeLeft = consts_1.isRtl ? onSwipeEnd : onSwipeStart;
    const onSwipeRight = consts_1.isRtl ? onSwipeStart : onSwipeEnd;
    return (<react_native_swipe_gestures_1.default {...typescript_misc_1.o.removeUndefinedKeys({ onSwipeLeft, onSwipeRight, ...props })}/>);
});
//# sourceMappingURL=GestureRecognizer.jsx.map