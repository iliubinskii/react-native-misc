import { IconButton } from "./common-common-components";
import React from "react";
import { TextInput } from "react-native-paper";
import { memo } from "react-misc";
export default memo("TextInputWithRightIcon", ({ Icon, iconDisabled, onIconPress, ...props }) => {
    const right = React.useCallback(({ color, size }) => (<IconButton Icon={Icon} disabled={iconDisabled} iconColor={color} onPress={onIconPress} size={size} style={{ margin: 0 }}/>), [Icon, iconDisabled, onIconPress]);
    return <TextInput right={<TextInput.Icon icon={right}/>} {...props}/>;
});
//# sourceMappingURL=TextInputWithRightIcon.jsx.map