import type { empty as baseEmpty, types } from "typescript-misc";

/**
 * Checks if value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export function empty(value: unknown): value is baseEmpty {
  "worklet";

  return value === null || value === undefined;
}

/**
 * Executes callback.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export function evaluate<T>(callback: types.fn.Sync<T>): T;

/**
 * Executes promise or async function.
 *
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export async function evaluate<T>(mixed: types.fn.AsyncPromise<T>): Promise<T>;

export function evaluate<T>(
  mixed: types.fn.AsyncPromiseSync<T>
): Promise<T> | T {
  "worklet";

  return typeof mixed === "function" ? mixed() : mixed;
}

/**
 * Limits value to be within [min, max] range.
 *
 * @param value - Value.
 * @param min - Min.
 * @param max - Max.
 * @returns Limited value.
 */
export function limit(value: number, min: number, max: number): number {
  "worklet";

  return Math.min(Math.max(value, min), max);
}

/**
 * Checks if value is not empty.
 *
 * @param value - — Value.
 * @returns — True if value is not empty, false otherwise.
 */
export function notEmpty<T>(value: T): value is Exclude<T, baseEmpty> {
  "worklet";

  return !(value === null || value === undefined);
}
