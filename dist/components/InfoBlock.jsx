"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const core_1 = require("../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../contexts");
exports.default = (0, react_misc_1.memo)("InfoBlock", ({ style, ...props }) => {
    const { colors, roundness } = (0, contexts_1.useThemeExtended)();
    return (<react_native_1.View style={[
            {
                borderColor: colors.outline,
                borderRadius: roundness,
                borderWidth,
                padding
            },
            style
        ]} {...props}/>);
});
const { borderWidth, padding } = core_1.consts.InfoBlock;
//# sourceMappingURL=InfoBlock.jsx.map