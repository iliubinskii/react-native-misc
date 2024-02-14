[React Native library](../index.md) / [Exports](../modules.md) / [components/DateTimePicker/Calendar](../modules/components_DateTimePicker_Calendar.md) / Props

# Interface: Props

[components/DateTimePicker/Calendar](../modules/components_DateTimePicker_Calendar.md).Props

## Table of contents

### Properties

- [SelectDateRangeHint](components_DateTimePicker_Calendar.Props.md#selectdaterangehint)
- [date](components_DateTimePicker_Calendar.Props.md#date)
- [dateFrom](components_DateTimePicker_Calendar.Props.md#datefrom)
- [month](components_DateTimePicker_Calendar.Props.md#month)
- [onChange](components_DateTimePicker_Calendar.Props.md#onchange)
- [onMonthChange](components_DateTimePicker_Calendar.Props.md#onmonthchange)
- [pickHours](components_DateTimePicker_Calendar.Props.md#pickhours)
- [weekStartsOn](components_DateTimePicker_Calendar.Props.md#weekstartson)
- [workweekStartsOn](components_DateTimePicker_Calendar.Props.md#workweekstartson)

## Properties

### SelectDateRangeHint

• `Optional` `Readonly` **SelectDateRangeHint**: `FunctionComponent`\<[`HintProps`](components_DateTimePicker_DateTimePicker_common.HintProps.md)\>

___

### date

• `Readonly` **date**: `string`

___

### dateFrom

• `Readonly` **dateFrom**: `string`

___

### month

• `Readonly` **month**: `string`

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

### onMonthChange

• `Readonly` **onMonthChange**: (`month`: `string`) => `void`

Handles month setRangeEnd.

**`Param`**

Month.

#### Type declaration

▸ (`month`): `void`

Handles month setRangeEnd.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `month` | `string` | Month. |

##### Returns

`void`

___

### pickHours

• `Readonly` **pickHours**: () => `void`

Picks hours.

#### Type declaration

▸ (): `void`

Picks hours.

##### Returns

`void`

___

### weekStartsOn

• `Readonly` **weekStartsOn**: ``0`` \| ``1``

___

### workweekStartsOn

• `Readonly` **workweekStartsOn**: ``0`` \| ``1``
