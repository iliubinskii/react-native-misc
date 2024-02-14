"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const types_1 = require("../../types");
const react_native_1 = require("react-native");
const core_1 = require("../../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("BalloonMeter", ({ children, onLayout, width }) => (<react_native_1.View onLayout={onLayout} pointerEvents={types_1.PointerEvents.none} style={{ opacity: 0, padding, width }}>
    {children}
  </react_native_1.View>));
const { padding } = core_1.consts.Balloon;
//# sourceMappingURL=BalloonMeter.jsx.map