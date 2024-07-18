import type { CommonProps } from "react-misc";
import React from "react";
import { memo } from "react-misc";

export const ParentKeyboardHeightFactorProvider = memo(
  "ParentKeyboardHeightFactorProvider",
  ({ children, factor }: Props) => (
    <ParentKeyboardHeightFactorContext.Provider value={factor}>
      {children}
    </ParentKeyboardHeightFactorContext.Provider>
  )
);

/**
 * Consumes theme context.
 * @returns Theme context.
 */
export function useParentKeyboardHeightFactor(): number {
  return React.useContext(ParentKeyboardHeightFactorContext);
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly factor: number;
}

const ParentKeyboardHeightFactorContext = React.createContext(0);
