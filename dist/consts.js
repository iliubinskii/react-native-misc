"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textAlignBiDir = exports.statusBarHeight = exports.rtlSign = exports.isRtl = void 0;
const react_native_1 = require("react-native");
const types_1 = require("./types");
const react_native_status_bar_height_1 = require("react-native-status-bar-height");
exports.isRtl = react_native_1.I18nManager.isRTL;
exports.rtlSign = react_native_1.I18nManager.isRTL ? -1 : 1;
exports.statusBarHeight = (0, react_native_status_bar_height_1.getStatusBarHeight)();
exports.textAlignBiDir = react_native_1.I18nManager.isRTL
    ? types_1.TextAlign.right
    : types_1.TextAlign.left;
//# sourceMappingURL=consts.js.map