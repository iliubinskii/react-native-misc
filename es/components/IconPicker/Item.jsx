import { IconButton } from "../common-components";
import React from "react";
import { consts } from "../../core";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";
export default memo("Item", ({ getIcon, name, onSelect, selected }) => {
    const Icon = React.useMemo(() => getIcon(name), [getIcon, name]);
    const { colors } = useThemeExtended();
    const onPress = React.useCallback(() => {
        onSelect(name);
    }, [name, onSelect]);
    return (<IconButton Icon={Icon} iconColor={selected ? colors.inverseOnPrimary : undefined} onPress={onPress} padding={padding} size={size} style={{
            backgroundColor: selected ? colors.inversePrimary : undefined,
            margin
        }}/>);
});
const { margin, padding, size } = consts.IconPicker;
//# sourceMappingURL=Item.jsx.map