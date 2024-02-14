"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const react_native_svg_1 = require("react-native-svg");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../../contexts");
const functions_1 = require("../../../functions");
exports.default = (0, react_misc_1.memo)("SelectionRow", ({ selection1, selection2, week }) => {
    const animatedProps = (0, react_native_reanimated_1.useAnimatedProps)(() => {
        if (functions_1.worklets.notEmpty(selection1.value) &&
            functions_1.worklets.notEmpty(selection2.value)) {
            const from = Math.max(Math.min(selection1.value, selection2.value) -
                week * daysInWeek +
                0.5, 0);
            const to = Math.min(Math.max(selection1.value, selection2.value) -
                week * daysInWeek +
                0.5, daysInWeek);
            if (from < daysInWeek && to > 0)
                return {
                    height: size - 2 * paddingVertical,
                    width: (to - from) * size,
                    x: from * size,
                    y: week * size + paddingVertical
                };
        }
        return {
            height: 0,
            width: 0,
            x: 0,
            y: 0
        };
    }, [selection1, selection2, week]);
    const { colors } = (0, contexts_1.useThemeExtended)();
    return (<AnimatedRect animatedProps={animatedProps} fill={colors.calendar.selectionInterval}/>);
});
const { daysInWeek, paddingVertical, size } = core_1.consts.DateTimePicker.Calendar;
// eslint-disable-next-line misc/typescript/no-unsafe-object-assignment -- Ok
const AnimatedRect = react_native_reanimated_1.default.createAnimatedComponent(react_native_svg_1.Rect);
//# sourceMappingURL=SelectionRow.jsx.map