import type { CommonProps } from "react-misc";
import React from "react";
import { memo } from "react-misc";
import { neverDemand } from "typescript-misc";

export const AppInfoProvider = memo(
  "AppInfoProvider",
  ({ children, translucent }: Props) => {
    const context = React.useMemo((): Context => {
      return { translucent };
    }, [translucent]);

    return (
      <AppInfoContext.Provider value={context}>
        {children}
      </AppInfoContext.Provider>
    );
  }
);

/**
 * Consumes app info context.
 * @returns App info context.
 */
export function useAppInfo(): Context {
  const { translucent } = React.useContext(AppInfoContext);

  return React.useMemo((): Context => {
    return { translucent };
  }, [translucent]);
}

/**
 * @internal
 */
export interface Context {
  readonly translucent: boolean;
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children, Context {}

const AppInfoContext = React.createContext(neverDemand<Context>());
