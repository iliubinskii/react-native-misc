import { DualWheelPicker } from "./WheelPicker";
import React from "react";
import { a } from "typescript-misc";
import { consts } from "../core";
import { memo } from "react-misc";
export default memo("TimePicker", ({ color, onChange, tick, time }) => {
    const save = React.useCallback((hour, minute) => {
        onChange(hour * 60 + minute);
    }, [onChange]);
    const slot1Prop = React.useMemo(() => {
        return {
            largeSwipeSize: slot1.largeSwipeSize,
            largeSwipeStopInterval: slot1.largeSwipeStopInterval,
            options: a
                .fromRange(...slot1.range)
                .map((optionValue) => {
                return {
                    label: optionValue.toString().padStart(slot1.padding, "0"),
                    value: optionValue
                };
            }),
            smallSwipeSize: slot1.smallSwipeSize,
            smallSwipeStopInterval: slot1.smallSwipeStopInterval,
            value: Math.floor(time / 60)
        };
    }, [time]);
    const slot2Prop = React.useMemo(() => {
        return {
            largeSwipeSize: slot2.largeSwipeSize,
            largeSwipeStopInterval: slot2.largeSwipeStopInterval,
            options: a
                .fromRange(...slot2.range)
                .map((optionValue) => {
                return {
                    label: optionValue.toString().padStart(slot2.padding, "0"),
                    value: optionValue
                };
            }),
            smallSwipeSize: slot2.smallSwipeSize,
            smallSwipeStopInterval: slot2.smallSwipeStopInterval,
            value: time % 60
        };
    }, [time]);
    return (<DualWheelPicker color={color} onChange={save} slot1={slot1Prop} slot2={slot2Prop} tick={tick}/>);
});
const { slot1, slot2 } = consts.TimePicker;
//# sourceMappingURL=TimePicker.jsx.map