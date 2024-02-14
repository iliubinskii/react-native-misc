import * as React from "react";
import { memo } from "react-misc";
export const ParentKeyboardHeightFactorProvider = memo("ParentKeyboardHeightFactorProvider", ({ children, factor }) => (<ParentKeyboardHeightFactorContext.Provider value={factor}>
      {children}
    </ParentKeyboardHeightFactorContext.Provider>));
/**
 * Consumes theme context.
 *
 * @returns Theme context.
 */
export function useParentKeyboardHeightFactor() {
    return React.useContext(ParentKeyboardHeightFactorContext);
}
const ParentKeyboardHeightFactorContext = React.createContext(0);
//# sourceMappingURL=parent-keyboard-height-factor.jsx.map