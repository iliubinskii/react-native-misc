"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_misc_1 = require("react-misc");
const BalloonMeter_1 = tslib_1.__importDefault(require("./BalloonMeter"));
const MeasuredBalloon_1 = tslib_1.__importDefault(require("./MeasuredBalloon"));
const react_native_paper_1 = require("react-native-paper");
const hooks_1 = require("../../hooks");
const hooks_with_contexts_1 = require("../../hooks-with-contexts");
exports.default = (0, react_misc_1.memo)("Balloon", ({ anchor, visible, ...props }) => {
    const { clearLayout, layout, onLayout } = (0, hooks_1.useLayout)();
    const windowDimensions = (0, hooks_with_contexts_1.useWindowDimensions)();
    (0, react_misc_1.useRealEffect)(() => {
        if (visible) {
            // Skip
        }
        else
            clearLayout();
    }, [visible]);
    return (<react_native_paper_1.Portal>
      {anchor && layout ? (<MeasuredBalloon_1.default anchor={anchor} layout={layout} visible={visible} windowDimensions={windowDimensions} {...props}/>) : undefined}
      {visible ? <BalloonMeter_1.default onLayout={onLayout} {...props}/> : undefined}
    </react_native_paper_1.Portal>);
});
//# sourceMappingURL=index.jsx.map