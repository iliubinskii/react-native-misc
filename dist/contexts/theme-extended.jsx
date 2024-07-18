"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeExtendedProvider = void 0;
exports.useThemeExtended = useThemeExtended;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
exports.ThemeExtendedProvider = (0, react_misc_1.memo)("ThemeExtendedProvider", ({ children, theme }) => (<ThemeExtendedContext.Provider value={theme}>
      {children}
    </ThemeExtendedContext.Provider>));
/**
 * Consumes theme context.
 * @returns Theme context.
 */
function useThemeExtended() {
    return react_1.default.useContext(ThemeExtendedContext);
}
const ThemeExtendedContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=theme-extended.jsx.map