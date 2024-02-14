"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("../common-components");
const typescript_misc_1 = require("typescript-misc");
const Tab_1 = tslib_1.__importDefault(require("./Tab"));
const core_1 = require("../../core");
const react_misc_1 = require("react-misc");
const functions_1 = require("../../functions");
const hooks_with_contexts_1 = require("../../hooks-with-contexts");
exports.default = (0, react_misc_1.memo)("SwipeableTabBar", ({ descriptors, getPage = () => undefined, height, iconSize, onPageChange = typescript_misc_1.fn.noop, pageCount, pageSize, state: { index, routeNames, routes } }) => {
    const { width } = (0, hooks_with_contexts_1.useWindowDimensions)();
    const range = (pageCount - 1) * width;
    const page = getPage(index, routeNames) ?? Math.floor(index / pageSize);
    const onScrollEnd = React.useCallback((offset) => {
        onPageChange(-Math.round(offset / width));
    }, [onPageChange, width]);
    return (<common_components_1.AnimatedScrollView direction={common_components_1.AnimatedScrollViewDirection.row} height={height} initialOffset={-page * width} largeSwipeSize={width} largeSwipeStopInterval={width} max={0} min={-range} onScrollEnd={onScrollEnd} smallSwipeSize={width} smallSwipeStopInterval={width} snapAnimation={functions_1.springAnimation} snapInterval={width} swipeAnimation={functions_1.springAnimation} toggleThreshold={toggleThreshold} width={width}>
        <common_components_1.Row style={{ width: pageCount * width }}>
          {routes.slice(0, pageCount * pageSize).map(({ key }) => {
            const descriptor = descriptors[key];
            typescript_misc_1.assert.not.empty(descriptor, `Missing descriptor: ${key}`);
            return (<Tab_1.default descriptor={descriptor} height={height} iconSize={iconSize} key={key}/>);
        })}
        </common_components_1.Row>
      </common_components_1.AnimatedScrollView>);
});
const { toggleThreshold } = core_1.consts.SwipeableTabBar;
//# sourceMappingURL=index.jsx.map