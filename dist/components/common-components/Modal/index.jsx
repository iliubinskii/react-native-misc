"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Modal_1 = tslib_1.__importDefault(require("./Modal"));
const react_1 = tslib_1.__importDefault(require("react"));
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("Modal", ({ visible, ...props }) => visible ? <Modal_1.default {...props}/> : undefined);
//# sourceMappingURL=index.jsx.map