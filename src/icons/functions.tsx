/* eslint-disable react/no-multi-comp -- Ok */

import * as React from "react";
import type { Icon, IconProps } from "./icons-common";
import CountryFlag from "react-native-country-flag";
import type { Icon as ExpoIcon } from "@expo/vector-icons/build/createIconSet";
import { Image } from "react-native";
import type { ImageRequireSource } from "react-native";
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
export function countryFlagIcon(isoCode: string): Icon {
  return Icon;

  function Icon({ size = defaultSize }: IconProps): React.ReactElement {
    return <CountryFlag isoCode={isoCode} size={size} />;
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
export function expoIcon<G extends string, F extends string>(
  IconSet: ExpoIcon<G, F>,
  name: G,
  nameRtl = name
): Icon {
  return Icon;

  function Icon({ color, size = defaultSize }: IconProps): React.ReactElement {
    return <IconSet color={color} name={isRtl ? nameRtl : name} size={size} />;
  }
}

/**
 * Creates icon component.
 *
 * @param source - Source.
 * @returns Icon component.
 */
export function imageIcon(source: ImageRequireSource): Icon {
  return Icon;

  function Icon({ size = defaultSize }: IconProps): React.ReactElement {
    return <Image source={source} style={{ height: size, width: size }} />;
  }
}

/**
 * Checks if value is an icon name.
 *
 * @param value - Value.
 * @param IconSet - Icon set.
 * @returns _True_ if value is an icon name, _false_ otherwise.
 */
export function isExpoIconName<G extends string, F extends string>(
  value: unknown,
  IconSet: ExpoIcon<G, F>
): value is G {
  return is.string(value) && value in IconSet.glyphMap;
}

/**
 * Creates icon component.
 *
 * @param label - Label.
 * @returns Icon component.
 */
export function textIcon(label: string): Icon {
  return Icon;

  function Icon({ color, size }: IconProps): React.ReactElement {
    return <Text style={{ color, fontSize: size }}>{label}</Text>;
  }
}

const { defaultSize } = consts.icons;
