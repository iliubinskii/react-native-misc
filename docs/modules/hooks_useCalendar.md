[React Native library](../index.md) / [Exports](../modules.md) / hooks/useCalendar

# Module: hooks/useCalendar

## Table of contents

### Enumerations

- [DayType](../enums/hooks_useCalendar.DayType.md)

### Interfaces

- [Calendar](../interfaces/hooks_useCalendar.Calendar.md)
- [Day](../interfaces/hooks_useCalendar.Day.md)
- [ScopedWord](../interfaces/hooks_useCalendar.ScopedWord.md)
- [Week](../interfaces/hooks_useCalendar.Week.md)
- [WeekDay](../interfaces/hooks_useCalendar.WeekDay.md)

### Type Aliases

- [Days](hooks_useCalendar.md#days)
- [WeekDays](hooks_useCalendar.md#weekdays)
- [Weeks](hooks_useCalendar.md#weeks)

### Functions

- [useCalendar](hooks_useCalendar.md#usecalendar)

## Type Aliases

### Days

Ƭ **Days**: readonly [`Day`](../interfaces/hooks_useCalendar.Day.md)[]

___

### WeekDays

Ƭ **WeekDays**: readonly [`WeekDay`](../interfaces/hooks_useCalendar.WeekDay.md)[]

___

### Weeks

Ƭ **Weeks**: readonly [`Week`](../interfaces/hooks_useCalendar.Week.md)[]

## Functions

### useCalendar

▸ **useCalendar**(`month`, `weekStartsOn`, `workweekStartsOn`, `onDayPress?`): [`Calendar`](../interfaces/hooks_useCalendar.Calendar.md)

Calendar hook.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `month` | `string` | `undefined` | Month. |
| `weekStartsOn` | ``0`` \| ``1`` | `undefined` | Week starts on. |
| `workweekStartsOn` | ``0`` \| ``1`` | `undefined` | Workweek starts on. |
| `onDayPress` | (`date`: `string`) => `void` | `fn.noop` | Handles day press. |

#### Returns

[`Calendar`](../interfaces/hooks_useCalendar.Calendar.md)

Calendar variables.
