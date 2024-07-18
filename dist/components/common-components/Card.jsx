"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../../types");
const common_common_components_1 = require("./common-common-components");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const core_1 = require("../../core");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("Card", ({ actions, actionsJustifyContent, children, contentsStyle, menu, onLayout, title, titleTextVariant, width }) => {
    const { colors, roundness } = (0, contexts_1.useThemeExtended)();
    return (<react_native_1.View onLayout={onLayout} style={{
            backgroundColor: colors.surface,
            borderRadius: borderRadius * roundness,
            gap,
            padding,
            width
        }}>
        {typescript_misc_1.is.not.empty(title) || typescript_misc_1.is.not.empty(menu) ? (<common_common_components_1.Row style={{
                alignItems: types_1.AlignItems.flexStart,
                justifyContent: types_1.JustifyContent.spaceBetween
            }}>
            {typescript_misc_1.is.not.empty(title) ? (<common_common_components_1.Text variant={titleTextVariant ?? types_1.TextVariant.titleLarge}>
                {title}
              </common_common_components_1.Text>) : undefined}
            {typescript_misc_1.is.not.empty(menu) ? (<react_native_1.View style={{ marginEnd, marginTop }}>{menu}</react_native_1.View>) : undefined}
          </common_common_components_1.Row>) : undefined}
        <react_native_1.View style={contentsStyle}>{children}</react_native_1.View>
        {typescript_misc_1.is.not.empty(actions) ? (<common_common_components_1.Row style={{
                alignItems: types_1.AlignItems.flexEnd,
                justifyContent: actionsJustifyContent ?? types_1.JustifyContent.flexEnd
            }}>
            {actions}
          </common_common_components_1.Row>) : undefined}
      </react_native_1.View>);
});
const { borderRadius, gap, marginEnd, marginTop, padding } = core_1.consts.Card;
//# sourceMappingURL=Card.jsx.map