"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentKeyboardHeightFactorProvider = void 0;
exports.useParentKeyboardHeightFactor = useParentKeyboardHeightFactor;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_misc_1 = require("react-misc");
exports.ParentKeyboardHeightFactorProvider = (0, react_misc_1.memo)("ParentKeyboardHeightFactorProvider", ({ children, factor }) => (<ParentKeyboardHeightFactorContext.Provider value={factor}>
      {children}
    </ParentKeyboardHeightFactorContext.Provider>));
/**
 * Consumes theme context.
 * @returns Theme context.
 */
function useParentKeyboardHeightFactor() {
    return react_1.default.useContext(ParentKeyboardHeightFactorContext);
}
const ParentKeyboardHeightFactorContext = react_1.default.createContext(0);
//# sourceMappingURL=parent-keyboard-height-factor.jsx.map