import * as React from "react";
import { memo } from "react-misc";
import { neverDemand } from "typescript-misc";
export const AppInfoProvider = memo("AppInfoProvider", ({ children, translucent }) => {
    const context = React.useMemo(() => ({ translucent }), [translucent]);
    return (<AppInfoContext.Provider value={context}>
        {children}
      </AppInfoContext.Provider>);
});
/**
 * Consumes app info context.
 *
 * @returns App info context.
 */
export function useAppInfo() {
    const { translucent } = React.useContext(AppInfoContext);
    return React.useMemo(() => ({ translucent }), [translucent]);
}
const AppInfoContext = React.createContext(neverDemand());
//# sourceMappingURL=app-info.jsx.map