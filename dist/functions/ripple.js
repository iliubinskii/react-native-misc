"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRippleColor = getRippleColor;
const tslib_1 = require("tslib");
const color_1 = tslib_1.__importDefault(require("color"));
const core_1 = require("../core");
/**
 * Creates ripple color.
 * @param textColor - Text color.
 * @returns Ripple color.
 */
function getRippleColor(textColor) {
    return (0, color_1.default)(textColor).alpha(alpha).string();
}
const { alpha } = core_1.consts.functions.ripple;
//# sourceMappingURL=ripple.js.map