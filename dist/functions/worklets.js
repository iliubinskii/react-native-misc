"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notEmpty = exports.limit = exports.evaluate = exports.empty = void 0;
/**
 * Checks if value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
function empty(value) {
    "worklet";
    return value === null || value === undefined;
}
exports.empty = empty;
function evaluate(mixed) {
    "worklet";
    return typeof mixed === "function" ? mixed() : mixed;
}
exports.evaluate = evaluate;
/**
 * Limits value to be within [min, max] range.
 *
 * @param value - Value.
 * @param min - Min.
 * @param max - Max.
 * @returns Limited value.
 */
function limit(value, min, max) {
    "worklet";
    return Math.min(Math.max(value, min), max);
}
exports.limit = limit;
/**
 * Checks if value is not empty.
 *
 * @param value - — Value.
 * @returns — True if value is not empty, false otherwise.
 */
function notEmpty(value) {
    "worklet";
    return !(value === null || value === undefined);
}
exports.notEmpty = notEmpty;
//# sourceMappingURL=worklets.js.map