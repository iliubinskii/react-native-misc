[React Native library](../index.md) / [Exports](../modules.md) / [components/DateTimePicker](../modules/components_DateTimePicker.md) / Props

# Interface: Props

[components/DateTimePicker](../modules/components_DateTimePicker.md).Props

## Hierarchy

- `Closeable`

  ↳ **`Props`**

## Table of contents

### Properties

- [SelectDateRangeHint](components_DateTimePicker.Props.md#selectdaterangehint)
- [SelectTimeRangeHint](components_DateTimePicker.Props.md#selecttimerangehint)
- [date](components_DateTimePicker.Props.md#date)
- [dateFormat](components_DateTimePicker.Props.md#dateformat)
- [dateFrom](components_DateTimePicker.Props.md#datefrom)
- [fullDaysMode](components_DateTimePicker.Props.md#fulldaysmode)
- [mode](components_DateTimePicker.Props.md#mode)
- [onSave](components_DateTimePicker.Props.md#onsave)
- [onSaveTime](components_DateTimePicker.Props.md#onsavetime)
- [time](components_DateTimePicker.Props.md#time)
- [timeFormat](components_DateTimePicker.Props.md#timeformat)
- [timeFrom](components_DateTimePicker.Props.md#timefrom)
- [weekStartsOn](components_DateTimePicker.Props.md#weekstartson)
- [workweekStartsOn](components_DateTimePicker.Props.md#workweekstartson)

## Properties

### SelectDateRangeHint

• `Optional` `Readonly` **SelectDateRangeHint**: `FunctionComponent`\<[`HintProps`](components_DateTimePicker_DateTimePicker_common.HintProps.md)\>

___

### SelectTimeRangeHint

• `Optional` `Readonly` **SelectTimeRangeHint**: `FunctionComponent`\<[`HintProps`](components_DateTimePicker_DateTimePicker_common.HintProps.md)\>

___

### date

• `Optional` `Readonly` **date**: `stringU`

___

### dateFormat

• `Readonly` **dateFormat**: `string`

___

### dateFrom

• `Optional` `Readonly` **dateFrom**: `stringU`

___

### fullDaysMode

• `Optional` `Readonly` **fullDaysMode**: `booleanU`

___

### mode

• `Optional` `Readonly` **mode**: [`Mode`](../enums/components_DateTimePicker_DateTimePicker_common.Mode.md)

___

### onSave

• `Optional` `Readonly` **onSave**: (`date`: `string`, `dateFrom`: `string`, `fullDaysMode`: `boolean`) => `void`

Saves dates.

**`Param`**

Date.

**`Param`**

Date from.

**`Param`**

Full days mode.

#### Type declaration

▸ (`date`, `dateFrom`, `fullDaysMode`): `void`

Saves dates.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | Date. |
| `dateFrom` | `string` | Date from. |
| `fullDaysMode` | `boolean` | Full days mode. |

##### Returns

`void`

___

### onSaveTime

• `Optional` `Readonly` **onSaveTime**: (`time?`: `number`, `timeFrom?`: `number`) => `void`

Saves times.

**`Param`**

Time.

**`Param`**

Time from.

#### Type declaration

▸ (`time?`, `timeFrom?`): `void`

Saves times.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `number` | Time. |
| `timeFrom?` | `number` | Time from. |

##### Returns

`void`

___

### time

• `Optional` `Readonly` **time**: `numberU`

___

### timeFormat

• `Readonly` **timeFormat**: `string`

___

### timeFrom

• `Optional` `Readonly` **timeFrom**: `numberU`

___

### weekStartsOn

• `Readonly` **weekStartsOn**: ``0`` \| ``1``

___

### workweekStartsOn

• `Readonly` **workweekStartsOn**: ``0`` \| ``1``
