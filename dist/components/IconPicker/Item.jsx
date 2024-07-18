"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_components_1 = require("../common-components");
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("Item", ({ getIcon, name, onSelect, selected }) => {
    const Icon = react_1.default.useMemo(() => getIcon(name), [getIcon, name]);
    const { colors } = (0, contexts_1.useThemeExtended)();
    const onPress = react_1.default.useCallback(() => {
        onSelect(name);
    }, [name, onSelect]);
    return (<common_components_1.IconButton Icon={Icon} iconColor={selected ? colors.inverseOnPrimary : undefined} onPress={onPress} padding={padding} size={size} style={{
            backgroundColor: selected ? colors.inversePrimary : undefined,
            margin
        }}/>);
});
const { margin, padding, size } = core_1.consts.IconPicker;
//# sourceMappingURL=Item.jsx.map