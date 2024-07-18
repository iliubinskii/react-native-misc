import { AlignItems, JustifyContent, TextVariant } from "../../types";
import { Row, Text } from "./common-common-components";
import React from "react";
import { View } from "react-native";
import { consts } from "../../core";
import { is } from "typescript-misc";
import { memo } from "react-misc";
import { useThemeExtended } from "../../contexts";
export default memo("Card", ({ actions, actionsJustifyContent, children, contentsStyle, menu, onLayout, title, titleTextVariant, width }) => {
    const { colors, roundness } = useThemeExtended();
    return (<View onLayout={onLayout} style={{
            backgroundColor: colors.surface,
            borderRadius: borderRadius * roundness,
            gap,
            padding,
            width
        }}>
        {is.not.empty(title) || is.not.empty(menu) ? (<Row style={{
                alignItems: AlignItems.flexStart,
                justifyContent: JustifyContent.spaceBetween
            }}>
            {is.not.empty(title) ? (<Text variant={titleTextVariant ?? TextVariant.titleLarge}>
                {title}
              </Text>) : undefined}
            {is.not.empty(menu) ? (<View style={{ marginEnd, marginTop }}>{menu}</View>) : undefined}
          </Row>) : undefined}
        <View style={contentsStyle}>{children}</View>
        {is.not.empty(actions) ? (<Row style={{
                alignItems: AlignItems.flexEnd,
                justifyContent: actionsJustifyContent ?? JustifyContent.flexEnd
            }}>
            {actions}
          </Row>) : undefined}
      </View>);
});
const { borderRadius, gap, marginEnd, marginTop, padding } = consts.Card;
//# sourceMappingURL=Card.jsx.map