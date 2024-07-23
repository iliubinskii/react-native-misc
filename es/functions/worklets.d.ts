import type { empty as baseEmpty, types } from "typescript-misc";
export declare const worklets: {
    /**
     * Checks if value type is empty.
     * @param value - Value.
     * @returns _True_ if value type is empty, _false_ otherwise.
     */
    readonly empty: (value: unknown) => value is baseEmpty;
    /**
     * Executes callback.
     * @param callback - Callback.
     * @returns The result of callback execution.
     */
    readonly evaluate: <T>(callback: types.fn.Sync<T>) => T;
    /**
     * Limits value to be within [min, max] range.
     * @param value - Value.
     * @param min - Min.
     * @param max - Max.
     * @returns Limited value.
     */
    readonly limit: (value: number, min: number, max: number) => number;
    /**
     * Checks if value is not empty.
     * @param value - — Value.
     * @returns — True if value is not empty, false otherwise.
     */
    readonly notEmpty: <T>(value: T) => value is Exclude<T, baseEmpty>;
};
//# sourceMappingURL=worklets.d.ts.map