"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_components_1 = require("./common-components");
const types_1 = require("../types");
const react_native_paper_1 = require("react-native-paper");
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("CheckboxRow", ({ label, ...props }) => (<common_components_1.Row style={{ alignItems: types_1.AlignItems.center, gap }}>
    <react_native_paper_1.Checkbox {...props}/>
    <common_components_1.Text style={{ flex: 1 }}>{label}</common_components_1.Text>
  </common_components_1.Row>));
const { gap } = core_1.consts.CheckboxRow;
//# sourceMappingURL=CheckboxRow.jsx.map