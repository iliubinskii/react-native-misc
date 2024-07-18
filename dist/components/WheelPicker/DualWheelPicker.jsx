"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const BaseWheelPicker_1 = tslib_1.__importDefault(require("./BaseWheelPicker"));
const Border_1 = tslib_1.__importDefault(require("./Border"));
const react_1 = tslib_1.__importDefault(require("react"));
const common_components_1 = require("../common-components");
const react_native_reanimated_1 = require("react-native-reanimated");
exports.default = (0, react_misc_1.memo)("DualWheelPicker", function DualWheelPicker({ color, onChange, slot1, slot2, tick }) {
    const slot1Disabled = (0, react_native_reanimated_1.useSharedValue)(false);
    const slot1Ref = react_1.default.useRef((0, typescript_misc_1.neverDemand)());
    const slot1Value = react_1.default.useRef(slot1.value);
    const slot2Disabled = (0, react_native_reanimated_1.useSharedValue)(false);
    const slot2Value = react_1.default.useRef(slot2.value);
    const save = react_1.default.useCallback(() => {
        if (slot1Value.current === slot1.value &&
            slot2Value.current === slot2.value) {
            // Skip
        }
        else
            onChange(slot1Value.current, slot2Value.current);
    }, [slot1.value, slot2.value, onChange]);
    const slot1ScrollEndHandler = react_1.default.useCallback((value) => {
        slot1Value.current = value;
        if (slot1Disabled.value) {
            // Skip
        }
        else {
            slot2Disabled.value = false;
            save();
        }
    }, [save, slot1Disabled, slot2Disabled]);
    const slot1ScrollStartHandler = react_1.default.useCallback(() => {
        if (slot1Disabled.value) {
            // Skip
        }
        else
            slot2Disabled.value = true;
    }, [slot1Disabled, slot2Disabled]);
    const slot2OnOverflow = react_1.default.useCallback((overflow) => {
        slot1Ref.current.overflow(overflow);
    }, []);
    const slot2ScrollEndHandler = react_1.default.useCallback((value) => {
        slot2Value.current = value;
        if (slot2Disabled.value) {
            // Skip
        }
        else {
            slot1Disabled.value = false;
            save();
        }
    }, [save, slot1Disabled, slot2Disabled]);
    const slot2ScrollStartHandler = react_1.default.useCallback(() => {
        if (slot2Disabled.value) {
            // Skip
        }
        else
            slot1Disabled.value = true;
    }, [slot1Disabled, slot2Disabled]);
    (0, react_misc_1.useRealEffect)(() => {
        slot1Value.current = slot1.value;
        slot2Value.current = slot2.value;
    }, [slot1.value, slot2.value]);
    return (<common_components_1.Row>
      <Border_1.default color={color}/>
      <BaseWheelPicker_1.default color={color} customRef={slot1Ref} disabled={slot1Disabled} largeSwipeSize={slot1.largeSwipeSize} largeSwipeStopInterval={slot1.largeSwipeStopInterval} onChange={typescript_misc_1.fn.noop} onScrollEnd={slot1ScrollEndHandler} onScrollStart={slot1ScrollStartHandler} options={slot1.options} smallSwipeSize={slot1.smallSwipeSize} smallSwipeStopInterval={slot1.smallSwipeStopInterval} tick={tick} value={slot1.value}/>
      <Border_1.default color={color}/>
      <BaseWheelPicker_1.default color={color} disabled={slot2Disabled} largeSwipeSize={slot2.largeSwipeSize} largeSwipeStopInterval={slot2.largeSwipeStopInterval} onChange={typescript_misc_1.fn.noop} onOverflow={slot2OnOverflow} onScrollEnd={slot2ScrollEndHandler} onScrollStart={slot2ScrollStartHandler} options={slot2.options} smallSwipeSize={slot2.smallSwipeSize} smallSwipeStopInterval={slot2.smallSwipeStopInterval} tick={tick} value={slot2.value}/>
      <Border_1.default color={color}/>
    </common_components_1.Row>);
});
//# sourceMappingURL=DualWheelPicker.jsx.map