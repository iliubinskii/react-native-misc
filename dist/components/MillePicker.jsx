"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const WheelPicker_1 = require("./WheelPicker");
const react_1 = tslib_1.__importDefault(require("react"));
const typescript_misc_1 = require("typescript-misc");
const core_1 = require("../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("MillePicker", ({ color, onChange, tick, value }) => {
    const save = react_1.default.useCallback((value1, value2) => {
        onChange(value1 * 1000 + value2);
    }, [onChange]);
    const slot1Prop = react_1.default.useMemo(() => {
        return {
            largeSwipeSize: slot1.largeSwipeSize,
            largeSwipeStopInterval: slot1.largeSwipeStopInterval,
            options: typescript_misc_1.a
                .fromRange(...slot1.range)
                .map((optionValue) => {
                return {
                    label: optionValue.toString().padStart(slot1.padding, " "),
                    value: optionValue
                };
            }),
            smallSwipeSize: slot1.smallSwipeSize,
            smallSwipeStopInterval: slot1.smallSwipeStopInterval,
            value: Math.floor(value / 1000)
        };
    }, [value]);
    const slot2Prop = react_1.default.useMemo(() => {
        return {
            largeSwipeSize: slot2.largeSwipeSize,
            largeSwipeStopInterval: slot2.largeSwipeStopInterval,
            options: typescript_misc_1.a
                .fromRange(...slot2.range, slot2.step)
                .map((optionValue) => {
                return {
                    label: optionValue.toString().padStart(slot2.padding, "0"),
                    value: optionValue
                };
            }),
            smallSwipeSize: slot2.smallSwipeSize,
            smallSwipeStopInterval: slot2.smallSwipeStopInterval,
            value: value % 1000
        };
    }, [value]);
    return (<WheelPicker_1.DualWheelPicker color={color} onChange={save} slot1={slot1Prop} slot2={slot2Prop} tick={tick}/>);
});
const { slot1, slot2 } = core_1.consts.MillePicker;
//# sourceMappingURL=MillePicker.jsx.map