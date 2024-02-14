"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useParentKeyboardHeightFactor = exports.ParentKeyboardHeightFactorProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_misc_1 = require("react-misc");
exports.ParentKeyboardHeightFactorProvider = (0, react_misc_1.memo)("ParentKeyboardHeightFactorProvider", ({ children, factor }) => (<ParentKeyboardHeightFactorContext.Provider value={factor}>
      {children}
    </ParentKeyboardHeightFactorContext.Provider>));
/**
 * Consumes theme context.
 *
 * @returns Theme context.
 */
function useParentKeyboardHeightFactor() {
    return React.useContext(ParentKeyboardHeightFactorContext);
}
exports.useParentKeyboardHeightFactor = useParentKeyboardHeightFactor;
const ParentKeyboardHeightFactorContext = React.createContext(0);
//# sourceMappingURL=parent-keyboard-height-factor.jsx.map