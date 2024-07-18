[**React Native library**](../../../index.md) • **Docs**

***

[React Native library](../../../modules.md) / [components/DateTimePicker](../index.md) / Props

# Interface: Props

**`Internal`**

## Extends

- `Closeable`

## Properties

### SelectDateRangeHint?

> `readonly` `optional` **SelectDateRangeHint**: `FunctionComponent`\<[`HintProps`](../DateTimePicker-common/interfaces/HintProps.md)\>

***

### SelectTimeRangeHint?

> `readonly` `optional` **SelectTimeRangeHint**: `FunctionComponent`\<[`HintProps`](../DateTimePicker-common/interfaces/HintProps.md)\>

***

### date?

> `readonly` `optional` **date**: `stringU`

***

### dateFormat

> `readonly` **dateFormat**: `string`

***

### dateFrom?

> `readonly` `optional` **dateFrom**: `stringU`

***

### fullDaysMode?

> `readonly` `optional` **fullDaysMode**: `booleanU`

***

### mode?

> `readonly` `optional` **mode**: [`Mode`](../DateTimePicker-common/enumerations/Mode.md)

***

### onSave()?

> `readonly` `optional` **onSave**: (`date`, `dateFrom`, `fullDaysMode`) => `void`

Saves dates.

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

### onSaveTime()?

> `readonly` `optional` **onSaveTime**: (`time`?, `timeFrom`?) => `void`

Saves times.

#### Parameters

• **time?**: `number`

Time.

• **timeFrom?**: `number`

Time from.

#### Returns

`void`

***

### time?

> `readonly` `optional` **time**: `numberU`

***

### timeFormat

> `readonly` **timeFormat**: `string`

***

### timeFrom?

> `readonly` `optional` **timeFrom**: `numberU`

***

### weekStartsOn

> `readonly` **weekStartsOn**: `0` \| `1`

***

### workweekStartsOn

> `readonly` **workweekStartsOn**: `0` \| `1`
