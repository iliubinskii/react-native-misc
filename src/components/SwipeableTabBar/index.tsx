import {
  AnimatedScrollView,
  AnimatedScrollViewDirection,
  Row
} from "../common-components";
import { assert, fn } from "typescript-misc";
import type { numberU, strings } from "typescript-misc";
import type { BottomTabBar } from "@react-navigation/bottom-tabs";
import React from "react";
import Tab from "./Tab";
import { consts } from "../../core";
import { memo } from "react-misc";
import { springAnimation } from "../../functions";
import { useWindowDimensions } from "../../hooks-with-contexts";

export default memo(
  "SwipeableTabBar",
  ({
    descriptors,
    getPage = () => undefined,
    height,
    iconSize,
    onPageChange = fn.noop,
    pageCount,
    pageSize,
    state: { index, routeNames, routes }
  }: Props) => {
    const { width } = useWindowDimensions();

    const range = (pageCount - 1) * width;

    const page = getPage(index, routeNames) ?? Math.floor(index / pageSize);

    const onScrollEnd = React.useCallback(
      (offset: number) => {
        onPageChange(-Math.round(offset / width));
      },
      [onPageChange, width]
    );

    return (
      <AnimatedScrollView
        direction={AnimatedScrollViewDirection.row}
        height={height}
        initialOffset={-page * width}
        largeSwipeSize={width}
        largeSwipeStopInterval={width}
        max={0}
        min={-range}
        onScrollEnd={onScrollEnd}
        smallSwipeSize={width}
        smallSwipeStopInterval={width}
        snapAnimation={springAnimation}
        snapInterval={width}
        swipeAnimation={springAnimation}
        toggleThreshold={toggleThreshold}
        width={width}
      >
        <Row style={{ width: pageCount * width }}>
          {routes.slice(0, pageCount * pageSize).map(({ key }) => {
            const descriptor = descriptors[key];

            assert.not.empty(descriptor, `Missing descriptor: ${key}`);

            return (
              <Tab
                descriptor={descriptor}
                height={height}
                iconSize={iconSize}
                key={key}
              />
            );
          })}
        </Row>
      </AnimatedScrollView>
    );
  }
);

/**
 * @internal
 */
export interface Props extends React.ComponentProps<typeof BottomTabBar> {
  /**
   * Returns tab bar page.
   * @param index - Index.
   * @param names - Names.
   * @returns Tab bar page.
   */
  readonly getPage?: ((index: number, names: strings) => numberU) | undefined;
  readonly height: number;
  readonly iconSize: number;
  /**
   * Handles page change.
   * @param page - Page.
   */
  readonly onPageChange?: ((page: number) => void) | undefined;
  readonly pageCount: number;
  readonly pageSize: number;
}

const { toggleThreshold } = consts.SwipeableTabBar;
