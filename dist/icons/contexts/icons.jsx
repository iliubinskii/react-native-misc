"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconsProvider = void 0;
exports.useIcons = useIcons;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
exports.IconsProvider = (0, react_misc_1.memo)("IconsProvider", ({ children, icons }) => (<IconsContext.Provider value={icons}>{children}</IconsContext.Provider>));
/**
 * Consumes icons context.
 * @returns Icons context.
 */
function useIcons() {
    return react_1.default.useContext(IconsContext);
}
const IconsContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=icons.jsx.map