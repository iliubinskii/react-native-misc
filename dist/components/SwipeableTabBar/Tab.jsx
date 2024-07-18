"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../../types");
const react_native_1 = require("react-native");
const react_1 = tslib_1.__importDefault(require("react"));
const common_components_1 = require("../common-components");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const native_1 = require("@react-navigation/native");
exports.default = (0, react_misc_1.memo)("Tab", ({ descriptor: { navigation, options, route }, height, iconSize }) => {
    typescript_misc_1.assert.string(options.tabBarLabel, "Expecting string tab bar label");
    const { colors } = (0, native_1.useTheme)();
    const focused = navigation.isFocused();
    const label = options.tabBarLabel;
    const color = focused ? colors.primary : colors.text;
    const icon = options.tabBarIcon?.({ color, focused, size: iconSize });
    const onPress = react_1.default.useCallback(() => {
        navigation.jumpTo(route.name);
    }, [route.name, navigation]);
    return (<react_native_1.Pressable onPress={onPress} style={{
            alignItems: types_1.AlignItems.center,
            flex: 1,
            height,
            justifyContent: types_1.JustifyContent.center
        }}>
        {icon}
        <common_components_1.Text numberOfLines={1} style={{ color }}>
          {label}
        </common_components_1.Text>
      </react_native_1.Pressable>);
});
//# sourceMappingURL=Tab.jsx.map