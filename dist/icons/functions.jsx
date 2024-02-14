"use strict";
/* eslint-disable react/no-multi-comp -- Ok */
Object.defineProperty(exports, "__esModule", { value: true });
exports.textIcon = exports.isExpoIconName = exports.imageIcon = exports.expoIcon = exports.countryFlagIcon = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_country_flag_1 = tslib_1.__importDefault(require("react-native-country-flag"));
const react_native_1 = require("react-native");
const react_native_paper_1 = require("react-native-paper");
const core_1 = require("../core");
const typescript_misc_1 = require("typescript-misc");
const consts_1 = require("../consts");
/**
 * Creates icon component.
 *
 * @param isoCode - Iso code.
 * @returns Icon component.
 */
function countryFlagIcon(isoCode) {
    return Icon;
    function Icon({ size = defaultSize }) {
        return <react_native_country_flag_1.default isoCode={isoCode} size={size}/>;
    }
}
exports.countryFlagIcon = countryFlagIcon;
/**
 * Creates icon component.
 *
 * @param IconSet - Icon set.
 * @param name - Name.
 * @param nameRtl - Rtl name.
 * @returns Icon component.
 */
function expoIcon(IconSet, name, nameRtl = name) {
    return Icon;
    function Icon({ color, size = defaultSize }) {
        return <IconSet color={color} name={consts_1.isRtl ? nameRtl : name} size={size}/>;
    }
}
exports.expoIcon = expoIcon;
/**
 * Creates icon component.
 *
 * @param source - Source.
 * @returns Icon component.
 */
function imageIcon(source) {
    return Icon;
    function Icon({ size = defaultSize }) {
        return <react_native_1.Image source={source} style={{ height: size, width: size }}/>;
    }
}
exports.imageIcon = imageIcon;
/**
 * Checks if value is an icon name.
 *
 * @param value - Value.
 * @param IconSet - Icon set.
 * @returns _True_ if value is an icon name, _false_ otherwise.
 */
function isExpoIconName(value, IconSet) {
    return typescript_misc_1.is.string(value) && value in IconSet.glyphMap;
}
exports.isExpoIconName = isExpoIconName;
/**
 * Creates icon component.
 *
 * @param label - Label.
 * @returns Icon component.
 */
function textIcon(label) {
    return Icon;
    function Icon({ color, size }) {
        return <react_native_paper_1.Text style={{ color, fontSize: size }}>{label}</react_native_paper_1.Text>;
    }
}
exports.textIcon = textIcon;
const { defaultSize } = core_1.consts.icons;
//# sourceMappingURL=functions.jsx.map