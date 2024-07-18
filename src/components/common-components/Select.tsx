import * as List from "./List";
import {
  AlignItems,
  KeyboardDismissMode,
  KeyboardShouldPersistTaps,
  Position,
  TextVariant
} from "../../types";
import type {
  LayoutRectangle,
  PointProp,
  StyleProp,
  ViewStyle
} from "react-native";
import type { NumStr, booleanU, numberU, stringU } from "typescript-misc";
import { Pressable, View } from "react-native";
import { Row, Text } from "./common-common-components";
import { fn, is, neverDemand } from "typescript-misc";
import { memo, useBoolean } from "react-misc";
import {
  useAnimatedKeyboard,
  useParentKeyboardHeightFactor,
  useThemeExtended
} from "../../contexts";
import type { CommonNativeProps } from "../../types";
import type { Icon } from "../../icons";
import Modal from "./Modal";
import { Portal } from "react-native-paper";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { consts } from "../../core";
import { useIcons } from "../../icons";

declare global {
  namespace reactNativeMisc {
    interface Icon extends ScopedIcon {}
  }
}

export default memo("Select", function Select<
  T extends NumStr
>({ PlaceholderIcon, backgroundColor, caption, foregroundColor, maxItems = defaultMaxItems, onChange = fn.noop, onReset = fn.noop, onSelect = fn.noop, options, placeholder = defaultPlaceholder, resettable = false, rowStyle, style, value }: Props<T>) {
  const { DownChevronIcon, UpChevronIcon } = useIcons<keyof ScopedIcon>();

  const { colors, roundness } = useThemeExtended();

  const ScrollViewOrView = options.length > maxItems ? ScrollView : View;

  const contentOffset = React.useMemo((): PointProp | undefined => {
    if (options.length > maxItems) {
      const index = options.findIndex(option => option.value === value);

      if (index > 0) return { x: 0, y: index * height.options };
    }

    return undefined;
  }, [maxItems, options, value]);

  const keyboardHeight = useAnimatedKeyboard();

  const keyboardHeightFactor = useParentKeyboardHeightFactor();

  const [layout, setLayout] = React.useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0
  });

  const [optionsVisible, showOptions, hideOptions, , optionsVisibleRef] =
    useBoolean();

  const ref = React.useRef(neverDemand<View>());

  const selectedOption = options.find(option => option.value === value);

  const optionsExtended = React.useMemo(
    () =>
      options.map((option): SelectOptionExtended<T> => {
        return {
          onPress: () => {
            onSelect(option.value);
            onChange(option.value);
            hideOptions();
          },
          ...option
        };
      }),
    [hideOptions, onChange, onSelect, options]
  );

  const SelectedIcon = selectedOption ? selectedOption.Icon : PlaceholderIcon;

  const selectedLabel = selectedOption ? selectedOption.label : placeholder;

  const measureShowOptions = React.useCallback(() => {
    if (optionsVisibleRef.current) hideOptions();
    else
      ref.current.measure(
        // Parameters may be empty
        // eslint-disable-next-line max-params -- Ok
        (_x, _y, w: numberU, h: numberU, pageX: numberU, pageY: numberU) => {
          if (
            is.not.empty(w) &&
            is.not.empty(h) &&
            is.not.empty(pageX) &&
            is.not.empty(pageY)
          )
            setLayout({
              height: h,
              width: w,
              x: pageX,
              y: pageY + keyboardHeightFactor * keyboardHeight.value
            });

          showOptions();
        }
      );
  }, [
    hideOptions,
    keyboardHeight,
    keyboardHeightFactor,
    optionsVisibleRef,
    showOptions
  ]);

  const reset = React.useCallback(() => {
    onReset();
    onChange();
    hideOptions();
  }, [hideOptions, onChange, onReset]);

  return (
    <View
      style={[
        {
          backgroundColor,
          paddingTop: is.not.empty(caption) ? paddingTop : undefined
        },
        style
      ]}
    >
      <Pressable onPress={measureShowOptions} ref={ref}>
        <Row
          style={[
            {
              alignItems: AlignItems.center,
              borderColor: colors.outline,
              borderRadius: roundness,
              borderWidth: 1,
              gap,
              height: height.field,
              paddingHorizontal
            },
            rowStyle
          ]}
        >
          {SelectedIcon ? <SelectedIcon /> : undefined}
          <Text
            style={{ color: foregroundColor, flex: 1 }}
            variant={TextVariant.bodyLarge}
          >
            {selectedLabel}
          </Text>
          {optionsVisible ? (
            <UpChevronIcon color={foregroundColor} />
          ) : (
            <DownChevronIcon color={foregroundColor} />
          )}
        </Row>
        <Portal>
          <Modal
            animated={false}
            backdropStyle={{ backgroundColor: undefined }}
            containerStyle={{
              position: Position.absolute,
              start: layout.x,
              top: layout.y + layout.height + offset
            }}
            keyboardHeightFactor={keyboardHeightFactor}
            name="Select"
            onClose={hideOptions}
            visible={optionsVisible}
          >
            <ScrollViewOrView
              contentOffset={contentOffset}
              keyboardDismissMode={KeyboardDismissMode.none}
              keyboardShouldPersistTaps={KeyboardShouldPersistTaps.always}
              style={{
                backgroundColor: colors.surface,
                elevation,
                height:
                  options.length > maxItems
                    ? maxItems * height.field
                    : undefined,
                width: layout.width
              }}
            >
              {resettable ? (
                <List.Item
                  Icon={PlaceholderIcon}
                  onPress={reset}
                  selected={is.empty(value)}
                  style={{ height: height.options }}
                  title={placeholder}
                />
              ) : undefined}
              {optionsExtended.map(
                ({ Icon, label, onPress, value: nextValue }) => (
                  <List.Item
                    Icon={Icon}
                    key={nextValue}
                    onPress={onPress}
                    selected={nextValue === value}
                    style={{ height: height.options }}
                    title={label}
                  />
                )
              )}
            </ScrollViewOrView>
          </Modal>
        </Portal>
      </Pressable>
      {is.not.empty(caption) ? (
        <Text
          style={{
            backgroundColor,
            color: foregroundColor,
            paddingHorizontal: captionPaddingHorizontal,
            position: Position.absolute,
            start: captionStart,
            top: 0
          }}
          variant={TextVariant.bodySmall}
        >
          {caption}
        </Text>
      ) : undefined}
    </View>
  );
});

