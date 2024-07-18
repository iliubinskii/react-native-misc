"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const List = tslib_1.__importStar(require("./List"));
const types_1 = require("../../types");
const react_native_1 = require("react-native");
const common_common_components_1 = require("./common-common-components");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../contexts");
const Modal_1 = tslib_1.__importDefault(require("./Modal"));
const react_native_paper_1 = require("react-native-paper");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const core_1 = require("../../core");
const icons_1 = require("../../icons");
exports.default = (0, react_misc_1.memo)("Select", function Select({ PlaceholderIcon, backgroundColor, caption, foregroundColor, maxItems = defaultMaxItems, onChange = typescript_misc_1.fn.noop, onReset = typescript_misc_1.fn.noop, onSelect = typescript_misc_1.fn.noop, options, placeholder = defaultPlaceholder, resettable = false, rowStyle, style, value }) {
    const { DownChevronIcon, UpChevronIcon } = (0, icons_1.useIcons)();
    const { colors, roundness } = (0, contexts_1.useThemeExtended)();
    const ScrollViewOrView = options.length > maxItems ? react_native_gesture_handler_1.ScrollView : react_native_1.View;
    const contentOffset = react_1.default.useMemo(() => {
        if (options.length > maxItems) {
            const index = options.findIndex(option => option.value === value);
            if (index > 0)
                return { x: 0, y: index * height.options };
        }
        return undefined;
    }, [maxItems, options, value]);
    const keyboardHeight = (0, contexts_1.useAnimatedKeyboard)();
    const keyboardHeightFactor = (0, contexts_1.useParentKeyboardHeightFactor)();
    const [layout, setLayout] = react_1.default.useState({
        height: 0,
        width: 0,
        x: 0,
        y: 0
    });
    const [optionsVisible, showOptions, hideOptions, , optionsVisibleRef] = (0, react_misc_1.useBoolean)();
    const ref = react_1.default.useRef((0, typescript_misc_1.neverDemand)());
    const selectedOption = options.find(option => option.value === value);
    const optionsExtended = react_1.default.useMemo(() => options.map((option) => {
        return {
            onPress: () => {
                onSelect(option.value);
                onChange(option.value);
                hideOptions();
            },
            ...option
        };
    }), [hideOptions, onChange, onSelect, options]);
    const SelectedIcon = selectedOption ? selectedOption.Icon : PlaceholderIcon;
    const selectedLabel = selectedOption ? selectedOption.label : placeholder;
    const measureShowOptions = react_1.default.useCallback(() => {
        if (optionsVisibleRef.current)
            hideOptions();
        else
            ref.current.measure(
            // Parameters may be empty
            // eslint-disable-next-line max-params -- Ok
            (_x, _y, w, h, pageX, pageY) => {
                if (typescript_misc_1.is.not.empty(w) &&
                    typescript_misc_1.is.not.empty(h) &&
                    typescript_misc_1.is.not.empty(pageX) &&
                    typescript_misc_1.is.not.empty(pageY))
                    setLayout({
                        height: h,
                        width: w,
                        x: pageX,
                        y: pageY + keyboardHeightFactor * keyboardHeight.value
                    });
                showOptions();
            });
    }, [
        hideOptions,
        keyboardHeight,
        keyboardHeightFactor,
        optionsVisibleRef,
        showOptions
    ]);
    const reset = react_1.default.useCallback(() => {
        onReset();
        onChange();
        hideOptions();
    }, [hideOptions, onChange, onReset]);
    return (<react_native_1.View style={[
            {
                backgroundColor,
                paddingTop: typescript_misc_1.is.not.empty(caption) ? paddingTop : undefined
            },
            style
        ]}>
      <react_native_1.Pressable onPress={measureShowOptions} ref={ref}>
        <common_common_components_1.Row style={[
            {
                alignItems: types_1.AlignItems.center,
                borderColor: colors.outline,
                borderRadius: roundness,
                borderWidth: 1,
                gap,
                height: height.field,
                paddingHorizontal
            },
            rowStyle
        ]}>
          {SelectedIcon ? <SelectedIcon /> : undefined}
          <common_common_components_1.Text style={{ color: foregroundColor, flex: 1 }} variant={types_1.TextVariant.bodyLarge}>
            {selectedLabel}
          </common_common_components_1.Text>
          {optionsVisible ? (<UpChevronIcon color={foregroundColor}/>) : (<DownChevronIcon color={foregroundColor}/>)}
        </common_common_components_1.Row>
        <react_native_paper_1.Portal>
          <Modal_1.default animated={false} backdropStyle={{ backgroundColor: undefined }} containerStyle={{
            position: types_1.Position.absolute,
            start: layout.x,
            top: layout.y + layout.height + offset
        }} keyboardHeightFactor={keyboardHeightFactor} name="Select" onClose={hideOptions} visible={optionsVisible}>
            <ScrollViewOrView contentOffset={contentOffset} keyboardDismissMode={types_1.KeyboardDismissMode.none} keyboardShouldPersistTaps={types_1.KeyboardShouldPersistTaps.always} style={{
            backgroundColor: colors.surface,
            elevation,
            height: options.length > maxItems
                ? maxItems * height.field
                : undefined,
            width: layout.width
        }}>
              {resettable ? (<List.Item Icon={PlaceholderIcon} onPress={reset} selected={typescript_misc_1.is.empty(value)} style={{ height: height.options }} title={placeholder}/>) : undefined}
              {optionsExtended.map(({ Icon, label, onPress, value: nextValue }) => (<List.Item Icon={Icon} key={nextValue} onPress={onPress} selected={nextValue === value} style={{ height: height.options }} title={label}/>))}
            </ScrollViewOrView>
          </Modal_1.default>
        </react_native_paper_1.Portal>
      </react_native_1.Pressable>
      {typescript_misc_1.is.not.empty(caption) ? (<common_common_components_1.Text style={{
                backgroundColor,
                color: foregroundColor,
                paddingHorizontal: captionPaddingHorizontal,
                position: types_1.Position.absolute,
                start: captionStart,
                top: 0
            }} variant={types_1.TextVariant.bodySmall}>
          {caption}
        </common_common_components_1.Text>) : undefined}
    </react_native_1.View>);
});
const { captionPaddingHorizontal, captionStart, defaultMaxItems, defaultPlaceholder, elevation, gap, height, offset, paddingHorizontal, paddingTop } = core_1.consts.Select;
//# sourceMappingURL=Select.jsx.map