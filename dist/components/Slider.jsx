"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const slider_1 = tslib_1.__importDefault(require("@react-native-community/slider"));
const common_components_1 = require("./common-components");
const react_native_1 = require("react-native");
const core_1 = require("../core");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../contexts");
exports.default = (0, react_misc_1.memo)("Slider", ({ label, ...props }) => {
    const { colors } = (0, contexts_1.useThemeExtended)();
    return typescript_misc_1.is.not.empty(label) ? (<react_native_1.View>
      <common_components_1.Text>{label}</common_components_1.Text>
      <slider_1.default maximumTrackTintColor={colors.elevation.level5} minimumTrackTintColor={colors.elevation.level5} style={{ marginVertical }} thumbTintColor={colors.primary} {...props}/>
    </react_native_1.View>) : (<slider_1.default maximumTrackTintColor={colors.elevation.level5} minimumTrackTintColor={colors.elevation.level5} style={{ marginVertical }} thumbTintColor={colors.primary} {...props}/>);
});
const { marginVertical } = core_1.consts.Slider;
//# sourceMappingURL=Slider.jsx.map