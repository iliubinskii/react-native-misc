"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInfoProvider = void 0;
exports.useAppInfo = useAppInfo;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
exports.AppInfoProvider = (0, react_misc_1.memo)("AppInfoProvider", ({ children, translucent }) => {
    const context = react_1.default.useMemo(() => {
        return { translucent };
    }, [translucent]);
    return (<AppInfoContext.Provider value={context}>
        {children}
      </AppInfoContext.Provider>);
});
/**
 * Consumes app info context.
 * @returns App info context.
 */
function useAppInfo() {
    const { translucent } = react_1.default.useContext(AppInfoContext);
    return react_1.default.useMemo(() => {
        return { translucent };
    }, [translucent]);
}
const AppInfoContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=app-info.jsx.map