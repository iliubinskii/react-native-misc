import type { CommonProps } from "react-misc";
import type { MD3ThemeExtended } from "../types";
import React from "react";
import { memo } from "react-misc";
import { neverDemand } from "typescript-misc";

export const ThemeExtendedProvider = memo(
  "ThemeExtendedProvider",
  ({ children, theme }: Props) => (
    <ThemeExtendedContext.Provider value={theme}>
      {children}
    </ThemeExtendedContext.Provider>
  )
);

/**
 * Consumes theme context.
 * @returns Theme context.
 */
export function useThemeExtended(): MD3ThemeExtended {
  return React.useContext(ThemeExtendedContext);
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly theme: MD3ThemeExtended;
}

const ThemeExtendedContext =
  React.createContext(neverDemand<MD3ThemeExtended>());
