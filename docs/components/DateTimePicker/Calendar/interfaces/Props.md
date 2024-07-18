[**React Native library**](../../../../index.md) • **Docs**

***

[React Native library](../../../../modules.md) / [components/DateTimePicker/Calendar](../index.md) / Props

# Interface: Props

**`Internal`**

## Properties

### SelectDateRangeHint?

> `readonly` `optional` **SelectDateRangeHint**: `FunctionComponent`\<[`HintProps`](../../DateTimePicker-common/interfaces/HintProps.md)\>

***

### date

> `readonly` **date**: `string`

***

### dateFrom

> `readonly` **dateFrom**: `string`

***

### month

> `readonly` **month**: `string`

***

### onChange()

> `readonly` **onChange**: (`date`, `dateFrom`, `fullDaysMode`) => `void`

Handles dates setRangeEnd.

#### Parameters

• **date**: `string`

Date.

• **dateFrom**: `string`

Date from.

• **fullDaysMode**: `boolean`

Full days mode.

#### Returns

`void`

***

### onMonthChange()

> `readonly` **onMonthChange**: (`month`) => `void`

Handles month setRangeEnd.

#### Parameters

• **month**: `string`

Month.

#### Returns

`void`

***

### pickHours()

> `readonly` **pickHours**: () => `void`

Picks hours.

#### Returns

`void`

***

### weekStartsOn

> `readonly` **weekStartsOn**: `0` \| `1`

***

### workweekStartsOn

> `readonly` **workweekStartsOn**: `0` \| `1`
