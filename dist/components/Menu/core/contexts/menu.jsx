"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuProvider = void 0;
exports.useMenu = useMenu;
const tslib_1 = require("tslib");
const typescript_misc_1 = require("typescript-misc");
const react_1 = tslib_1.__importDefault(require("react"));
const react_misc_1 = require("react-misc");
exports.MenuProvider = (0, react_misc_1.memo)("MenuProvider", ({ children, onDismiss = typescript_misc_1.fn.noop }) => {
    const context = react_1.default.useMemo(() => {
        return { onDismiss };
    }, [onDismiss]);
    return (<MenuContext.Provider value={context}>{children}</MenuContext.Provider>);
});
/**
 * Consumes menu context.
 * @returns Menu context.
 */
function useMenu() {
    return react_1.default.useContext(MenuContext);
}
const MenuContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=menu.jsx.map