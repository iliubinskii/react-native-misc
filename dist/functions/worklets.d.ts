import type { empty as baseEmpty, types } from "typescript-misc";
/**
 * Checks if value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export declare function empty(value: unknown): value is baseEmpty;
/**
 * Executes callback.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export declare function evaluate<T>(callback: types.fn.Sync<T>): T;
/**
 * Executes promise or async function.
 *
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export declare function evaluate<T>(mixed: types.fn.AsyncPromise<T>): Promise<T>;
/**
 * Limits value to be within [min, max] range.
 *
 * @param value - Value.
 * @param min - Min.
 * @param max - Max.
 * @returns Limited value.
 */
export declare function limit(value: number, min: number, max: number): number;
/**
 * Checks if value is not empty.
 *
 * @param value - — Value.
 * @returns — True if value is not empty, false otherwise.
 */
export declare function notEmpty<T>(value: T): value is Exclude<T, baseEmpty>;
//# sourceMappingURL=worklets.d.ts.map