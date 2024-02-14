/* eslint-disable react/no-multi-comp -- Ok */
import * as React from "react";
import CountryFlag from "react-native-country-flag";
import { Image } from "react-native";
import { Text } from "react-native-paper";
import { consts } from "../core";
import { is } from "typescript-misc";
import { isRtl } from "../consts";
/**
 * Creates icon component.
 *
 * @param isoCode - Iso code.
 * @returns Icon component.
 */
export function countryFlagIcon(isoCode) {
    return Icon;
    function Icon({ size = defaultSize }) {
        return <CountryFlag isoCode={isoCode} size={size}/>;
    }
}
/**
 * Creates icon component.
 *
 * @param IconSet - Icon set.
 * @param name - Name.
 * @param nameRtl - Rtl name.
 * @returns Icon component.
 */
export function expoIcon(IconSet, name, nameRtl = name) {
    return Icon;
    function Icon({ color, size = defaultSize }) {
        return <IconSet color={color} name={isRtl ? nameRtl : name} size={size}/>;
    }
}
/**
 * Creates icon component.
 *
 * @param source - Source.
 * @returns Icon component.
 */
export function imageIcon(source) {
    return Icon;
    function Icon({ size = defaultSize }) {
        return <Image source={source} style={{ height: size, width: size }}/>;
    }
}
/**
 * Checks if value is an icon name.
 *
 * @param value - Value.
 * @param IconSet - Icon set.
 * @returns _True_ if value is an icon name, _false_ otherwise.
 */
export function isExpoIconName(value, IconSet) {
    return is.string(value) && value in IconSet.glyphMap;
}
/**
 * Creates icon component.
 *
 * @param label - Label.
 * @returns Icon component.
 */
export function textIcon(label) {
    return Icon;
    function Icon({ color, size }) {
        return <Text style={{ color, fontSize: size }}>{label}</Text>;
    }
}
const { defaultSize } = consts.icons;
//# sourceMappingURL=functions.jsx.map