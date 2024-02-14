"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consts = void 0;
const react_native_reanimated_1 = require("react-native-reanimated");
const react_native_1 = require("react-native");
const typescript_misc_1 = require("typescript-misc");
exports.consts = {
    AnimatedScrollView: {
        largeSwipeThreshold: 1600,
        movementThreshold: 0.6,
        smallSwipeThreshold: 800
    },
    Balloon: {
        MeasuredBalloon: {
            Background: {
                roundnessFactor: 2,
                shadow: [1, 2.1, 3.3, 4.6],
                strokeWidth: 2,
                svgPadding: 6,
                triangleHeight: 40,
                triangleOffset: 0.3,
                triangleWidth: 0.3
            }
        },
        margin: 10,
        padding: 10
    },
    CandlestickChart: {
        BaseChart: {
            axisThickness: 1,
            barThickness: 0.7,
            dy: { horizontalLabels: "0.7em", verticalLabels: "0.35em" },
            fontFamily: "system-ui",
            fontSize: 12,
            gridThickness: 0.2,
            horizontalTextMargin: 4,
            verticalTextMargin: 6
        }
    },
    Card: {
        borderRadius: 2,
        gap: 15,
        marginEnd: -10,
        marginTop: -8,
        padding: 20
    },
    CheckboxRow: { gap: 4 },
    Chip: {
        gap: 5,
        iconSize: 24,
        paddingHorizontal: 5,
        paddingVertical: 3
    },
    DateTimePicker: {
        Calendar: {
            daysInWeek: 7,
            format: { monthYear: "MMM yyyy" },
            gap: 8,
            maxWeeks: 6,
            paddingVertical: 2,
            size: 40
        },
        Clock: {
            buttonSize: 45,
            gap: 8,
            hourHandLength: 40,
            hourHandWidth1: 4,
            hourHandWidth2: 2,
            maxRadius: 140,
            minRadius: 10,
            minuteHandLength: 80,
            minuteHandWidth1: 3,
            minuteHandWidth2: 1,
            minutesStep: 5,
            numbers: [
                "XII",
                "I",
                "II",
                "III",
                "IV",
                "V",
                "VI",
                "VII",
                "VIII",
                "IX",
                "X",
                "XI"
            ],
            paddingHorizontal: 16,
            size: 280,
            smallNumber: 1e-10,
            strokeWidth: 2
        },
        duration: 50,
        height: 330,
        iconPadding: 10,
        iconSize: 22,
        width: 280
    },
    Dense: {
        Button: { height: 40, paddingHorizontal: 16 },
        Container: { gap: 10 },
        Row: { gap: 5 },
        Select: { height: 40 },
        TextInput: { height: 40, paddingHorizontal: 16 },
        ToggleButton: { defaultSize: 20, padding: 8 }
    },
    Drawer: {
        averageVelocity: 0.8,
        bottomPlaceholderHeight: 1000,
        dragToOpenThreshold: 50,
        duration: 250,
        easing: react_native_reanimated_1.Easing.bezier(0.7, 0.9, 0.8, 0.95),
        maxDuration: 1000,
        minDuration: 150,
        moveOutThreshold: { delta: 10, high: 0.8, low: 0.2 },
        offScreen: 10000,
        swipeThreshold: 500
    },
    EventsCalendar: {
        Day: {
            Item: {
                fontSize: 10,
                lineHeight: 12,
                numberOfLines: 3,
                paddingHorizontal: 3,
                paddingVertical: 2,
                roundnessFactor: 0.75
            },
            gap: 1,
            padding: 2
        },
        borderWidth: 0.5,
        paddingVertical: 2
    },
    FlatList: { delay: 400, scrollIndicatorMinHeight: 10, width: 5 },
    Gesture: { pan: { minDistance: 5 } },
    Group: {
        ActionButtons: { gap: 5, marginBottom: -10, marginHorizontal: -10 },
        ActionToggleButtons: { gap: 2.5, marginBottom: -5, marginHorizontal: -5 },
        CheckboxRows: { gap: 5 },
        Chips: { gap: 2.5 },
        Paragraphs: { gap: 5 },
        Sections: { gap: 17 },
        Selects: { gap: 10 },
        Subsections: { gap: 10 },
        SwitchRows: { gap: 10 },
        TextInputs: { gap: 10 }
    },
    IconButton: {
        alertIconEnd: -2,
        alertIconSize: 16,
        alertIconTop: -4,
        defaultPadding: 10,
        defaultSize: 24
    },
    IconPicker: {
        cols: 5,
        margin: 2,
        padding: 10,
        rows: 4,
        size: 24,
        widthFactor: 0.8
    },
    InfoBlock: { borderWidth: 1, padding: 7 },
    List: {
        Item: { alertIconSize: 16, alertIconTranslateX: 4, alertIconTranslateY: -2 }
    },
    MenuCard: {
        Container: { gap: 5, padding: 10 },
        Item: {
            disabledOpacity: 0.5,
            gap: 10,
            iconSize: 24,
            loadingDelay: 200,
            padding: 10
        }
    },
    MillePicker: {
        slot1: {
            largeSwipeSize: 10,
            largeSwipeStopInterval: 5,
            range: [0, 99],
            smallSwipeSize: 5,
            smallSwipeStopInterval: 5
        },
        slot2: {
            largeSwipeSize: 10,
            largeSwipeStopInterval: 5,
            range: [0, 999],
            smallSwipeSize: 5,
            smallSwipeStopInterval: 5,
            step: 50
        }
    },
    Select: {
        captionPaddingHorizontal: 4,
        captionStart: 12,
        defaultMaxItems: 1000000000,
        defaultPlaceholder: "...",
        elevation: 3,
        gap: 2,
        height: { field: 50, options: 50 },
        offset: 3,
        paddingHorizontal: 16,
        paddingTop: 9
    },
    Shakable: {
        duration: 800,
        oscillations: 3,
        scale: 0.1,
        translateX: 10
    },
    Sheet: { padding: 20 },
    Slider: { marginVertical: 4 },
    SquareButton: { paddingVertical: 5, roundness: 1 },
    Swipeable: {
        averageVelocity: 0.8,
        directionThreshold: 0.5,
        duration: 1000,
        easing: react_native_reanimated_1.Easing.bezier(0.7, 0.9, 0.8, 0.95),
        maxDuration: 300,
        minDuration: 150,
        translateX: 100,
        velocityThreshold: 700
    },
    SwipeableTabBar: { toggleThreshold: 0.1 },
    SwitchRow: { gap: 8 },
    TextAlert: { offsetEnd: 4, offsetTop: 2, size: 16 },
    TimePicker: {
        slot1: {
            largeSwipeSize: 12,
            largeSwipeStopInterval: 6,
            range: [0, 23],
            smallSwipeSize: 6,
            smallSwipeStopInterval: 6
        },
        slot2: {
            largeSwipeSize: 30,
            largeSwipeStopInterval: 15,
            range: [0, 59],
            smallSwipeSize: 15,
            smallSwipeStopInterval: 15
        }
    },
    WheelPicker: {
        BaseWheelPicker: {
            Mask: {
                colors: [
                    "rgba(0, 0, 0, 0.000)",
                    "rgba(0, 0, 0, 0.042)",
                    "rgba(0, 0, 0, 0.083)",
                    "rgba(0, 0, 0, 0.124)",
                    "rgba(0, 0, 0, 0.163)",
                    "rgba(0, 0, 0, 0.200)",
                    "rgba(0, 0, 0, 0.235)",
                    "rgba(0, 0, 0, 0.268)",
                    "rgba(0, 0, 0, 0.297)",
                    "rgba(0, 0, 0, 0.324)",
                    "rgba(0, 0, 0, 0.351)",
                    "rgba(0, 0, 0, 0.445)",
                    "rgba(0, 0, 0, 0.697)",
                    "rgba(0, 0, 0, 0.920)",
                    "rgba(0, 0, 0, 0.993)",
                    "rgba(0, 0, 0, 1.000)",
                    "rgba(0, 0, 0, 0.993)",
                    "rgba(0, 0, 0, 0.920)",
                    "rgba(0, 0, 0, 0.697)",
                    "rgba(0, 0, 0, 0.445)",
                    "rgba(0, 0, 0, 0.351)",
                    "rgba(0, 0, 0, 0.324)",
                    "rgba(0, 0, 0, 0.297)",
                    "rgba(0, 0, 0, 0.268)",
                    "rgba(0, 0, 0, 0.235)",
                    "rgba(0, 0, 0, 0.200)",
                    "rgba(0, 0, 0, 0.163)",
                    "rgba(0, 0, 0, 0.124)",
                    "rgba(0, 0, 0, 0.083)",
                    "rgba(0, 0, 0, 0.042)",
                    "rgba(0, 0, 0, 0.000)"
                ]
            },
            copies: 5,
            fontAspectRatio: 0.55,
            fontFamily: "monospace",
            fontSize: 30,
            overflowThreshold: 0.99,
            padding: 12,
            snapAnimationConfig: {
                duration: 150,
                easing: react_native_reanimated_1.Easing.bezier(0.2, 0.8, 0.5, 0.95)
            },
            swipeAnimationConfig: {
                averageVelocity: 0.3,
                easing: react_native_reanimated_1.Easing.bezier(0.2, 0.8, 0.5, 0.95),
                maxDuration: 1500,
                minDuration: 300
            },
            tickThreshold: 0.99,
            volume: 0.05
        },
        Border: {
            Mask: {
                colors: [
                    "rgba(0, 0, 0, 0.000)",
                    "rgba(0, 0, 0, 0.042)",
                    "rgba(0, 0, 0, 0.083)",
                    "rgba(0, 0, 0, 0.124)",
                    "rgba(0, 0, 0, 0.163)",
                    "rgba(0, 0, 0, 0.200)",
                    "rgba(0, 0, 0, 0.235)",
                    "rgba(0, 0, 0, 0.268)",
                    "rgba(0, 0, 0, 0.297)",
                    "rgba(0, 0, 0, 0.324)",
                    "rgba(0, 0, 0, 0.346)",
                    "rgba(0, 0, 0, 0.365)",
                    "rgba(0, 0, 0, 0.380)",
                    "rgba(0, 0, 0, 0.391)",
                    "rgba(0, 0, 0, 0.398)",
                    "rgba(0, 0, 0, 0.400)",
                    "rgba(0, 0, 0, 0.398)",
                    "rgba(0, 0, 0, 0.391)",
                    "rgba(0, 0, 0, 0.380)",
                    "rgba(0, 0, 0, 0.365)",
                    "rgba(0, 0, 0, 0.346)",
                    "rgba(0, 0, 0, 0.324)",
                    "rgba(0, 0, 0, 0.297)",
                    "rgba(0, 0, 0, 0.268)",
                    "rgba(0, 0, 0, 0.235)",
                    "rgba(0, 0, 0, 0.200)",
                    "rgba(0, 0, 0, 0.163)",
                    "rgba(0, 0, 0, 0.124)",
                    "rgba(0, 0, 0, 0.083)",
                    "rgba(0, 0, 0, 0.042)",
                    "rgba(0, 0, 0, 0.000)"
                ]
            }
        },
        height: react_native_1.PixelRatio.roundToNearestPixel(typescript_misc_1.num.round.step(40, react_native_1.PixelRatio.get())),
        size: 5
    },
    functions: { ripple: { alpha: 0.12 } },
    icons: { defaultSize: 24 },
    snackbar: { bottom: 8, end: 8, start: 8 },
    springAnimation: {
        damping: 7,
        mass: 0.4,
        smallNumber: 1e-10,
        stiffness: 80
    },
    useCalendar: {
        daysInWeek: 7,
        friday: 5,
        maxWeeks: 6,
        saturday: 6,
        sunday: 0
    }
};
//# sourceMappingURL=consts.js.map