"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMenu = exports.MenuProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
exports.MenuProvider = (0, react_misc_1.memo)("MenuProvider", ({ children, onDismiss = typescript_misc_1.fn.noop }) => {
    const context = React.useMemo(() => ({ onDismiss }), [onDismiss]);
    return (<MenuContext.Provider value={context}>{children}</MenuContext.Provider>);
});
/**
 * Consumes menu context.
 *
 * @returns Menu context.
 */
function useMenu() {
    return React.useContext(MenuContext);
}
exports.useMenu = useMenu;
const MenuContext = React.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=menu.jsx.map