/**
 * @internal
 */
export interface Props<T extends NumStr> extends CommonNativeProps.ViewStyle {
  readonly PlaceholderIcon?: Icon | undefined;
  readonly backgroundColor?: stringU;
  readonly caption?: stringU;
  readonly foregroundColor?: stringU;
  readonly maxItems?: numberU;
  /**
   * Selects or resets value.
   * @param value - Value.
   */
  readonly onChange?: ((value?: T) => void) | undefined;
  /**
   * Resets value.
   */
  readonly onReset?: (() => void) | undefined;
  /**
   * Selects value.
   * @param value - Value.
   */
  readonly onSelect?: ((value: T) => void) | undefined;
  readonly options: SelectOptions<T>;
  readonly placeholder?: stringU;
  readonly resettable?: booleanU;
  readonly rowStyle?: StyleProp<ViewStyle> | undefined;
  readonly value?: T | undefined;
}

/**
 * @internal
 */
export interface ScopedIcon {
  readonly DownChevronIcon: true;
  readonly UpChevronIcon: true;
}

export interface SelectOption<T extends NumStr> {
  readonly Icon?: Icon | undefined;
  readonly label: string;
  readonly value: T;
}

export interface SelectOptionExtended<T extends NumStr>
  extends SelectOption<T> {
  /**
   * Handles select option press.
   */
  readonly onPress: () => void;
  readonly value: T;
}

export type SelectOptions<T extends NumStr> = ReadonlyArray<SelectOption<T>>;

const {
  captionPaddingHorizontal,
  captionStart,
  defaultMaxItems,
  defaultPlaceholder,
  elevation,
  gap,
  height,
  offset,
  paddingHorizontal,
  paddingTop
} = consts.Select;
