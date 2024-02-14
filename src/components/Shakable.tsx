import * as React from "react";
import { memo, useUpdater } from "react-misc";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import type { CommonProps } from "react-misc";
import type { ViewStyle } from "react-native";
import { consts } from "../core";

export default memo("Shakable", ({ children, customRef }: Props) => {
  const pan = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    (): ViewStyle => ({
      transform: [
        {
          translateX:
            translateX * Math.sin(2 * Math.PI * oscillations * pan.value)
        },
        { scale: 1 + scale * Math.sin(Math.PI * pan.value) ** 2 }
      ]
    }),
    [pan]
  );

  useUpdater(() => {
    if (customRef)
      customRef.current = {
        shake: () => {
          pan.value = withTiming(pan.value + 1, { duration });
        }
      };
  }, [customRef, pan]);

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
});

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly customRef?: React.MutableRefObject<Ref> | undefined;
}

export interface Ref {
  /**
   * Starts shake animation.
   */
  readonly shake: () => void;
}

const { duration, oscillations, scale, translateX } = consts.Shakable;
