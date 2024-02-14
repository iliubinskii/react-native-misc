"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeExtended = exports.ThemeExtendedProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
exports.ThemeExtendedProvider = (0, react_misc_1.memo)("ThemeExtendedProvider", ({ children, theme }) => (<ThemeExtendedContext.Provider value={theme}>
      {children}
    </ThemeExtendedContext.Provider>));
/**
 * Consumes theme context.
 *
 * @returns Theme context.
 */
function useThemeExtended() {
    return React.useContext(ThemeExtendedContext);
}
exports.useThemeExtended = useThemeExtended;
const ThemeExtendedContext = React.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=theme-extended.jsx.map