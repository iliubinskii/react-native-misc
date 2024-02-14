import * as React from "react";
import { Circle, G, Path, Svg } from "react-native-svg";
import { Color, Position } from "../../../types";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { consts } from "../../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../../contexts";
import { worklets } from "../../../functions";
export default memo("Hand", ({ active, index, indexFrom, length: handLength, width1, width2 }) => {
    const { colors } = useThemeExtended();
    const circleProps = useAnimatedProps(() => {
        if (active && worklets.notEmpty(index.value)) {
            const angle = index.value * sector;
            return {
                cx: radius * Math.sin(angle),
                cy: -radius * Math.cos(angle),
                r: 0.5 * buttonSize
            };
        }
        return { cx: 0, cy: 0, r: 0 };
    }, [active, index]);
    const circleFromProps = useAnimatedProps(() => {
        if (active && worklets.notEmpty(indexFrom.value)) {
            const angle = indexFrom.value * sector;
            return {
                cx: radius * Math.sin(angle),
                cy: -radius * Math.cos(angle),
                r: 0.5 * buttonSize
            };
        }
        return { cx: 0, cy: 0, r: 0 };
    }, [active, indexFrom]);
    const handProps = useAnimatedProps(() => {
        const angle = index.value * sector;
        const l1 = 0;
        const l2 = handLength;
        const w1 = 0.5 * width1;
        const w2 = 0.5 * width2;
        return {
            d: `
          M ${w1} -${l1}
          L ${w2} -${l2}
          A ${w2} ${w2} 0 0 0 -${w2} -${l2}
          L -${w1} -${l1}
          A ${w1} ${w1} 0 0 0 ${w1} -${l1}
        `,
            transform: [{ rotate: `${angle}rad` }]
        };
    }, [handLength, index, width1, width2]);
    const rangeProps = useAnimatedProps(() => {
        if (active &&
            worklets.notEmpty(index.value) &&
            worklets.notEmpty(indexFrom.value) &&
            index.value !== indexFrom.value) {
            const index1 = indexFrom.value;
            const index2 = index.value > indexFrom.value ? index.value : index.value + 12;
            const angle1 = index1 * sector;
            const angle2 = index2 * sector;
            const x1 = radius * Math.sin(angle1);
            const y1 = -radius * Math.cos(angle1);
            const x2 = radius * Math.sin(angle2);
            const y2 = -radius * Math.cos(angle2);
            const largeArc = angle2 - angle1 > Math.PI + smallNumber ? 1 : 0;
            return {
                d: `
            M ${x1} ${y1}
            A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
          `,
                strokeWidth: buttonSize
            };
        }
        return { d: "", strokeWidth: 0 };
    }, [active, index, indexFrom]);
    return (<Svg height={size} style={{ position: Position.absolute, zIndex: active ? 1 : 0 }} width={size}>
        <G transform={`translate(${0.5 * size},${0.5 * size})`}>
          <AnimatedPath animatedProps={rangeProps} fill={Color.none} stroke={colors.calendar.selectionInterval}/>
          <AnimatedCircle animatedProps={circleProps} fill={colors.calendar.selection}/>
          <AnimatedCircle animatedProps={circleFromProps} fill={colors.calendar.selection}/>
          <AnimatedPath animatedProps={handProps} fill={active ? colors.secondLine : colors.fadeMore}/>
        </G>
      </Svg>);
});
const { buttonSize, size, smallNumber } = consts.DateTimePicker.Clock;
const radius = 0.5 * size - 0.5 * buttonSize;
const sector = (2 * Math.PI) / 12;
// eslint-disable-next-line misc/typescript/no-unsafe-object-assignment -- Postponed
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
// eslint-disable-next-line misc/typescript/no-unsafe-object-assignment -- Postponed
const AnimatedPath = Animated.createAnimatedComponent(Path);
//# sourceMappingURL=Hand.jsx.map