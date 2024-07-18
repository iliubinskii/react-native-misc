"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../../../types");
const hooks_1 = require("../../../hooks");
const Item_1 = tslib_1.__importDefault(require("./Item"));
const react_native_1 = require("react-native");
const react_1 = tslib_1.__importDefault(require("react"));
const common_components_1 = require("../../common-components");
const core_1 = require("../../../core");
const react_misc_1 = require("react-misc");
const contexts_1 = require("../../../contexts");
exports.default = (0, react_misc_1.memo)("Day", function Day({ day, getKey, getLabel, getTextStyle, index, isFeatured, items = [], onLongPress, onPress, onPressIn, onPressOut, type }) {
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
    return (<react_native_1.Pressable onLongPress={onLongPress} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={{
            borderColor: colors.outline,
            borderStartWidth: index ? borderWidth : 0,
            flex: 1,
            gap,
            overflow: types_1.Overflow.hidden,
            padding
        }}>
      <common_components_1.Text style={{ color, textAlign: types_1.TextAlign.center }} variant={types_1.TextVariant.titleSmall}>
        {day}
      </common_components_1.Text>
      {items
            .filter(item => isFeatured(item))
            .map(item => (<Item_1.default getLabel={getLabel} getTextStyle={getTextStyle} isFeatured item={item} key={getKey(item)}/>))}
      {items
            .filter(item => !isFeatured(item))
            .map(item => (<Item_1.default getLabel={getLabel} getTextStyle={getTextStyle} item={item} key={getKey(item)}/>))}
    </react_native_1.Pressable>);
});
const { Day: { gap, padding }, borderWidth } = core_1.consts.EventsCalendar;
//# sourceMappingURL=index.jsx.map