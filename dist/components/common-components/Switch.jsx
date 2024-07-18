"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("Switch", (props) => {
    const { colors } = (0, contexts_1.useThemeExtended)();
    return (<react_native_gesture_handler_1.Switch thumbColor={colors.switch.thumb} trackColor={colors.switch.track} {...props}/>);
});
//# sourceMappingURL=Switch.jsx.map