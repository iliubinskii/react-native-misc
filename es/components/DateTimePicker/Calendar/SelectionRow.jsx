import * as React from "react";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { Rect } from "react-native-svg";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../../contexts";
import { worklets } from "../../../functions";
export default memo("SelectionRow", ({ selection1, selection2, week }) => {
    const animatedProps = useAnimatedProps(() => {
        if (worklets.notEmpty(selection1.value) &&
            worklets.notEmpty(selection2.value)) {
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
    const { colors } = useThemeExtended();
    return (<AnimatedRect animatedProps={animatedProps} fill={colors.calendar.selectionInterval}/>);
});
const { daysInWeek, paddingVertical, size } = consts.DateTimePicker.Calendar;
// eslint-disable-next-line misc/typescript/no-unsafe-object-assignment -- Ok
const AnimatedRect = Animated.createAnimatedComponent(Rect);
//# sourceMappingURL=SelectionRow.jsx.map