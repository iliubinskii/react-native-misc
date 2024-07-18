"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseWheelPicker_1 = tslib_1.__importDefault(require("./BaseWheelPicker"));
const Border_1 = tslib_1.__importDefault(require("./Border"));
const react_1 = tslib_1.__importDefault(require("react"));
const common_components_1 = require("../common-components");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("WheelPicker", function WheelPicker(props) {
    return (<common_components_1.Row>
      <Border_1.default color={props.color}/>
      <BaseWheelPicker_1.default {...props}/>
      <Border_1.default color={props.color}/>
    </common_components_1.Row>);
});
//# sourceMappingURL=WheelPicker.jsx.map