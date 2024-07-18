"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const core_1 = require("../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("Sheet", ({ style, ...props }) => (<react_native_1.View style={[{ padding }, style]} {...props}/>));
const { padding } = core_1.consts.Sheet;
//# sourceMappingURL=Sheet.jsx.map