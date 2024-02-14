"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("../common-components");
const core_1 = require("../../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("Select", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function (props) {
    const { colors } = (0, contexts_1.useThemeExtended)();
    return (<common_components_1.Select backgroundColor={colors.dense.background} foregroundColor={colors.dense.foreground} rowStyle={{ borderWidth: 0, height }} {...props}/>);
});
const { height } = core_1.consts.Dense.Select;
//# sourceMappingURL=Select.jsx.map