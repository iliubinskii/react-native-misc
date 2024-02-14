"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const BaseWheelPicker_1 = tslib_1.__importDefault(require("./BaseWheelPicker"));
const Border_1 = tslib_1.__importDefault(require("./Border"));
const common_components_1 = require("../common-components");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("WheelPicker", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function (props) {
    return (<common_components_1.Row>
        <Border_1.default color={props.color}/>
        <BaseWheelPicker_1.default {...props}/>
        <Border_1.default color={props.color}/>
      </common_components_1.Row>);
});
//# sourceMappingURL=WheelPicker.jsx.map