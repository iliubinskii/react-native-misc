import { runOnJS, withSpring } from "react-native-reanimated";
import type { NativeAnimation } from "./react-native-reanimated-common";
import { consts } from "../../core";

export const springAnimation: NativeAnimation = (
  animated,
  toValue,
  velocity,
  callback
) => {
  // eslint-disable-next-line no-warning-comments -- Wait for react-native-reanimated update
  // fixme
  if (toValue === animated.value)
    animated.value = toValue - Math.sign(velocity) * smallNumber;

  animated.value = withSpring(
    toValue,
    {
      damping,
      mass,
      stiffness,
      velocity
    },
    finished => {
      if (callback) runOnJS(callback)(finished);
    }
  );
};

const { damping, mass, smallNumber, stiffness } = consts.springAnimation;
