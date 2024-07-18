"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_svg_1 = require("react-native-svg");
const types_1 = require("../../../types");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../../contexts");
const functions_1 = require("../../../functions");
exports.default = (0, react_misc_1.memo)("Hand", ({ active, index, indexFrom, length: handLength, width1, width2 }) => {
    const { colors } = (0, contexts_1.useThemeExtended)();
    const circleProps = (0, react_native_reanimated_1.useAnimatedProps)(() => {
        if (active && functions_1.worklets.notEmpty(index.value)) {
            const angle = index.value * sector;
            return {
                cx: radius * Math.sin(angle),
                cy: -radius * Math.cos(angle),
                r: 0.5 * buttonSize
            };
        }
        return { cx: 0, cy: 0, r: 0 };
    }, [active, index]);
    const circleFromProps = (0, react_native_reanimated_1.useAnimatedProps)(() => {
        if (active && functions_1.worklets.notEmpty(indexFrom.value)) {
            const angle = indexFrom.value * sector;
            return {
                cx: radius * Math.sin(angle),
                cy: -radius * Math.cos(angle),
                r: 0.5 * buttonSize
            };
        }
        return { cx: 0, cy: 0, r: 0 };
    }, [active, indexFrom]);
    const handProps = (0, react_native_reanimated_1.useAnimatedProps)(() => {
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
    const rangeProps = (0, react_native_reanimated_1.useAnimatedProps)(() => {
        if (active &&
            functions_1.worklets.notEmpty(index.value) &&
            functions_1.worklets.notEmpty(indexFrom.value) &&
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
    return (<react_native_svg_1.Svg height={size} style={{ position: types_1.Position.absolute, zIndex: active ? 1 : 0 }} width={size}>
        <react_native_svg_1.G transform={`translate(${0.5 * size},${0.5 * size})`}>
          <AnimatedPath animatedProps={rangeProps} fill={types_1.Color.none} stroke={colors.calendar.selectionInterval}/>
          <AnimatedCircle animatedProps={circleProps} fill={colors.calendar.selection}/>
          <AnimatedCircle animatedProps={circleFromProps} fill={colors.calendar.selection}/>
          <AnimatedPath animatedProps={handProps} fill={active ? colors.secondLine : colors.fadeMore}/>
        </react_native_svg_1.G>
      </react_native_svg_1.Svg>);
});
const { buttonSize, size, smallNumber } = core_1.consts.DateTimePicker.Clock;
const radius = 0.5 * size - 0.5 * buttonSize;
const sector = (2 * Math.PI) / 12;
// eslint-disable-next-line misc/typescript/no-unsafe-object-assignment -- Postponed
const AnimatedCircle = react_native_reanimated_1.default.createAnimatedComponent(react_native_svg_1.Circle);
// eslint-disable-next-line misc/typescript/no-unsafe-object-assignment -- Postponed
const AnimatedPath = react_native_reanimated_1.default.createAnimatedComponent(react_native_svg_1.Path);
//# sourceMappingURL=Hand.jsx.map