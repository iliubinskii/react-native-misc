"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const react_native_svg_1 = require("react-native-svg");
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../../contexts");
const functions_1 = require("../../../functions");
exports.default = (0, react_misc_1.memo)("Circle", ({ selection }) => {
    const animatedProps = (0, react_native_reanimated_1.useAnimatedProps)(() => {
        if (functions_1.worklets.notEmpty(selection.value)) {
            const day = selection.value % daysInWeek;
            const week = Math.floor(selection.value / daysInWeek);
            return {
                cx: (day + 0.5) * size,
                cy: (week + 0.5) * size,
                r: 0.5 * size - paddingVertical
            };
        }
        return { cx: 0, cy: 0, r: 0 };
    }, [selection]);
    const { colors } = (0, contexts_1.useThemeExtended)();
    return (<AnimatedCircle animatedProps={animatedProps} fill={colors.calendar.selection}/>);
});
const { daysInWeek, paddingVertical, size } = core_1.consts.DateTimePicker.Calendar;
// eslint-disable-next-line misc/typescript/no-unsafe-object-assignment -- Ok
const AnimatedCircle = react_native_reanimated_1.default.createAnimatedComponent(react_native_svg_1.Circle);
//# sourceMappingURL=Circle.jsx.map