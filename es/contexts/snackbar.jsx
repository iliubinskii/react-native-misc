import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { PointerEvents, Position } from "../types";
import { memo, useBoolean } from "react-misc";
import { neverDemand, o } from "typescript-misc";
import Animated, { runOnJS, useAnimatedStyle } from "react-native-reanimated";
import React from "react";
import { Snackbar } from "react-native-paper";
import { View } from "react-native";
import { consts } from "../core";
import { useWindowDimensionsParams } from "../hooks";
export const SnackbarProvider = memo("SnackbarProvider", ({ children, defaultOffset = 0, theme, translucent }) => {
    const { height, width } = useWindowDimensionsParams(translucent);
    const [options, setOptions] = React.useState({});
    const [snackbarVisible, setSnackbarVisible, hideSnackbar] = useBoolean();
    const style = React.useMemo(() => {
        if (options.variant)
            switch (options.variant) {
                case Variant.error: {
                    return { backgroundColor: theme.colors.error };
                }
            }
        return {};
    }, [options.variant, theme]);
    const [text, setText] = React.useState();
    const animatedStyle = useAnimatedStyle(() => {
        return {
            bottom,
            end,
            position: Position.absolute,
            start,
            transform: [{ translateY: -(options.offset ?? defaultOffset) }]
        };
    }, [options.offset, defaultOffset]);
    const gesture = React.useMemo(() => Gesture.Tap().onEnd(() => {
        "worklet";
        runOnJS(hideSnackbar)();
    }), [hideSnackbar]);
    const gestureStopPropagation = React.useMemo(() => Gesture.Tap(), []);
    const showSnackbar = React.useCallback((nextText, nextOptions = {}) => {
        setText(nextText);
        setOptions(nextOptions);
        setSnackbarVisible();
    }, [setSnackbarVisible]);
    const context = React.useMemo(() => {
        return { hideSnackbar, showSnackbar };
    }, [hideSnackbar, showSnackbar]);
    return (<SnackbarContext.Provider value={context}>
        <GestureDetector gesture={gesture}>
          <View style={{ height, width }}>
            {children}
            <GestureDetector gesture={gestureStopPropagation}>
              <Animated.View pointerEvents={PointerEvents.boxNone} style={animatedStyle}>
                <Snackbar {...o.removeUndefinedKeys({
        action: options.action,
        duration: options.duration,
        onDismiss: hideSnackbar,
        style: [{ margin: 0, padding: 0 }, style],
        visible: snackbarVisible,
        wrapperStyle: {
            margin: 0,
            padding: 0,
            position: Position.relative
        }
    })}>
                  {text}
                </Snackbar>
              </Animated.View>
            </GestureDetector>
          </View>
        </GestureDetector>
      </SnackbarContext.Provider>);
});
export var Variant;
(function (Variant) {
    Variant["error"] = "error";
})(Variant || (Variant = {}));
/**
 * Consumes snackbar context.
 * @returns Snackbar context.
 */
export function useSnackbar() {
    return React.useContext(SnackbarContext);
}
const SnackbarContext = React.createContext(neverDemand());
const { bottom, end, start } = consts.snackbar;
//# sourceMappingURL=snackbar.jsx.map