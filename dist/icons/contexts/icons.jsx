"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIcons = exports.IconsProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
exports.IconsProvider = (0, react_misc_1.memo)("IconsProvider", ({ children, icons }) => (<IconsContext.Provider value={icons}>{children}</IconsContext.Provider>));
/**
 * Consumes icons context.
 *
 * @returns Icons context.
 */
function useIcons() {
    return React.useContext(IconsContext);
}
exports.useIcons = useIcons;
const IconsContext = React.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=icons.jsx.map