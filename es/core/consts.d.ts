export declare const consts: {
    readonly AnimatedScrollView: {
        readonly largeSwipeThreshold: 1600;
        readonly movementThreshold: 0.6;
        readonly smallSwipeThreshold: 800;
    };
    readonly Balloon: {
        readonly MeasuredBalloon: {
            readonly Background: {
                readonly roundnessFactor: 2;
                readonly shadow: readonly [1, 2.1, 3.3, 4.6];
                readonly strokeWidth: 2;
                readonly svgPadding: 6;
                readonly triangleHeight: 40;
                readonly triangleOffset: 0.3;
                readonly triangleWidth: 0.3;
            };
        };
        readonly margin: 10;
        readonly padding: 10;
    };
    readonly CandlestickChart: {
        readonly BaseChart: {
            readonly axisThickness: 1;
            readonly barThickness: 0.7;
            readonly dy: {
                readonly horizontalLabels: "0.7em";
                readonly verticalLabels: "0.35em";
            };
            readonly fontFamily: "system-ui";
            readonly fontSize: 12;
            readonly gridThickness: 0.2;
            readonly horizontalTextMargin: 4;
            readonly verticalTextMargin: 6;
        };
    };
    readonly Card: {
        readonly borderRadius: 2;
        readonly gap: 15;
        readonly marginEnd: -10;
        readonly marginTop: -8;
        readonly padding: 20;
    };
    readonly CheckboxRow: {
        readonly gap: 4;
    };
    readonly Chip: {
        readonly gap: 5;
        readonly iconSize: 24;
        readonly paddingHorizontal: 5;
        readonly paddingVertical: 3;
    };
    readonly DateTimePicker: {
        readonly Calendar: {
            readonly daysInWeek: 7;
            readonly format: {
                readonly monthYear: "MMM yyyy";
            };
            readonly gap: 8;
            readonly maxWeeks: 6;
            readonly paddingVertical: 2;
            readonly size: 40;
        };
        readonly Clock: {
            readonly buttonSize: 45;
            readonly gap: 8;
            readonly hourHandLength: 40;
            readonly hourHandWidth1: 4;
            readonly hourHandWidth2: 2;
            readonly maxRadius: 140;
            readonly minRadius: 10;
            readonly minuteHandLength: 80;
            readonly minuteHandWidth1: 3;
            readonly minuteHandWidth2: 1;
            readonly minutesStep: 5;
            readonly numbers: readonly ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
            readonly paddingHorizontal: 16;
            readonly size: 280;
            readonly smallNumber: 1e-10;
            readonly strokeWidth: 2;
        };
        readonly duration: 50;
        readonly height: 330;
        readonly iconPadding: 10;
        readonly iconSize: 22;
        readonly width: 280;
    };
    readonly Dense: {
        readonly Button: {
            readonly height: 40;
            readonly paddingHorizontal: 16;
        };
        readonly Container: {
            readonly gap: 10;
        };
        readonly Row: {
            readonly gap: 5;
        };
        readonly Select: {
            readonly height: 40;
        };
        readonly TextInput: {
            readonly height: 40;
            readonly paddingHorizontal: 16;
        };
        readonly ToggleButton: {
            readonly defaultSize: 20;
            readonly padding: 8;
        };
    };
    readonly Drawer: {
        readonly averageVelocity: 0.8;
        readonly bottomPlaceholderHeight: 1000;
        readonly dragToOpenThreshold: 50;
        readonly duration: 250;
        readonly easing: {
            factory: () => (x: number) => number;
        };
        readonly maxDuration: 1000;
        readonly minDuration: 150;
        readonly moveOutThreshold: {
            readonly delta: 10;
            readonly high: 0.8;
            readonly low: 0.2;
        };
        readonly offScreen: 10000;
        readonly swipeThreshold: 500;
    };
    readonly EventsCalendar: {
        readonly Day: {
            readonly Item: {
                readonly fontSize: 10;
                readonly lineHeight: 12;
                readonly numberOfLines: 3;
                readonly paddingHorizontal: 3;
                readonly paddingVertical: 2;
                readonly roundnessFactor: 0.75;
            };
            readonly gap: 1;
            readonly padding: 2;
        };
        readonly borderWidth: 0.5;
        readonly paddingVertical: 2;
    };
    readonly FlatList: {
        readonly delay: 400;
        readonly scrollIndicatorMinHeight: 10;
        readonly width: 5;
    };
    readonly Gesture: {
        readonly pan: {
            readonly minDistance: 5;
        };
    };
    readonly Group: {
        readonly ActionButtons: {
            readonly gap: 5;
            readonly marginBottom: -10;
            readonly marginHorizontal: -10;
        };
        readonly ActionToggleButtons: {
            readonly gap: 2.5;
            readonly marginBottom: -5;
            readonly marginHorizontal: -5;
        };
        readonly CheckboxRows: {
            readonly gap: 5;
        };
        readonly Chips: {
            readonly gap: 2.5;
        };
        readonly Paragraphs: {
            readonly gap: 5;
        };
        readonly Sections: {
            readonly gap: 17;
        };
        readonly Selects: {
            readonly gap: 10;
        };
        readonly Subsections: {
            readonly gap: 10;
        };
        readonly SwitchRows: {
            readonly gap: 10;
        };
        readonly TextInputs: {
            readonly gap: 10;
        };
    };
    readonly IconButton: {
        readonly alertIconEnd: -2;
        readonly alertIconSize: 16;
        readonly alertIconTop: -4;
        readonly defaultPadding: 10;
        readonly defaultSize: 24;
    };
    readonly IconPicker: {
        readonly cols: 5;
        readonly margin: 2;
        readonly padding: 10;
        readonly rows: 4;
        readonly size: 24;
        readonly widthFactor: 0.8;
    };
    readonly InfoBlock: {
        readonly borderWidth: 1;
        readonly padding: 7;
    };
    readonly List: {
        readonly Item: {
            readonly alertIconSize: 16;
            readonly alertIconTranslateX: 4;
            readonly alertIconTranslateY: -2;
        };
    };
    readonly MenuCard: {
        readonly Container: {
            readonly gap: 5;
            readonly padding: 10;
        };
        readonly Item: {
            readonly disabledOpacity: 0.5;
            readonly gap: 10;
            readonly iconSize: 24;
            readonly loadingDelay: 200;
            readonly padding: 10;
        };
    };
    readonly MillePicker: {
        readonly slot1: {
            readonly largeSwipeSize: 10;
            readonly largeSwipeStopInterval: 5;
            readonly padding: 2;
            readonly range: readonly [0, 99];
            readonly smallSwipeSize: 5;
            readonly smallSwipeStopInterval: 5;
        };
        readonly slot2: {
            readonly largeSwipeSize: 10;
            readonly largeSwipeStopInterval: 5;
            readonly padding: 3;
            readonly range: readonly [0, 999];
            readonly smallSwipeSize: 5;
            readonly smallSwipeStopInterval: 5;
            readonly step: 50;
        };
    };
    readonly Select: {
        readonly captionPaddingHorizontal: 4;
        readonly captionStart: 12;
        readonly defaultMaxItems: 1000000000;
        readonly defaultPlaceholder: "...";
        readonly elevation: 3;
        readonly gap: 2;
        readonly height: {
            readonly field: 50;
            readonly options: 50;
        };
        readonly offset: 3;
        readonly paddingHorizontal: 16;
        readonly paddingTop: 9;
    };
    readonly Shakable: {
        readonly duration: 800;
        readonly oscillations: 3;
        readonly scale: 0.1;
        readonly translateX: 10;
    };
    readonly Sheet: {
        readonly padding: 20;
    };
    readonly Slider: {
        readonly marginVertical: 4;
    };
    readonly SquareButton: {
        readonly paddingVertical: 5;
        readonly roundness: 1;
    };
    readonly Swipeable: {
        readonly averageVelocity: 0.8;
        readonly directionThreshold: 0.5;
        readonly duration: 1000;
        readonly easing: {
            factory: () => (x: number) => number;
        };
        readonly maxDuration: 300;
        readonly minDuration: 150;
        readonly translateX: 100;
        readonly velocityThreshold: 700;
    };
    readonly SwipeableTabBar: {
        readonly toggleThreshold: 0.1;
    };
    readonly SwitchRow: {
        readonly gap: 8;
    };
    readonly TextAlert: {
        readonly offsetEnd: 4;
        readonly offsetTop: 2;
        readonly size: 16;
    };
    readonly TimePicker: {
        readonly slot1: {
            readonly largeSwipeSize: 12;
            readonly largeSwipeStopInterval: 6;
            readonly padding: 2;
            readonly range: readonly [0, 23];
            readonly smallSwipeSize: 6;
            readonly smallSwipeStopInterval: 6;
        };
        readonly slot2: {
            readonly largeSwipeSize: 30;
            readonly largeSwipeStopInterval: 15;
            readonly padding: 2;
            readonly range: readonly [0, 59];
            readonly smallSwipeSize: 15;
            readonly smallSwipeStopInterval: 15;
        };
    };
    readonly WheelPicker: {
        readonly BaseWheelPicker: {
            readonly Mask: {
                readonly colors: readonly ["rgba(0, 0, 0, 0.000)", "rgba(0, 0, 0, 0.042)", "rgba(0, 0, 0, 0.083)", "rgba(0, 0, 0, 0.124)", "rgba(0, 0, 0, 0.163)", "rgba(0, 0, 0, 0.200)", "rgba(0, 0, 0, 0.235)", "rgba(0, 0, 0, 0.268)", "rgba(0, 0, 0, 0.297)", "rgba(0, 0, 0, 0.324)", "rgba(0, 0, 0, 0.351)", "rgba(0, 0, 0, 0.445)", "rgba(0, 0, 0, 0.697)", "rgba(0, 0, 0, 0.920)", "rgba(0, 0, 0, 0.993)", "rgba(0, 0, 0, 1.000)", "rgba(0, 0, 0, 0.993)", "rgba(0, 0, 0, 0.920)", "rgba(0, 0, 0, 0.697)", "rgba(0, 0, 0, 0.445)", "rgba(0, 0, 0, 0.351)", "rgba(0, 0, 0, 0.324)", "rgba(0, 0, 0, 0.297)", "rgba(0, 0, 0, 0.268)", "rgba(0, 0, 0, 0.235)", "rgba(0, 0, 0, 0.200)", "rgba(0, 0, 0, 0.163)", "rgba(0, 0, 0, 0.124)", "rgba(0, 0, 0, 0.083)", "rgba(0, 0, 0, 0.042)", "rgba(0, 0, 0, 0.000)"];
            };
            readonly copies: 5;
            readonly fontAspectRatio: 0.55;
            readonly fontFamily: "monospace";
            readonly fontSize: 30;
            readonly overflowThreshold: 0.99;
            readonly padding: 12;
            readonly snapAnimationConfig: {
                readonly duration: 150;
                readonly easing: {
                    factory: () => (x: number) => number;
                };
            };
            readonly swipeAnimationConfig: {
                readonly averageVelocity: 0.3;
                readonly easing: {
                    factory: () => (x: number) => number;
                };
                readonly maxDuration: 1500;
                readonly minDuration: 300;
            };
            readonly tickThreshold: 0.99;
            readonly volume: 0.05;
        };
        readonly Border: {
            readonly Mask: {
                readonly colors: readonly ["rgba(0, 0, 0, 0.000)", "rgba(0, 0, 0, 0.042)", "rgba(0, 0, 0, 0.083)", "rgba(0, 0, 0, 0.124)", "rgba(0, 0, 0, 0.163)", "rgba(0, 0, 0, 0.200)", "rgba(0, 0, 0, 0.235)", "rgba(0, 0, 0, 0.268)", "rgba(0, 0, 0, 0.297)", "rgba(0, 0, 0, 0.324)", "rgba(0, 0, 0, 0.346)", "rgba(0, 0, 0, 0.365)", "rgba(0, 0, 0, 0.380)", "rgba(0, 0, 0, 0.391)", "rgba(0, 0, 0, 0.398)", "rgba(0, 0, 0, 0.400)", "rgba(0, 0, 0, 0.398)", "rgba(0, 0, 0, 0.391)", "rgba(0, 0, 0, 0.380)", "rgba(0, 0, 0, 0.365)", "rgba(0, 0, 0, 0.346)", "rgba(0, 0, 0, 0.324)", "rgba(0, 0, 0, 0.297)", "rgba(0, 0, 0, 0.268)", "rgba(0, 0, 0, 0.235)", "rgba(0, 0, 0, 0.200)", "rgba(0, 0, 0, 0.163)", "rgba(0, 0, 0, 0.124)", "rgba(0, 0, 0, 0.083)", "rgba(0, 0, 0, 0.042)", "rgba(0, 0, 0, 0.000)"];
            };
        };
        readonly height: number;
        readonly size: 5;
    };
    readonly functions: {
        readonly ripple: {
            readonly alpha: 0.12;
        };
    };
    readonly icons: {
        readonly defaultSize: 24;
    };
    readonly snackbar: {
        readonly bottom: 8;
        readonly end: 8;
        readonly start: 8;
    };
    readonly springAnimation: {
        readonly damping: 7;
        readonly mass: 0.4;
        readonly smallNumber: 1e-10;
        readonly stiffness: 80;
    };
    readonly useCalendar: {
        readonly daysInWeek: 7;
        readonly friday: 5;
        readonly maxWeeks: 6;
        readonly saturday: 6;
        readonly sunday: 0;
    };
};
//# sourceMappingURL=consts.d.ts.map