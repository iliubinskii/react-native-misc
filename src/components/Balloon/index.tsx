import * as React from "react";
import { memo, useRealEffect } from "react-misc";
import type { Anchor } from "./MeasuredBalloon";
import BalloonMeter from "./BalloonMeter";
import MeasuredBalloon from "./MeasuredBalloon";
import { Portal } from "react-native-paper";
import { useLayout } from "../../hooks";
import { useWindowDimensions } from "../../hooks-with-contexts";

export type { Anchor } from "./MeasuredBalloon";

export default memo("Balloon", ({ anchor, visible, ...props }: Props) => {
  const { clearLayout, layout, onLayout } = useLayout();

  const windowDimensions = useWindowDimensions();

  useRealEffect(() => {
    if (visible) {
      // Skip
    } else clearLayout();
  }, [visible]);

  return (
    <Portal>
      {anchor && layout ? (
        <MeasuredBalloon
          anchor={anchor}
          layout={layout}
          visible={visible}
          windowDimensions={windowDimensions}
          {...props}
        />
      ) : undefined}
      {visible ? <BalloonMeter onLayout={onLayout} {...props} /> : undefined}
    </Portal>
  );
});

/**
 * @internal
 */
export interface Props
  extends Omit<
    React.ComponentProps<typeof MeasuredBalloon>,
    "anchor" | "layout" | "windowDimensions"
  > {
  readonly anchor?: Anchor | undefined;
}
