import { AlignItems, JustifyContent, Position } from "../../../types";
import { ParentKeyboardHeightFactorProvider, useAnimatedKeyboard, useThemeExtended } from "../../../contexts";
import { Pressable, View } from "react-native";
import { RenderTimeLogger, memo, useRealEffect } from "react-misc";
import { fn, o } from "typescript-misc";
import Animated, { FadeOut, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import React from "react";
import { useBackHandler } from "../../../hooks";
import { useWindowDimensions } from "../../../hooks-with-contexts";
export default memo("Modal", ({ animated = true, backdropStyle, children, containerStyle, keyboardHeightFactor = 0.5, name, onClose = fn.noop, overlayStyle }) => {
    const { height, width } = useWindowDimensions();
    const { colors } = useThemeExtended();
    const keyboardHeight = useAnimatedKeyboard();
    const opacity = useSharedValue(animated ? 0 : 1);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { translateY: -keyboardHeightFactor * keyboardHeight.value }
            ]
        };
    }, [keyboardHeight, keyboardHeightFactor, opacity]);
    // Back handler
    useBackHandler(() => {
        onClose();
        return true;
    });
    // Fade in
    useRealEffect(() => {
        if (animated)
            opacity.value = withTiming(1);
    }, []);
    return (<RenderTimeLogger name={name}>
        <Animated.View {...o.removeUndefinedKeys({
        exiting: animated ? FadeOut : undefined,
        style: animatedStyle
    })}>
          <View style={[
            {
                backgroundColor: colors.backdrop,
                height: 2 * height,
                position: Position.absolute,
                width
            },
            backdropStyle
        ]}/>
          <Pressable onPress={onClose} style={[
            {
                alignItems: AlignItems.center,
                height,
                justifyContent: JustifyContent.center,
                width
            },
            overlayStyle
        ]}>
            <View style={containerStyle}>
              <Pressable>
                <ParentKeyboardHeightFactorProvider factor={0.5}>
                  {children}
                </ParentKeyboardHeightFactorProvider>
              </Pressable>
            </View>
          </Pressable>
        </Animated.View>
      </RenderTimeLogger>);
});
//# sourceMappingURL=Modal.jsx.map