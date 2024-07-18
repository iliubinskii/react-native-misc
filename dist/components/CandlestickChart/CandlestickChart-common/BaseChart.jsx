"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_svg_1 = require("react-native-svg");
const types_1 = require("../../../types");
const typescript_misc_1 = require("typescript-misc");
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("BaseChart", ({ bearBarColor, bullBarColor, color, data, getLabel, height, maxHorizontalCells, minLabelsDistance, minLabelsEdgeDistance, paddingBottom, paddingEnd, paddingStart, paddingTop, range0, range1, selectedColor, selectedIndex, verticalLabels, width }) => {
    const dataHeight = height - paddingTop - paddingBottom;
    const dataWidth = width - paddingStart - paddingEnd;
    const barCount = range1 - range0;
    const barWidth = dataWidth / barCount;
    const gridFrequency = Math.ceil(barCount / maxHorizontalCells);
    const gridStart = gridFrequency - 1;
    const gridEnd = gridFrequency === 1 ? barCount - 2 : barCount - 1;
    const gridOffset = gridFrequency === 1 ? 1 : 0.5;
    const labelsDistance = minLabelsDistance;
    const labelsEdgeDistance = Math.max(minLabelsEdgeDistance - 0.5 * barWidth, 0);
    const labelsFrequency = Math.ceil(labelsDistance / barWidth);
    const labelsStart = Math.ceil(labelsEdgeDistance / barWidth);
    const labelsEnd = barCount - 1 - Math.ceil(labelsEdgeDistance / barWidth);
    const slice = react_1.default.useMemo(() => data.slice(range0, range1), [data, range0, range1]);
    return (<react_native_svg_1.Svg height={height} style={{ overflow: types_1.Overflow.hidden }} width={width}>
        <react_native_svg_1.G transform={`translate(${paddingStart},${height - paddingBottom})`}>
          <react_native_svg_1.G transform="scale(1,-1)">
            {typescript_misc_1.is.not.empty(selectedIndex) && data[selectedIndex] ? (<react_native_svg_1.Rect fill={selectedColor} height={dataHeight} width={barWidth} x={(selectedIndex - range0) * barWidth} y={0}/>) : undefined}
            <react_native_svg_1.G stroke={color} strokeWidth={axisThickness}>
              <react_native_svg_1.Line x1={0} x2={dataWidth} y1={0} y2={0}/>
              <react_native_svg_1.Line x1={0} x2={0} y1={0} y2={dataHeight}/>
            </react_native_svg_1.G>
            <react_native_svg_1.G stroke={color} strokeWidth={gridThickness}>
              {verticalLabels.map(({ value }) => (<react_native_svg_1.Line key={value} x1={0} x2={dataWidth} y1={value * dataHeight} y2={value * dataHeight}/>))}
              {typescript_misc_1.a
            .fromRange(0, range1 - range0)
            .map(index => index >= gridStart &&
            index <= gridEnd &&
            index % gridFrequency === gridStart % gridFrequency ? (<react_native_svg_1.Line key={index} x1={(index + gridOffset) * barWidth} x2={(index + gridOffset) * barWidth} y1={0} y2={dataHeight}/>) : undefined)}
            </react_native_svg_1.G>
            {slice.map(({ closing, key, opening }, index) => (<react_native_svg_1.Rect fill={closing >= opening ? bullBarColor : bearBarColor} height={Math.max(Math.abs(closing - opening) * dataHeight, 1)} key={key} width={barThickness * barWidth} x={(index + 0.5 * (1 - barThickness)) * barWidth} y={Math.min(opening, closing) * dataHeight}/>))}
          </react_native_svg_1.G>
          <react_native_svg_1.Text fill={color} fontFamily={fontFamily} fontSize={fontSize} fontWeight={types_1.SvgFontWeight.n400} x={paddingStart}>
            {verticalLabels.map(({ label, value }) => (<react_native_svg_1.TSpan dy={dy.verticalLabels} key={value} textAnchor={types_1.SvgTextAnchor.end} x={-horizontalTextMargin} y={-value * dataHeight}>
                {label}
              </react_native_svg_1.TSpan>))}
            {slice.map(({ key }, index) => index >= labelsStart &&
            index <= labelsEnd &&
            index % labelsFrequency === labelsStart % labelsFrequency ? (<react_native_svg_1.TSpan dy={dy.horizontalLabels} key={key} textAnchor={types_1.SvgTextAnchor.middle} x={(index + 0.5) * barWidth} y={verticalTextMargin}>
                  {getLabel(key)}
                </react_native_svg_1.TSpan>) : undefined)}
          </react_native_svg_1.Text>
        </react_native_svg_1.G>
      </react_native_svg_1.Svg>);
});
const { axisThickness, barThickness, dy, fontFamily, fontSize, gridThickness, horizontalTextMargin, verticalTextMargin } = core_1.consts.CandlestickChart.BaseChart;
//# sourceMappingURL=BaseChart.jsx.map