"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalPosition = exports.HorizontalPosition = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_svg_1 = require("react-native-svg");
const types_1 = require("../../../types");
const core_1 = require("../../../core");
const consts_1 = require("../../../consts");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Background", ({ height, horizontalPosition, verticalPosition, width }) => {
    const { colors, roundness } = (0, contexts_1.useThemeExtended)();
    const horizontalPositionBiDir = React.useMemo(() => {
        switch (horizontalPosition) {
            case HorizontalPosition.center:
                return HorizontalPositionBiDir.center;
            case HorizontalPosition.flexEnd:
                return consts_1.isRtl
                    ? HorizontalPositionBiDir.left
                    : HorizontalPositionBiDir.right;
            case HorizontalPosition.flexStart:
                return consts_1.isRtl
                    ? HorizontalPositionBiDir.right
                    : HorizontalPositionBiDir.left;
        }
    }, [horizontalPosition]);
    const r = roundnessFactor * roundness;
    const transform = React.useMemo(() => {
        switch (verticalPosition) {
            case VerticalPosition.top: {
                const translateX = svgPadding;
                const translateY = svgPadding + height + triangleHeight;
                return `translate(${translateX},${translateY}),scale(1,-1)`;
            }
            case VerticalPosition.bottom: {
                const translateX = svgPadding;
                const translateY = svgPadding;
                return `translate(${translateX},${translateY})`;
            }
        }
    }, [height, verticalPosition]);
    const x1 = React.useMemo(() => {
        switch (horizontalPositionBiDir) {
            case HorizontalPositionBiDir.center:
                return 0.5 * width;
            case HorizontalPositionBiDir.left:
                return 0;
            case HorizontalPositionBiDir.right:
                return width;
        }
    }, [horizontalPositionBiDir, width]);
    const x2 = React.useMemo(() => {
        switch (horizontalPositionBiDir) {
            case HorizontalPositionBiDir.center:
                return 0.5 * width;
            case HorizontalPositionBiDir.left:
                return triangleOffset * width;
            case HorizontalPositionBiDir.right:
                return width - triangleOffset * width;
        }
    }, [horizontalPositionBiDir, width]);
    const d = `
      M ${x1} 0
      L ${x2 + 0.5 * triangleWidth * width} ${triangleHeight}
      L ${width - r} ${triangleHeight}
      A ${r} ${r} 0 0 1 ${width} ${triangleHeight + r}
      L ${width} ${triangleHeight + height - r}
      A ${r} ${r} 0 0 1 ${width - r} ${triangleHeight + height}
      L ${r} ${triangleHeight + height}
      A ${r} ${r} 0 0 1 ${0} ${triangleHeight + height - r}
      L ${0} ${triangleHeight + r}
      A ${r} ${r} 0 0 1 ${r} ${triangleHeight}
      L ${x2 - 0.5 * triangleWidth * width} ${triangleHeight}
      Z
    `;
    return (<react_native_svg_1.Svg height={height + triangleHeight + 2 * svgPadding} style={{ position: types_1.Position.absolute }} width={width + 2 * svgPadding}>
        <react_native_svg_1.G transform={transform}>
          {shadow.map(n => (<react_native_svg_1.Path d={d} key={n} stroke={colors.svgShadow} strokeWidth={strokeWidth + n}/>))}
          <react_native_svg_1.Path d={d} fill={colors.surface} stroke={colors.outline} strokeWidth={strokeWidth}/>
        </react_native_svg_1.G>
      </react_native_svg_1.Svg>);
});
var HorizontalPosition;
(function (HorizontalPosition) {
    HorizontalPosition["center"] = "center";
    HorizontalPosition["flexEnd"] = "flexEnd";
    HorizontalPosition["flexStart"] = "flexStart";
})(HorizontalPosition || (exports.HorizontalPosition = HorizontalPosition = {}));
var VerticalPosition;
(function (VerticalPosition) {
    VerticalPosition["bottom"] = "bottom";
    VerticalPosition["top"] = "top";
})(VerticalPosition || (exports.VerticalPosition = VerticalPosition = {}));
var HorizontalPositionBiDir;
(function (HorizontalPositionBiDir) {
    HorizontalPositionBiDir["center"] = "center";
    HorizontalPositionBiDir["left"] = "left";
    HorizontalPositionBiDir["right"] = "right";
})(HorizontalPositionBiDir || (HorizontalPositionBiDir = {}));
const { roundnessFactor, shadow, strokeWidth, svgPadding, triangleHeight, triangleOffset, triangleWidth } = core_1.consts.Balloon.MeasuredBalloon.Background;
//# sourceMappingURL=Background.jsx.map