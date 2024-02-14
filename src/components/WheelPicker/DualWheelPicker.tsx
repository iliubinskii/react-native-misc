import * as React from "react";
import type { NumStr, stringU } from "typescript-misc";
import type {
  Options as WheelPickerOptions,
  Ref as WheelPickerRef
} from "./BaseWheelPicker";
import { fn, neverDemand } from "typescript-misc";
import { memo, useRealEffect } from "react-misc";
import BaseWheelPicker from "./BaseWheelPicker";
import Border from "./Border";
import { Row } from "../common-components";
import { useSharedValue } from "react-native-reanimated";

export default memo(
  "DualWheelPicker",
  // eslint-disable-next-line prefer-arrow-callback -- Ok
  function <A extends NumStr, B extends NumStr>({
    color,
    onChange,
    slot1,
    slot2
  }: Props<A, B>) {
    const slot1Disabled = useSharedValue(false);

    const slot1Ref = React.useRef(neverDemand<WheelPickerRef>());

    const slot1Value = React.useRef(slot1.value);

    const slot2Disabled = useSharedValue(false);

    const slot2Value = React.useRef(slot2.value);

    const save = React.useCallback(() => {
      if (
        slot1Value.current === slot1.value &&
        slot2Value.current === slot2.value
      ) {
        // Skip
      } else onChange(slot1Value.current, slot2Value.current);
    }, [slot1.value, slot2.value, onChange]);

    const slot1ScrollEndHandler = React.useCallback(
      (value: A) => {
        slot1Value.current = value;

        if (slot1Disabled.value) {
          // Skip
        } else {
          slot2Disabled.value = false;
          save();
        }
      },
      [save, slot1Disabled, slot2Disabled]
    );

    const slot1ScrollStartHandler = React.useCallback(() => {
      if (slot1Disabled.value) {
        // Skip
      } else slot2Disabled.value = true;
    }, [slot1Disabled, slot2Disabled]);

    const slot2OnOverflow = React.useCallback((overflow: -1 | 1) => {
      slot1Ref.current.overflow(overflow);
    }, []);

    const slot2ScrollEndHandler = React.useCallback(
      (value: B) => {
        slot2Value.current = value;

        if (slot2Disabled.value) {
          // Skip
        } else {
          slot1Disabled.value = false;
          save();
        }
      },
      [save, slot1Disabled, slot2Disabled]
    );

    const slot2ScrollStartHandler = React.useCallback(() => {
      if (slot2Disabled.value) {
        // Skip
      } else slot1Disabled.value = true;
    }, [slot1Disabled, slot2Disabled]);

    useRealEffect(() => {
      slot1Value.current = slot1.value;
      slot2Value.current = slot2.value;
    }, [slot1.value, slot2.value]);

    return (
      <Row>
        <Border color={color} />
        <BaseWheelPicker
          color={color}
          customRef={slot1Ref}
          disabled={slot1Disabled}
          largeSwipeSize={slot1.largeSwipeSize}
          largeSwipeStopInterval={slot1.largeSwipeStopInterval}
          onChange={fn.noop}
          onScrollEnd={slot1ScrollEndHandler}
          onScrollStart={slot1ScrollStartHandler}
          options={slot1.options}
          smallSwipeSize={slot1.smallSwipeSize}
          smallSwipeStopInterval={slot1.smallSwipeStopInterval}
          value={slot1.value}
        />
        <Border color={color} />
        <BaseWheelPicker
          color={color}
          disabled={slot2Disabled}
          largeSwipeSize={slot2.largeSwipeSize}
          largeSwipeStopInterval={slot2.largeSwipeStopInterval}
          onChange={fn.noop}
          onOverflow={slot2OnOverflow}
          onScrollEnd={slot2ScrollEndHandler}
          onScrollStart={slot2ScrollStartHandler}
          options={slot2.options}
          smallSwipeSize={slot2.smallSwipeSize}
          smallSwipeStopInterval={slot2.smallSwipeStopInterval}
          value={slot2.value}
        />
        <Border color={color} />
      </Row>
    );
  }
);

/**
 * @internal
 */
export interface Props<A extends NumStr, B extends NumStr> {
  readonly color?: stringU;
  /**
   * Handles values change.
   *
   * @param value1 - First value.
   * @param value2 - Second value.
   */
  readonly onChange: (value1: A, value2: B) => void;
  readonly slot1: Slot<A>;
  readonly slot2: Slot<B>;
}

export interface Slot<T extends NumStr> {
  readonly largeSwipeSize: number;
  readonly largeSwipeStopInterval: number;
  readonly options: WheelPickerOptions<T>;
  readonly smallSwipeSize: number;
  readonly smallSwipeStopInterval: number;
  readonly value: T;
}
