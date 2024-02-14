import * as React from "react";
import { AlignItems, JustifyContent } from "../../../types";
import { evaluate, is } from "typescript-misc";
import Background, { HorizontalPosition, VerticalPosition } from "./Background";
import { Modal } from "../../common-components";
import { View } from "react-native";
import { consts } from "../../../core";
import { memo } from "react-misc";
export default memo("MeasuredBalloon", ({ anchor: { x, y }, children, keyboardHeightFactor = 0, layout, onClose, style, visible, width, windowDimensions }) => {
    const horizontalPosition = React.useMemo(() => {
        if (x < 0.5 * windowDimensions.width &&
            x < windowDimensions.width - layout.width - margin)
            return HorizontalPosition.flexStart;
        if (x > 0.5 * windowDimensions.width && x > layout.width + margin)
            return HorizontalPosition.flexEnd;
        return HorizontalPosition.center;
    }, [windowDimensions.width, layout, x]);
    const verticalPosition = React.useMemo(() => {
        const average = is.number(y) ? y : 0.5 * (y.bottom + y.top);
        return average < 0.5 * windowDimensions.height
            ? VerticalPosition.bottom
            : VerticalPosition.top;
    }, [windowDimensions.height, y]);
    const containerStyle = React.useMemo(() => ({
        left: evaluate(() => {
            switch (horizontalPosition) {
                case HorizontalPosition.flexStart: {
                    const offset = 0;
                    return x - offset - svgPadding + 0.5 * strokeWidth;
                }
                case HorizontalPosition.center: {
                    const offset = 0.5 * layout.width;
                    return x - offset - svgPadding;
                }
                case HorizontalPosition.flexEnd: {
                    const offset = layout.width;
                    return x - offset - svgPadding - 0.5 * strokeWidth;
                }
            }
        }),
        top: evaluate(() => {
            switch (verticalPosition) {
                case VerticalPosition.bottom: {
                    const normalized = is.number(y) ? y : y.bottom;
                    const offset = 0;
                    return normalized - offset - svgPadding + 0.5 * strokeWidth;
                }
                case VerticalPosition.top: {
                    const normalized = is.number(y) ? y : y.top;
                    const offset = layout.height + triangleHeight;
                    return normalized - offset - svgPadding - 0.5 * strokeWidth;
                }
            }
        })
    }), [horizontalPosition, layout, verticalPosition, x, y]);
    return (<Modal containerStyle={containerStyle} keyboardHeightFactor={keyboardHeightFactor} name="MeasuredBalloon" onClose={onClose} overlayStyle={{
            alignItems: AlignItems.flexStart,
            justifyContent: JustifyContent.flexStart
        }} visible={visible}>
        <View style={[
            {
                padding: svgPadding,
                paddingBottom: verticalPosition === VerticalPosition.top
                    ? svgPadding + triangleHeight
                    : svgPadding,
                paddingTop: verticalPosition === VerticalPosition.bottom
                    ? svgPadding + triangleHeight
                    : svgPadding
            },
            style
        ]}>
          <Background height={layout.height} horizontalPosition={horizontalPosition} verticalPosition={verticalPosition} width={layout.width}/>
          <View style={{ padding, width }}>{children}</View>
        </View>
      </Modal>);
});
const { MeasuredBalloon: { Background: { strokeWidth, svgPadding, triangleHeight } }, margin, padding } = consts.Balloon;
//# sourceMappingURL=index.jsx.map