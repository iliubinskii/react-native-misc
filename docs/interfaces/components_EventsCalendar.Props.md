[React Native library](../index.md) / [Exports](../modules.md) / [components/EventsCalendar](../modules/components_EventsCalendar.md) / Props

# Interface: Props\<T\>

[components/EventsCalendar](../modules/components_EventsCalendar.md).Props

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ViewStyle`](types_CommonNativeProps.ViewStyle.md)

- `Pick`\<`React.ComponentProps`\<typeof [`default`](../modules/components_EventsCalendar_Day.md#default)\>, ``"getKey"`` \| ``"getLabel"`` \| ``"getTextStyle"`` \| ``"isFeatured"``\>

  ↳ **`Props`**

## Table of contents

### Properties

- [borderBottom](components_EventsCalendar.Props.md#borderbottom)
- [borderEnd](components_EventsCalendar.Props.md#borderend)
- [borderStart](components_EventsCalendar.Props.md#borderstart)
- [borderTop](components_EventsCalendar.Props.md#bordertop)
- [getKey](components_EventsCalendar.Props.md#getkey)
- [getLabel](components_EventsCalendar.Props.md#getlabel)
- [getTextStyle](components_EventsCalendar.Props.md#gettextstyle)
- [isFeatured](components_EventsCalendar.Props.md#isfeatured)
- [items](components_EventsCalendar.Props.md#items)
- [month](components_EventsCalendar.Props.md#month)
- [onDayPress](components_EventsCalendar.Props.md#ondaypress)
- [onMonthChange](components_EventsCalendar.Props.md#onmonthchange)
- [style](components_EventsCalendar.Props.md#style)
- [weekStartsOn](components_EventsCalendar.Props.md#weekstartson)
- [workweekStartsOn](components_EventsCalendar.Props.md#workweekstartson)

## Properties

### borderBottom

• `Optional` `Readonly` **borderBottom**: `booleanU`

___

### borderEnd

• `Optional` `Readonly` **borderEnd**: `booleanU`

___

### borderStart

• `Optional` `Readonly` **borderStart**: `booleanU`

___

### borderTop

• `Optional` `Readonly` **borderTop**: `booleanU`

___

### getKey

• `Readonly` **getKey**: (`item`: `T`) => `NumStr`

Extracts key.

**`Param`**

Item.

#### Type declaration

▸ (`item`): `NumStr`

Extracts key.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | Item. |

##### Returns

`NumStr`

Key.

#### Inherited from

Pick.getKey

___

### getLabel

• `Readonly` **getLabel**: (`item`: `T`) => `string`

Extracts label.

**`Param`**

Item.

#### Type declaration

▸ (`item`): `string`

Extracts label.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | Item. |

##### Returns

`string`

Label.

#### Inherited from

Pick.getLabel

___

### getTextStyle

• `Optional` `Readonly` **getTextStyle**: (`item`: `T`) => `undefined` \| `TextStyle`

Returns text style for an item.

**`Param`**

Item.

#### Type declaration

▸ (`item`): `undefined` \| `TextStyle`

Returns text style for an item.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | Item. |

##### Returns

`undefined` \| `TextStyle`

Text style.

#### Inherited from

Pick.getTextStyle

___

### isFeatured

• `Readonly` **isFeatured**: (`item`: `T`) => `boolean`

Checks if item is featured.

**`Param`**

Item.

#### Type declaration

▸ (`item`): `boolean`

Checks if item is featured.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | Item. |

##### Returns

`boolean`

_True_ if item is featured, _false_ otherwise.

#### Inherited from

Pick.isFeatured

___

### items

• `Readonly` **items**: `IndexedRecord`\<readonly `T`[]\>

___

### month

• `Readonly` **month**: `string`

___

### onDayPress

• `Optional` `Readonly` **onDayPress**: (`date`: `string`) => `void`

Handles day press.

#### Type declaration

▸ (`date`): `void`

Handles day press.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

##### Returns

`void`

___

### onMonthChange

• `Readonly` **onMonthChange**: (`month`: `string`) => `void`

Handles month change.

**`Param`**

Month.

#### Type declaration

▸ (`month`): `void`

Handles month change.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `month` | `string` | Month. |

##### Returns

`void`

___

### style

• `Optional` `Readonly` **style**: `StyleProp`\<`ViewStyle`\>

#### Inherited from

[ViewStyle](types_CommonNativeProps.ViewStyle.md).[style](types_CommonNativeProps.ViewStyle.md#style)

___

### weekStartsOn

• `Readonly` **weekStartsOn**: ``0`` \| ``1``

___

### workweekStartsOn

• `Readonly` **workweekStartsOn**: ``0`` \| ``1``
