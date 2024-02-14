"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_paper_1 = require("react-native-paper");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const core_1 = require("./core");
exports.default = (0, react_misc_1.memo)("Item", ({ onPress = typescript_misc_1.fn.noop, ...props }) => {
    const { onDismiss } = (0, core_1.useMenu)();
    const itemPressHandler = React.useCallback((e) => {
        onDismiss();
        onPress(e);
    }, [onDismiss, onPress]);
    return <react_native_paper_1.Menu.Item onPress={itemPressHandler} {...props}/>;
});
//# sourceMappingURL=Item.jsx.map