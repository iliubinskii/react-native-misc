"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = exports.SnackbarProvider = void 0;
exports.useSnackbar = useSnackbar;
const tslib_1 = require("tslib");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const types_1 = require("../types");
const react_misc_1 = require("react-misc");
const typescript_misc_1 = require("typescript-misc");
const react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_paper_1 = require("react-native-paper");
const react_native_1 = require("react-native");
const core_1 = require("../core");
const hooks_1 = require("../hooks");
exports.SnackbarProvider = (0, react_misc_1.memo)("SnackbarProvider", ({ children, defaultOffset = 0, theme, translucent }) => {
    const { height, width } = (0, hooks_1.useWindowDimensionsParams)(translucent);
    const [options, setOptions] = react_1.default.useState({});
    const [snackbarVisible, setSnackbarVisible, hideSnackbar] = (0, react_misc_1.useBoolean)();
    const style = react_1.default.useMemo(() => {
        if (options.variant)
            switch (options.variant) {
                case Variant.error: {
                    return { backgroundColor: theme.colors.error };
                }
            }
        return {};
    }, [options.variant, theme]);
    const [text, setText] = react_1.default.useState();
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            bottom,
            end,
            position: types_1.Position.absolute,
            start,
            transform: [{ translateY: -(options.offset ?? defaultOffset) }]
        };
    }, [options.offset, defaultOffset]);
    const gesture = react_1.default.useMemo(() => react_native_gesture_handler_1.Gesture.Tap().onEnd(() => {
        "worklet";
        (0, react_native_reanimated_1.runOnJS)(hideSnackbar)();
    }), [hideSnackbar]);
    const gestureStopPropagation = react_1.default.useMemo(() => react_native_gesture_handler_1.Gesture.Tap(), []);
    const showSnackbar = react_1.default.useCallback((nextText, nextOptions = {}) => {
        setText(nextText);
        setOptions(nextOptions);
        setSnackbarVisible();
    }, [setSnackbarVisible]);
    const context = react_1.default.useMemo(() => {
        return { hideSnackbar, showSnackbar };
    }, [hideSnackbar, showSnackbar]);
    return (<SnackbarContext.Provider value={context}>
        <react_native_gesture_handler_1.GestureDetector gesture={gesture}>
          <react_native_1.View style={{ height, width }}>
            {children}
            <react_native_gesture_handler_1.GestureDetector gesture={gestureStopPropagation}>
              <react_native_reanimated_1.default.View pointerEvents={types_1.PointerEvents.boxNone} style={animatedStyle}>
                <react_native_paper_1.Snackbar {...typescript_misc_1.o.removeUndefinedKeys({
        action: options.action,
        duration: options.duration,
        onDismiss: hideSnackbar,
        style: [{ margin: 0, padding: 0 }, style],
        visible: snackbarVisible,
        wrapperStyle: {
            margin: 0,
            padding: 0,
            position: types_1.Position.relative
        }
    })}>
                  {text}
                </react_native_paper_1.Snackbar>
              </react_native_reanimated_1.default.View>
            </react_native_gesture_handler_1.GestureDetector>
          </react_native_1.View>
        </react_native_gesture_handler_1.GestureDetector>
      </SnackbarContext.Provider>);
});
var Variant;
(function (Variant) {
    Variant["error"] = "error";
})(Variant || (exports.Variant = Variant = {}));
/**
 * Consumes snackbar context.
 * @returns Snackbar context.
 */
function useSnackbar() {
    return react_1.default.useContext(SnackbarContext);
}
const SnackbarContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
const { bottom, end, start } = core_1.consts.snackbar;
//# sourceMappingURL=snackbar.jsx.map