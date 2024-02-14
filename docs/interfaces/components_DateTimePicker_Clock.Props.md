[React Native library](../index.md) / [Exports](../modules.md) / [components/DateTimePicker/Clock](../modules/components_DateTimePicker_Clock.md) / Props

# Interface: Props

[components/DateTimePicker/Clock](../modules/components_DateTimePicker_Clock.md).Props

## Table of contents

### Properties

- [SelectTimeRangeHint](components_DateTimePicker_Clock.Props.md#selecttimerangehint)
- [date](components_DateTimePicker_Clock.Props.md#date)
- [dateFormat](components_DateTimePicker_Clock.Props.md#dateformat)
- [dateFrom](components_DateTimePicker_Clock.Props.md#datefrom)
- [fullDaysMode](components_DateTimePicker_Clock.Props.md#fulldaysmode)
- [mode](components_DateTimePicker_Clock.Props.md#mode)
- [onChange](components_DateTimePicker_Clock.Props.md#onchange)
- [pickMinutes](components_DateTimePicker_Clock.Props.md#pickminutes)
- [step](components_DateTimePicker_Clock.Props.md#step)
- [timeFormat](components_DateTimePicker_Clock.Props.md#timeformat)

## Properties

### SelectTimeRangeHint

• `Optional` `Readonly` **SelectTimeRangeHint**: `FunctionComponent`\<[`HintProps`](components_DateTimePicker_DateTimePicker_common.HintProps.md)\>

___

### date

• `Readonly` **date**: `string`

___

### dateFormat

• `Readonly` **dateFormat**: `string`

___

### dateFrom

• `Readonly` **dateFrom**: `string`

___

### fullDaysMode

• `Readonly` **fullDaysMode**: `boolean`

___

### mode

• `Readonly` **mode**: [`Mode`](../enums/components_DateTimePicker_DateTimePicker_common.Mode.md)

___

### onChange

• `Readonly` **onChange**: (`date`: `string`, `dateFrom`: `string`, `fullDaysMode`: `boolean`) => `void`

Handles dates setRangeEnd.

**`Param`**

Date.

**`Param`**

Date from.

**`Param`**

Full days mode.

#### Type declaration

▸ (`date`, `dateFrom`, `fullDaysMode`): `void`

Handles dates setRangeEnd.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | Date. |
| `dateFrom` | `string` | Date from. |
| `fullDaysMode` | `boolean` | Full days mode. |

##### Returns

`void`

___

### pickMinutes

• `Readonly` **pickMinutes**: () => `void`

Picks minutes.

#### Type declaration

▸ (): `void`

Picks minutes.

##### Returns

`void`

___

### step

• `Readonly` **step**: [`hours`](../enums/components_DateTimePicker_DateTimePicker_common.Step.md#hours) \| [`minutes`](../enums/components_DateTimePicker_DateTimePicker_common.Step.md#minutes)

___

### timeFormat

• `Readonly` **timeFormat**: `string`
