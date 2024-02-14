import * as React from "react";
import { memo } from "react-misc";
import { neverDemand } from "typescript-misc";
export const ThemeExtendedProvider = memo("ThemeExtendedProvider", ({ children, theme }) => (<ThemeExtendedContext.Provider value={theme}>
      {children}
    </ThemeExtendedContext.Provider>));
/**
 * Consumes theme context.
 *
 * @returns Theme context.
 */
export function useThemeExtended() {
    return React.useContext(ThemeExtendedContext);
}
const ThemeExtendedContext = React.createContext(neverDemand());
//# sourceMappingURL=theme-extended.jsx.map