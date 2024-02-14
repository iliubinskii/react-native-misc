import color from "color";
import { consts } from "../core";

/**
 * Creates ripple color.
 *
 * @param textColor - Text color.
 * @returns Ripple color.
 */
// eslint-disable-next-line misc/only-export-name -- Ok
export function getRippleColor(textColor: string): string {
  return color(textColor).alpha(alpha).string();
}

const { alpha } = consts.functions.ripple;
