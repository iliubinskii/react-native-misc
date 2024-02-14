"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppInfo = exports.AppInfoProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
exports.AppInfoProvider = (0, react_misc_1.memo)("AppInfoProvider", ({ children, translucent }) => {
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
function useAppInfo() {
    const { translucent } = React.useContext(AppInfoContext);
    return React.useMemo(() => ({ translucent }), [translucent]);
}
exports.useAppInfo = useAppInfo;
const AppInfoContext = React.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=app-info.jsx.map