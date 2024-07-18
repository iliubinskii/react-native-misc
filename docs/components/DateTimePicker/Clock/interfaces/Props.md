[**React Native library**](../../../../index.md) • **Docs**

***

[React Native library](../../../../modules.md) / [components/DateTimePicker/Clock](../index.md) / Props

# Interface: Props

**`Internal`**

## Properties

### SelectTimeRangeHint?

> `readonly` `optional` **SelectTimeRangeHint**: `FunctionComponent`\<[`HintProps`](../../DateTimePicker-common/interfaces/HintProps.md)\>

***

### date

> `readonly` **date**: `string`

***

### dateFormat

> `readonly` **dateFormat**: `string`

***

### dateFrom

> `readonly` **dateFrom**: `string`

***

### fullDaysMode

> `readonly` **fullDaysMode**: `boolean`

***

### mode

> `readonly` **mode**: [`Mode`](../../DateTimePicker-common/enumerations/Mode.md)

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

### pickMinutes()

> `readonly` **pickMinutes**: () => `void`

Picks minutes.

#### Returns

`void`

***

### step

> `readonly` **step**: [`hours`](../../DateTimePicker-common/enumerations/Step.md#hours) \| [`minutes`](../../DateTimePicker-common/enumerations/Step.md#minutes)

***

### timeFormat

> `readonly` **timeFormat**: `string`
