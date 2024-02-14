"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("./common-components");
const types_1 = require("../types");
const core_1 = require("../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("SwitchRow", ({ label, ...props }) => (<common_components_1.Row style={{ alignItems: types_1.AlignItems.center, gap }}>
    <common_components_1.Switch {...props}/>
    <common_components_1.Text style={{ flex: 1 }}>{label}</common_components_1.Text>
  </common_components_1.Row>));
const { gap } = core_1.consts.SwitchRow;
//# sourceMappingURL=SwitchRow.jsx.map