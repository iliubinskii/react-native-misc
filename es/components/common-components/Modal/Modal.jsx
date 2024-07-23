import { AlignItems, JustifyContent, Position } from "../../../types";
import { ParentKeyboardHeightFactorProvider, useAnimatedKeyboard, useThemeExtended } from "../../../contexts";
import { Pressable, View } from "react-native";
import { RenderTimeLogger, memo } from "react-misc";
import { fn, o } from "typescript-misc";
import Animated, { FadeIn, FadeOut, useAnimatedStyle } from "react-native-reanimated";
import React from "react";
import { useBackHandler } from "../../../hooks";
import { useWindowDimensions } from "../../../hooks-with-contexts";
export default memo("Modal", ({ animated = true, backdropStyle, children, containerStyle, keyboardHeightFactor = 0.5, name, onClose = fn.noop, overlayStyle }) => {
    const { height, width } = useWindowDimensions();
    const { colors } = useThemeExtended();
    const keyboardHeight = useAnimatedKeyboard();
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: -keyboardHeightFactor * keyboardHeight.value }
            ]
        };
    }, [keyboardHeight, keyboardHeightFactor]);
    useBackHandler(() => {
        onClose();
        return true;
    });
    return (<RenderTimeLogger name={name}>
        <Animated.View {...o.removeUndefinedKeys({
        entering: animated ? FadeIn : undefined,
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