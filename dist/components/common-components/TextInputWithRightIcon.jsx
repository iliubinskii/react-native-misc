"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_common_components_1 = require("./common-common-components");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_paper_1 = require("react-native-paper");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("TextInputWithRightIcon", ({ Icon, iconDisabled, onIconPress, ...props }) => {
    const right = react_1.default.useCallback(({ color, size }) => (<common_common_components_1.IconButton Icon={Icon} disabled={iconDisabled} iconColor={color} onPress={onIconPress} size={size} style={{ margin: 0 }}/>), [Icon, iconDisabled, onIconPress]);
    return <react_native_paper_1.TextInput right={<react_native_paper_1.TextInput.Icon icon={right}/>} {...props}/>;
});
//# sourceMappingURL=TextInputWithRightIcon.jsx.map