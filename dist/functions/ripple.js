"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRippleColor = void 0;
const tslib_1 = require("tslib");
const color_1 = tslib_1.__importDefault(require("color"));
const core_1 = require("../core");
/**
 * Creates ripple color.
 *
 * @param textColor - Text color.
 * @returns Ripple color.
 */
// eslint-disable-next-line misc/only-export-name -- Ok
function getRippleColor(textColor) {
    return (0, color_1.default)(textColor).alpha(alpha).string();
}
exports.getRippleColor = getRippleColor;
const { alpha } = core_1.consts.functions.ripple;
//# sourceMappingURL=ripple.js.map