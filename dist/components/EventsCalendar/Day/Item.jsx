"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("../../common-components");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Item", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function ({ getLabel, getTextStyle, isFeatured = false, item }) {
    const { colors, roundness } = (0, contexts_1.useThemeExtended)();
    return (<common_components_1.Text numberOfLines={numberOfLines} style={[
            {
                borderRadius: roundnessFactor * roundness,
                fontSize,
                lineHeight,
                paddingHorizontal,
                paddingVertical
            },
            isFeatured
                ? {
                    backgroundColor: colors.calendar.featured.background,
                    color: colors.calendar.featured.foreground
                }
                : {
                    backgroundColor: colors.surfaceDisabled,
                    color: colors.onSurfaceDisabled
                },
            getTextStyle?.(item)
        ]}>
        {getLabel(item)}
      </common_components_1.Text>);
});
const { fontSize, lineHeight, numberOfLines, paddingHorizontal, paddingVertical, roundnessFactor } = core_1.consts.EventsCalendar.Day.Item;
//# sourceMappingURL=Item.jsx.map