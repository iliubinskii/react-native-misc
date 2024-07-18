import { fn, neverDemand } from "typescript-misc";
import React from "react";
import { memo } from "react-misc";
export const MenuProvider = memo("MenuProvider", ({ children, onDismiss = fn.noop }) => {
    const context = React.useMemo(() => {
        return { onDismiss };
    }, [onDismiss]);
    return (<MenuContext.Provider value={context}>{children}</MenuContext.Provider>);
});
/**
 * Consumes menu context.
 * @returns Menu context.
 */
export function useMenu() {
    return React.useContext(MenuContext);
}
const MenuContext = React.createContext(neverDemand());
//# sourceMappingURL=menu.jsx.map