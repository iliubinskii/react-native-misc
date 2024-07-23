"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.worklets = void 0;
exports.worklets = {
    /**
     * Checks if value type is empty.
     * @param value - Value.
     * @returns _True_ if value type is empty, _false_ otherwise.
     */
    empty: (value) => {
        "worklet";
        return value === null || value === undefined;
    },
    /**
     * Executes callback.
     * @param callback - Callback.
     * @returns The result of callback execution.
     */
    evaluate: (callback) => {
        "worklet";
        return callback();
    },
    /**
     * Limits value to be within [min, max] range.
     * @param value - Value.
     * @param min - Min.
     * @param max - Max.
     * @returns Limited value.
     */
    limit: (value, min, max) => {
        "worklet";
        return Math.min(Math.max(value, min), max);
    },
    /**
     * Checks if value is not empty.
     * @param value - — Value.
     * @returns — True if value is not empty, false otherwise.
     */
    notEmpty: (value) => {
        "worklet";
        return !(value === null || value === undefined);
    }
};
//# sourceMappingURL=worklets.js.map