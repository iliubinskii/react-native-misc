import type { IconName, Icons } from "../icons-common";
import type { CommonProps } from "react-misc";
import React from "react";
import { memo } from "react-misc";
import { neverDemand } from "typescript-misc";

export const IconsProvider = memo(
  "IconsProvider",
  ({ children, icons }: Props) => (
    <IconsContext.Provider value={icons}>{children}</IconsContext.Provider>
  )
);

/**
 * Consumes icons context.
 * @returns Icons context.
 */
export function useIcons<I extends IconName = never>(): Icons<I> {
  return React.useContext(IconsContext);
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly icons: Icons;
}

const IconsContext = React.createContext(neverDemand<Icons>());
