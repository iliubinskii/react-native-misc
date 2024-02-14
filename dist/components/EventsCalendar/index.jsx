"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_components_1 = require("../common-components");
const types_1 = require("../../types");
const react_misc_1 = require("react-misc");
const Day_1 = tslib_1.__importDefault(require("./Day"));
const typescript_misc_1 = require("typescript-misc");
const core_1 = require("../../core");
const hooks_1 = require("../../hooks");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("EventsCalendar", 
// eslint-disable-next-line prefer-arrow-callback -- Ok
function ({ borderBottom = false, borderEnd = false, borderStart = false, borderTop = false, getKey, getLabel, getTextStyle, isFeatured, items, month, onDayPress, onMonthChange, style, weekStartsOn, workweekStartsOn }) {
    const { weekDays, weeks } = (0, hooks_1.useCalendar)(month, weekStartsOn, workweekStartsOn, onDayPress);
    const { colors } = (0, contexts_1.useThemeExtended)();
    const datetime = (0, react_misc_1.useDatetime)();
    const onSwipeStart = React.useCallback(() => {
        onMonthChange(datetime.create(month).add(1, typescript_misc_1.TimeUnit.month).toString());
    }, [datetime, month, onMonthChange]);
    const onSwipeEnd = React.useCallback(() => {
        onMonthChange(datetime.create(month).sub(1, typescript_misc_1.TimeUnit.month).toString());
    }, [datetime, month, onMonthChange]);
    return (<common_components_1.GestureRecognizer onSwipeEnd={onSwipeEnd} onSwipeStart={onSwipeStart} style={[
            {
                borderBottomWidth: borderBottom ? borderWidth : undefined,
                borderColor: colors.outline,
                borderEndWidth: borderEnd ? borderWidth : undefined,
                borderStartWidth: borderStart ? borderWidth : undefined,
                borderTopWidth: borderTop ? borderWidth : undefined
            },
            style
        ]}>
        <common_components_1.Row>
          {weekDays.map(({ day, label }) => (<common_components_1.Text key={day} style={{
                color: colors.fade,
                flex: 1,
                paddingVertical,
                textAlign: types_1.TextAlign.center
            }} variant={types_1.TextVariant.bodySmall}>
              {label}
            </common_components_1.Text>))}
        </common_components_1.Row>
        {weeks.map(({ days, week }) => (<common_components_1.Row key={week} style={{
                borderColor: colors.outline,
                borderTopWidth: borderWidth,
                flex: 1
            }}>
            {days.map(({ date, day, onPress, type }, index) => (<Day_1.default date={date} day={day} getKey={getKey} getLabel={getLabel} getTextStyle={getTextStyle} index={index} isFeatured={isFeatured} items={items[date]} key={day} onPress={onPress} type={type}/>))}
          </common_components_1.Row>))}
      </common_components_1.GestureRecognizer>);
});
const { borderWidth, paddingVertical } = core_1.consts.EventsCalendar;
//# sourceMappingURL=index.jsx.map