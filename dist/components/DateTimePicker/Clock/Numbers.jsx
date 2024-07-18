"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../../../types");
const react_1 = tslib_1.__importDefault(require("react"));
const common_components_1 = require("../../common-components");
const react_native_1 = require("react-native");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const consts_1 = require("../../../consts");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Numbers", () => {
    const { colors } = (0, contexts_1.useThemeExtended)();
    return (<>
      {numbers.map((label, index) => {
            const angle = 2 * Math.PI * (index / 12);
            const radius = 0.5 * size - 0.5 * buttonSize;
            return (<react_native_1.View key={label} style={{
                    alignItems: types_1.AlignItems.center,
                    height: buttonSize,
                    justifyContent: types_1.JustifyContent.center,
                    position: types_1.Position.absolute,
                    start: radius * (1 + consts_1.rtlSign * Math.sin(angle)),
                    top: radius * (1 - Math.cos(angle)),
                    transform: [{ rotate: `${angle}rad` }],
                    width: buttonSize,
                    zIndex: 2
                }}>
            <common_components_1.Text style={{ color: colors.secondLine }} variant={types_1.TextVariant.titleSmall}>
              {label}
            </common_components_1.Text>
          </react_native_1.View>);
        })}
    </>);
});
const { buttonSize, numbers, size } = core_1.consts.DateTimePicker.Clock;
//# sourceMappingURL=Numbers.jsx.map