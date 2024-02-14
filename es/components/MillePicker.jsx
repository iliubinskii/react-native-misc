import * as React from "react";
import { DualWheelPicker } from "./WheelPicker";
import { a } from "typescript-misc";
import { consts } from "../core";
import { memo } from "react-misc";
export default memo("MillePicker", ({ color, onChange, value }) => {
    const save = React.useCallback((value1, value2) => {
        onChange(value1 * 1000 + value2);
    }, [onChange]);
    const slot1Prop = React.useMemo(() => ({
        largeSwipeSize: slot1.largeSwipeSize,
        largeSwipeStopInterval: slot1.largeSwipeStopInterval,
        options: a.fromRange(...slot1.range).map((optionValue) => ({
            label: optionValue.toString().padStart(2, " "),
            value: optionValue
        })),
        smallSwipeSize: slot1.smallSwipeSize,
        smallSwipeStopInterval: slot1.smallSwipeStopInterval,
        value: Math.floor(value / 1000)
    }), [value]);
    const slot2Prop = React.useMemo(() => ({
        largeSwipeSize: slot2.largeSwipeSize,
        largeSwipeStopInterval: slot2.largeSwipeStopInterval,
        options: a.fromRange(...slot2.range, slot2.step).map((optionValue) => ({
            label: optionValue.toString().padStart(3, "0"),
            value: optionValue
        })),
        smallSwipeSize: slot2.smallSwipeSize,
        smallSwipeStopInterval: slot2.smallSwipeStopInterval,
        value: value % 1000
    }), [value]);
    return (<DualWheelPicker color={color} onChange={save} slot1={slot1Prop} slot2={slot2Prop}/>);
});
const { slot1, slot2 } = consts.MillePicker;
//# sourceMappingURL=MillePicker.jsx.map