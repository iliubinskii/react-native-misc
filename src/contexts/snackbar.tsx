import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { PointerEvents, Position } from "../types";
import type { StyleProp, ViewStyle } from "react-native";
import { memo, useBoolean } from "react-misc";
import { neverDemand, o } from "typescript-misc";
import type { numberU, stringU } from "typescript-misc";
import Animated, { runOnJS, useAnimatedStyle } from "react-native-reanimated";
import type { CommonProps } from "react-misc";
import type { MD3ThemeExtended } from "../types";
import React from "react";
import { Snackbar } from "react-native-paper";
import { View } from "react-native";
import { consts } from "../core";
import { useWindowDimensionsParams } from "../hooks";

export const SnackbarProvider = memo(
  "SnackbarProvider",
  ({ children, defaultOffset = 0, theme, translucent }: Props) => {
    const { height, width } = useWindowDimensionsParams(translucent);

    const [options, setOptions] = React.useState<Options>({});

    const [snackbarVisible, setSnackbarVisible, hideSnackbar] = useBoolean();

    const style = React.useMemo((): StyleProp<ViewStyle> => {
      if (options.variant)
        switch (options.variant) {
          case Variant.error: {
            return { backgroundColor: theme.colors.error };
          }
        }

      return {};
    }, [options.variant, theme]);

    const [text, setText] = React.useState<stringU>();

    const animatedStyle = useAnimatedStyle((): ViewStyle => {
      return {
        bottom,
        end,
        position: Position.absolute,
        start,
        transform: [{ translateY: -(options.offset ?? defaultOffset) }]
      };
    }, [options.offset, defaultOffset]);

    const gesture = React.useMemo(
      () =>
        Gesture.Tap().onEnd(() => {
          "worklet";

          runOnJS(hideSnackbar)();
        }),
      [hideSnackbar]
    );

    const gestureStopPropagation = React.useMemo(() => Gesture.Tap(), []);

    const showSnackbar = React.useCallback<Context["showSnackbar"]>(
      (nextText, nextOptions = {}) => {
        setText(nextText);
        setOptions(nextOptions);
        setSnackbarVisible();
      },
      [setSnackbarVisible]
    );

    const context = React.useMemo((): Context => {
      return { hideSnackbar, showSnackbar };
    }, [hideSnackbar, showSnackbar]);

    return (
      <SnackbarContext.Provider value={context}>
        <GestureDetector gesture={gesture}>
          <View style={{ height, width }}>
            {children}
            <GestureDetector gesture={gestureStopPropagation}>
              <Animated.View
                pointerEvents={PointerEvents.boxNone}
                style={animatedStyle}
              >
                <Snackbar
                  {...o.removeUndefinedKeys<
                    React.ComponentProps<typeof Snackbar>
                  >({
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
                  })}
                >
                  {text}
                </Snackbar>
              </Animated.View>
            </GestureDetector>
          </View>
        </GestureDetector>
      </SnackbarContext.Provider>
    );
  }
);

export enum Variant {
  error = "error"
}

/**
 * Consumes snackbar context.
 * @returns Snackbar context.
 */
export function useSnackbar(): Context {
  return React.useContext(SnackbarContext);
}

/**
 * @internal
 */
export interface Context {
  /**
   * Hides snackbar.
   */
  readonly hideSnackbar: () => void;
  /**
   * Shows snackbar.
   * @param text - Text.
   * @param options - Options.
   */
  readonly showSnackbar: (text: string, options?: Options) => void;
}

/**
 * @internal
 */
export interface Options {
  readonly action?:
    | Exclude<React.ComponentProps<typeof Snackbar>["action"], undefined>
    | undefined;
  readonly duration?: numberU;
  readonly offset?: numberU;
  readonly variant?: Variant | undefined;
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly defaultOffset?: numberU;
  readonly theme: MD3ThemeExtended;
  readonly translucent: boolean;
}

const SnackbarContext = React.createContext(neverDemand<Context>());

const { bottom, end, start } = consts.snackbar;
