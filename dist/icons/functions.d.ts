import type { Icon } from "./icons-common";
import type { Icon as ExpoIcon } from "@expo/vector-icons/build/createIconSet";
import type { ImageRequireSource } from "react-native";
/**
 * Creates icon component.
 * @param isoCode - Iso code.
 * @returns Icon component.
 */
export declare function countryFlagIcon(isoCode: string): Icon;
/**
 * Creates icon component.
 * @param IconSet - Icon set.
 * @param name - Name.
 * @param nameRtl - Rtl name.
 * @returns Icon component.
 */
export declare function expoIcon<G extends string, F extends string>(IconSet: ExpoIcon<G, F>, name: G, nameRtl?: G): Icon;
/**
 * Creates icon component.
 * @param source - Source.
 * @returns Icon component.
 */
export declare function imageIcon(source: ImageRequireSource): Icon;
/**
 * Checks if value is an icon name.
 * @param value - Value.
 * @param IconSet - Icon set.
 * @returns _True_ if value is an icon name, _false_ otherwise.
 */
export declare function isExpoIconName<G extends string, F extends string>(value: unknown, IconSet: ExpoIcon<G, F>): value is G;
/**
 * Creates icon component.
 * @param label - Label.
 * @returns Icon component.
 */
export declare function textIcon(label: string): Icon;
//# sourceMappingURL=functions.d.ts.map