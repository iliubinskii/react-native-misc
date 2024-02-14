"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.marginHorizontal = exports.marginBottom = exports.gap = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_common_components_1 = require("../common-common-components");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("ActionToggleButtons", ({ start = false, style, ...props }) => (<common_common_components_1.Row style={[
        {
            gap: exports.gap,
            marginBottom: exports.marginBottom,
            marginEnd: start ? undefined : exports.marginHorizontal,
            marginStart: start ? exports.marginHorizontal : undefined
        },
        style
    ]} {...props}/>));
_a = core_1.consts.Group.ActionToggleButtons, exports.gap = _a.gap, exports.marginBottom = _a.marginBottom, exports.marginHorizontal = _a.marginHorizontal;
//# sourceMappingURL=ActionToggleButtons.jsx.map