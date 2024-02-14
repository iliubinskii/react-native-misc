import * as React from "react";
import { fn, neverDemand } from "typescript-misc";
import type { CommonProps } from "react-misc";
import { memo } from "react-misc";

export const MenuProvider = memo(
  "MenuProvider",
  ({ children, onDismiss = fn.noop }: Props) => {
    const context = React.useMemo((): Context => ({ onDismiss }), [onDismiss]);

    return (
      <MenuContext.Provider value={context}>{children}</MenuContext.Provider>
    );
  }
);

/**
 * Consumes menu context.
 *
 * @returns Menu context.
 */
export function useMenu(): Context {
  return React.useContext(MenuContext);
}

/**
 * @internal
 */
export interface Context {
  /**
   * Dismisses menu.
   */
  readonly onDismiss: () => void;
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  /**
   * Dismisses menu.
   */
  readonly onDismiss?: (() => void) | undefined;
}

const MenuContext = React.createContext(neverDemand<Context>());
