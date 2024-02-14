"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const types_1 = require("../../../types");
const contexts_1 = require("../../../contexts");
const react_native_1 = require("react-native");
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const hooks_1 = require("../../../hooks");
const hooks_with_contexts_1 = require("../../../hooks-with-contexts");
exports.default = (0, react_misc_1.memo)("Modal", ({ animated = true, backdropStyle, children, containerStyle, keyboardHeightFactor = 0.5, name, onClose = typescript_misc_1.fn.noop, overlayStyle }) => {
    const { height, width } = (0, hooks_with_contexts_1.useWindowDimensions)();
    const { colors } = (0, contexts_1.useThemeExtended)();
    const keyboardHeight = (0, contexts_1.useAnimatedKeyboard)();
    const opacity = (0, react_native_reanimated_1.useSharedValue)(animated ? 0 : 1);
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => ({
        opacity: opacity.value,
        transform: [
            { translateY: -keyboardHeightFactor * keyboardHeight.value }
        ]
    }), [keyboardHeight, keyboardHeightFactor, opacity]);
    // Back handler
    (0, hooks_1.useBackHandler)(() => {
        onClose();
        return true;
    });
    // Fade in
    (0, react_misc_1.useRealEffect)(() => {
        if (animated)
            opacity.value = (0, react_native_reanimated_1.withTiming)(1);
    }, []);
    return (<react_misc_1.RenderTimeLogger name={name}>
        <react_native_reanimated_1.default.View {...typescript_misc_1.o.removeUndefinedKeys({
        exiting: animated ? react_native_reanimated_1.FadeOut : undefined,
        style: animatedStyle
    })}>
          <react_native_1.View style={[
            {
                backgroundColor: colors.backdrop,
                height: 2 * height,
                position: types_1.Position.absolute,
                width
            },
            backdropStyle
        ]}/>
          <react_native_1.Pressable onPress={onClose} style={[
            {
                alignItems: types_1.AlignItems.center,
                height,
                justifyContent: types_1.JustifyContent.center,
                width
            },
            overlayStyle
        ]}>
            <react_native_1.View style={containerStyle}>
              <react_native_1.Pressable>
                <contexts_1.ParentKeyboardHeightFactorProvider factor={0.5}>
                  {children}
                </contexts_1.ParentKeyboardHeightFactorProvider>
              </react_native_1.Pressable>
            </react_native_1.View>
          </react_native_1.Pressable>
        </react_native_reanimated_1.default.View>
      </react_misc_1.RenderTimeLogger>);
});
//# sourceMappingURL=Modal.jsx.map