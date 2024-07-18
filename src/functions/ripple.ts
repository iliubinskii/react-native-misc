import color from "color";
import { consts } from "../core";

/**
 * Creates ripple color.
 * @param textColor - Text color.
 * @returns Ripple color.
 */
export function getRippleColor(textColor: string): string {
  return color(textColor).alpha(alpha).string();
}

const { alpha } = consts.functions.ripple;
