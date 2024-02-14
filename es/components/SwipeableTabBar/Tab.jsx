import * as React from "react";
import { AlignItems, JustifyContent } from "../../types";
import { Pressable } from "react-native";
import { Text } from "../common-components";
import { assert } from "typescript-misc";
import { memo } from "react-misc";
import { useTheme } from "@react-navigation/native";
export default memo("Tab", ({ descriptor: { navigation, options, route }, height, iconSize }) => {
    assert.string(options.tabBarLabel, "Expecting string tab bar label");
    const { colors } = useTheme();
    const focused = navigation.isFocused();
    const label = options.tabBarLabel;
    const color = focused ? colors.primary : colors.text;
    const icon = options.tabBarIcon?.({ color, focused, size: iconSize });
    const onPress = React.useCallback(() => {
        navigation.jumpTo(route.name);
    }, [route.name, navigation]);
    return (<Pressable onPress={onPress} style={{
            alignItems: AlignItems.center,
            flex: 1,
            height,
            justifyContent: JustifyContent.center
        }}>
        {icon}
        <Text numberOfLines={1} style={{ color }}>
          {label}
        </Text>
      </Pressable>);
});
//# sourceMappingURL=Tab.jsx.map