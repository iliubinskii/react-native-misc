import { G, Line, Rect, Svg, TSpan, Text } from "react-native-svg";
import { Overflow, SvgFontWeight, SvgTextAnchor } from "../../../types";
import { a, is } from "typescript-misc";
import React from "react";
import { consts } from "../../../core";
import { memo } from "react-misc";
export default memo("BaseChart", ({ bearBarColor, bullBarColor, color, data, getLabel, height, maxHorizontalCells, minLabelsDistance, minLabelsEdgeDistance, paddingBottom, paddingEnd, paddingStart, paddingTop, range0, range1, selectedColor, selectedIndex, verticalLabels, width }) => {
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
    const slice = React.useMemo(() => data.slice(range0, range1), [data, range0, range1]);
    return (<Svg height={height} style={{ overflow: Overflow.hidden }} width={width}>
        <G transform={`translate(${paddingStart},${height - paddingBottom})`}>
          <G transform="scale(1,-1)">
            {is.not.empty(selectedIndex) && data[selectedIndex] ? (<Rect fill={selectedColor} height={dataHeight} width={barWidth} x={(selectedIndex - range0) * barWidth} y={0}/>) : undefined}
            <G stroke={color} strokeWidth={axisThickness}>
              <Line x1={0} x2={dataWidth} y1={0} y2={0}/>
              <Line x1={0} x2={0} y1={0} y2={dataHeight}/>
            </G>
            <G stroke={color} strokeWidth={gridThickness}>
              {verticalLabels.map(({ value }) => (<Line key={value} x1={0} x2={dataWidth} y1={value * dataHeight} y2={value * dataHeight}/>))}
              {a
            .fromRange(0, range1 - range0)
            .map(index => index >= gridStart &&
            index <= gridEnd &&
            index % gridFrequency === gridStart % gridFrequency ? (<Line key={index} x1={(index + gridOffset) * barWidth} x2={(index + gridOffset) * barWidth} y1={0} y2={dataHeight}/>) : undefined)}
            </G>
            {slice.map(({ closing, key, opening }, index) => (<Rect fill={closing >= opening ? bullBarColor : bearBarColor} height={Math.max(Math.abs(closing - opening) * dataHeight, 1)} key={key} width={barThickness * barWidth} x={(index + 0.5 * (1 - barThickness)) * barWidth} y={Math.min(opening, closing) * dataHeight}/>))}
          </G>
          <Text fill={color} fontFamily={fontFamily} fontSize={fontSize} fontWeight={SvgFontWeight.n400} x={paddingStart}>
            {verticalLabels.map(({ label, value }) => (<TSpan dy={dy.verticalLabels} key={value} textAnchor={SvgTextAnchor.end} x={-horizontalTextMargin} y={-value * dataHeight}>
                {label}
              </TSpan>))}
            {slice.map(({ key }, index) => index >= labelsStart &&
            index <= labelsEnd &&
            index % labelsFrequency === labelsStart % labelsFrequency ? (<TSpan dy={dy.horizontalLabels} key={key} textAnchor={SvgTextAnchor.middle} x={(index + 0.5) * barWidth} y={verticalTextMargin}>
                  {getLabel(key)}
                </TSpan>) : undefined)}
          </Text>
        </G>
      </Svg>);
});
const { axisThickness, barThickness, dy, fontFamily, fontSize, gridThickness, horizontalTextMargin, verticalTextMargin } = consts.CandlestickChart.BaseChart;
//# sourceMappingURL=BaseChart.jsx.map