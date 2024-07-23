import type { empty as baseEmpty, types } from "typescript-misc";

export const worklets = {
  /**
   * Checks if value type is empty.
   * @param value - Value.
   * @returns _True_ if value type is empty, _false_ otherwise.
   */
  empty: (value: unknown): value is baseEmpty => {
    "worklet";

    return value === null || value === undefined;
  },
  /**
   * Executes callback.
   * @param callback - Callback.
   * @returns The result of callback execution.
   */
  evaluate: <T>(callback: types.fn.Sync<T>): T => {
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
  limit: (value: number, min: number, max: number): number => {
    "worklet";

    return Math.min(Math.max(value, min), max);
  },
  /**
   * Checks if value is not empty.
   * @param value - — Value.
   * @returns — True if value is not empty, false otherwise.
   */
  notEmpty: <T>(value: T): value is Exclude<T, baseEmpty> => {
    "worklet";

    return !(value === null || value === undefined);
  }
} as const;
