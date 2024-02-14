"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const types_1 = require("../../../types");
const typescript_misc_1 = require("typescript-misc");
const Background_1 = tslib_1.__importStar(require("./Background"));
const common_components_1 = require("../../common-components");
const react_native_1 = require("react-native");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("MeasuredBalloon", ({ anchor: { x, y }, children, keyboardHeightFactor = 0, layout, onClose, style, visible, width, windowDimensions }) => {
    const horizontalPosition = React.useMemo(() => {
        if (x < 0.5 * windowDimensions.width &&
            x < windowDimensions.width - layout.width - margin)
            return Background_1.HorizontalPosition.flexStart;
        if (x > 0.5 * windowDimensions.width && x > layout.width + margin)
            return Background_1.HorizontalPosition.flexEnd;
        return Background_1.HorizontalPosition.center;
    }, [windowDimensions.width, layout, x]);
    const verticalPosition = React.useMemo(() => {
        const average = typescript_misc_1.is.number(y) ? y : 0.5 * (y.bottom + y.top);
        return average < 0.5 * windowDimensions.height
            ? Background_1.VerticalPosition.bottom
            : Background_1.VerticalPosition.top;
    }, [windowDimensions.height, y]);
    const containerStyle = React.useMemo(() => ({
        left: (0, typescript_misc_1.evaluate)(() => {
            switch (horizontalPosition) {
                case Background_1.HorizontalPosition.flexStart: {
                    const offset = 0;
                    return x - offset - svgPadding + 0.5 * strokeWidth;
                }
                case Background_1.HorizontalPosition.center: {
                    const offset = 0.5 * layout.width;
                    return x - offset - svgPadding;
                }
                case Background_1.HorizontalPosition.flexEnd: {
                    const offset = layout.width;
                    return x - offset - svgPadding - 0.5 * strokeWidth;
                }
            }
        }),
        top: (0, typescript_misc_1.evaluate)(() => {
            switch (verticalPosition) {
                case Background_1.VerticalPosition.bottom: {
                    const normalized = typescript_misc_1.is.number(y) ? y : y.bottom;
                    const offset = 0;
                    return normalized - offset - svgPadding + 0.5 * strokeWidth;
                }
                case Background_1.VerticalPosition.top: {
                    const normalized = typescript_misc_1.is.number(y) ? y : y.top;
                    const offset = layout.height + triangleHeight;
                    return normalized - offset - svgPadding - 0.5 * strokeWidth;
                }
            }
        })
    }), [horizontalPosition, layout, verticalPosition, x, y]);
    return (<common_components_1.Modal containerStyle={containerStyle} keyboardHeightFactor={keyboardHeightFactor} name="MeasuredBalloon" onClose={onClose} overlayStyle={{
            alignItems: types_1.AlignItems.flexStart,
            justifyContent: types_1.JustifyContent.flexStart
        }} visible={visible}>
        <react_native_1.View style={[
            {
                padding: svgPadding,
                paddingBottom: verticalPosition === Background_1.VerticalPosition.top
                    ? svgPadding + triangleHeight
                    : svgPadding,
                paddingTop: verticalPosition === Background_1.VerticalPosition.bottom
                    ? svgPadding + triangleHeight
                    : svgPadding
            },
            style
        ]}>
          <Background_1.default height={layout.height} horizontalPosition={horizontalPosition} verticalPosition={verticalPosition} width={layout.width}/>
          <react_native_1.View style={{ padding, width }}>{children}</react_native_1.View>
        </react_native_1.View>
      </common_components_1.Modal>);
});
const { MeasuredBalloon: { Background: { strokeWidth, svgPadding, triangleHeight } }, margin, padding } = core_1.consts.Balloon;
//# sourceMappingURL=index.jsx.map