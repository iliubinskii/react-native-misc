import * as React from "react";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { Circle } from "react-native-svg";
import type { SharedValue } from "react-native-reanimated";
import { consts } from "../../../core";
import { memo } from "react-misc";
import type { numberU } from "typescript-misc";
import { useThemeExtended } from "../../../contexts";
import { worklets } from "../../../functions";

export default memo("Circle", ({ selection }: Props) => {
  const animatedProps = useAnimatedProps((): React.ComponentProps<
    typeof Circle
  > => {
    if (worklets.notEmpty(selection.value)) {
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

  const { colors } = useThemeExtended();

  return (
    <AnimatedCircle
      animatedProps={animatedProps}
      fill={colors.calendar.selection}
    />
  );
});

/**
 * @internal
 */
export interface Props {
  readonly selection: SharedValue<numberU>;
}

const { daysInWeek, paddingVertical, size } = consts.DateTimePicker.Calendar;

// eslint-disable-next-line misc/typescript/no-unsafe-object-assignment -- Ok
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
