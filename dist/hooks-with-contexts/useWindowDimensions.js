"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowDimensions = void 0;
const contexts_1 = require("../contexts");
const hooks_1 = require("../hooks");
/**
 * Window dimensions hook.
 *
 * @returns Window dimensions.
 */
function useWindowDimensions() {
    const { translucent } = (0, contexts_1.useAppInfo)();
    return (0, hooks_1.useWindowDimensionsParams)(translucent);
}
exports.useWindowDimensions = useWindowDimensions;
//# sourceMappingURL=useWindowDimensions.js.map