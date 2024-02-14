[React Native library](../index.md) / [Exports](../modules.md) / [components/EventsCalendar/Day](../modules/components_EventsCalendar_Day.md) / Props

# Interface: Props\<T\>

[components/EventsCalendar/Day](../modules/components_EventsCalendar_Day.md).Props

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Pressable`

- `Pick`\<`React.ComponentProps`\<typeof [`default`](../modules/components_EventsCalendar_Day_Item.md#default)\>, ``"getLabel"`` \| ``"getTextStyle"``\>

  ↳ **`Props`**

## Table of contents

### Properties

- [date](components_EventsCalendar_Day.Props.md#date)
- [day](components_EventsCalendar_Day.Props.md#day)
- [getKey](components_EventsCalendar_Day.Props.md#getkey)
- [getLabel](components_EventsCalendar_Day.Props.md#getlabel)
- [getTextStyle](components_EventsCalendar_Day.Props.md#gettextstyle)
- [index](components_EventsCalendar_Day.Props.md#index)
- [isFeatured](components_EventsCalendar_Day.Props.md#isfeatured)
- [items](components_EventsCalendar_Day.Props.md#items)
- [type](components_EventsCalendar_Day.Props.md#type)

## Properties

### date

• `Readonly` **date**: `string`

___

### day

• `Readonly` **day**: `number`

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

### index

• `Readonly` **index**: `number`

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

___

### items

• `Optional` `Readonly` **items**: readonly `T`[]

___

### type

• `Readonly` **type**: [`DayType`](../enums/hooks_useCalendar.DayType.md)
