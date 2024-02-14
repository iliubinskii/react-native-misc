import * as React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import type { NumStr, booleanU, numberU, stringU } from "typescript-misc";
import type { CommonNativeProps } from "../../types";
import type { Icon } from "../../icons";
declare global {
    namespace reactNativeLib {
        interface Icon extends ScopedIcon {
        }
    }
}
declare const _default: <T extends NumStr>(props: Props<T>) => React.JSX.Element | undefined;
export default _default;
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
     *
     * @param value - Value.
     */
    readonly onChange?: ((value?: T) => void) | undefined;
    /**
     * Resets value.
     */
    readonly onReset?: (() => void) | undefined;
    /**
     * Selects value.
     *
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
    readonly Icon?: Icon;
    readonly label: string;
    readonly value: T;
}
export interface SelectOptionExtended<T extends NumStr> extends SelectOption<T> {
    /**
     * Handles select option press.
     */
    readonly onPress: () => void;
    readonly value: T;
}
export type SelectOptions<T extends NumStr> = ReadonlyArray<SelectOption<T>>;
//# sourceMappingURL=Select.d.ts.map