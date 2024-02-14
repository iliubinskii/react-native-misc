import * as React from "react";
import { memo } from "react-misc";
import { neverDemand } from "typescript-misc";
export const IconsProvider = memo("IconsProvider", ({ children, icons }) => (<IconsContext.Provider value={icons}>{children}</IconsContext.Provider>));
/**
 * Consumes icons context.
 *
 * @returns Icons context.
 */
export function useIcons() {
    return React.useContext(IconsContext);
}
const IconsContext = React.createContext(neverDemand());
//# sourceMappingURL=icons.jsx.map