import * as React from "react";
import { G, Path, Svg } from "react-native-svg";
import { Position } from "../../../types";
import { consts } from "../../../core";
import { isRtl } from "../../../consts";
import { memo } from "react-misc";
import { useThemeExtended } from "../../../contexts";

export default memo(
  "Background",
  ({ height, horizontalPosition, verticalPosition, width }: Props) => {
    const { colors, roundness } = useThemeExtended();

    const horizontalPositionBiDir = React.useMemo(() => {
      switch (horizontalPosition) {
        case HorizontalPosition.center:
          return HorizontalPositionBiDir.center;

        case HorizontalPosition.flexEnd:
          return isRtl
            ? HorizontalPositionBiDir.left
            : HorizontalPositionBiDir.right;

        case HorizontalPosition.flexStart:
          return isRtl
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

    return (
      <Svg
        height={height + triangleHeight + 2 * svgPadding}
        style={{ position: Position.absolute }}
        width={width + 2 * svgPadding}
      >
        <G transform={transform}>
          {shadow.map(n => (
            <Path
              d={d}
              key={n}
              stroke={colors.svgShadow}
              strokeWidth={strokeWidth + n}
            />
          ))}
          <Path
            d={d}
            fill={colors.surface}
            stroke={colors.outline}
            strokeWidth={strokeWidth}
          />
        </G>
      </Svg>
    );
  }
);

export enum HorizontalPosition {
  center = "center",
  flexEnd = "flexEnd",
  flexStart = "flexStart"
}

export enum VerticalPosition {
  bottom = "bottom",
  top = "top"
}

/**
 * @internal
 */
export interface Props {
  readonly height: number;
  readonly horizontalPosition: HorizontalPosition;
  readonly verticalPosition: VerticalPosition;
  readonly width: number;
}

enum HorizontalPositionBiDir {
  center = "center",
  left = "left",
  right = "right"
}

const {
  roundnessFactor,
  shadow,
  strokeWidth,
  svgPadding,
  triangleHeight,
  triangleOffset,
  triangleWidth
} = consts.Balloon.MeasuredBalloon.Background;
