"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_paper_1 = require("react-native-paper");
const core_1 = require("./core");
const react_1 = tslib_1.__importDefault(require("react"));
const react_misc_1 = require("react-misc");
const lodash_commonjs_es_1 = require("lodash-commonjs-es");
const consts_1 = require("../../consts");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("Container", ({ children, onDismiss = lodash_commonjs_es_1.noop, ...props }) => {
    const { translucent } = (0, contexts_1.useAppInfo)();
    return (<react_native_paper_1.Menu onDismiss={onDismiss} statusBarHeight={translucent ? consts_1.statusBarHeight : 0} {...props}>
        <core_1.MenuProvider onDismiss={onDismiss}>{children}</core_1.MenuProvider>
      </react_native_paper_1.Menu>);
});
//# sourceMappingURL=Container.jsx.map