/**
 * Checks if value type is empty.
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export function empty(value) {
    "worklet";
    return value === null || value === undefined;
}
/**
 * Executes promise or async function.
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export function evaluate(mixed) {
    "worklet";
    return typeof mixed === "function" ? mixed() : mixed;
}
/**
 * Limits value to be within [min, max] range.
 * @param value - Value.
 * @param min - Min.
 * @param max - Max.
 * @returns Limited value.
 */
export function limit(value, min, max) {
    "worklet";
    return Math.min(Math.max(value, min), max);
}
/**
 * Checks if value is not empty.
 * @param value - — Value.
 * @returns — True if value is not empty, false otherwise.
 */
export function notEmpty(value) {
    "worklet";
    return !(value === null || value === undefined);
}
//# sourceMappingURL=worklets.js.map