"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../../../types");
const hooks_1 = require("../../../hooks");
const react_native_1 = require("react-native");
const react_1 = tslib_1.__importDefault(require("react"));
const common_components_1 = require("../../common-components");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Day", ({ day, type }) => {
    const { colors } = (0, contexts_1.useThemeExtended)();
    const color = react_1.default.useMemo(() => {
        switch (type) {
            case hooks_1.CalendarDayType.offDay: {
                return colors.calendar.offDay;
            }
            case hooks_1.CalendarDayType.padding: {
                return colors.calendar.padding;
            }
            case hooks_1.CalendarDayType.today: {
                return colors.calendar.today;
            }
            case hooks_1.CalendarDayType.workday: {
                return colors.calendar.workday;
            }
        }
    }, [colors, type]);
    return (<react_native_1.Pressable style={{
            alignItems: types_1.AlignItems.center,
            height: size,
            justifyContent: types_1.JustifyContent.center,
            width: size
        }}>
      <common_components_1.Text style={{ color }} variant={types_1.TextVariant.titleSmall}>
        {day}
      </common_components_1.Text>
    </react_native_1.Pressable>);
});
const { size } = core_1.consts.DateTimePicker.Calendar;
//# sourceMappingURL=Day.jsx.map