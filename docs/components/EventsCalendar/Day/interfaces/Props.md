[**React Native library**](../../../../index.md) • **Docs**

***

[React Native library](../../../../modules.md) / [components/EventsCalendar/Day](../index.md) / Props

# Interface: Props\<T\>

**`Internal`**

## Extends

- `Pressable`.`Pick`\<`React.ComponentProps`\<*typeof* [`default`](../Item/functions/default.md)\>, `"getLabel"` \| `"getTextStyle"`\>

## Type Parameters

• **T**

## Properties

### date

> `readonly` **date**: `string`

***

### day

> `readonly` **day**: `number`

***

### getKey()

> `readonly` **getKey**: (`item`) => `NumStr`

#### Parameters

• **item**: `T`

Item.

#### Returns

`NumStr`

Key.

***

### getLabel()

> `readonly` **getLabel**: (`item`) => `string`

#### Parameters

• **item**: `T`

Item.

#### Returns

`string`

Label.

#### Inherited from

`Pick.getLabel`

***

### getTextStyle()?

> `readonly` `optional` **getTextStyle**: (`item`) => `undefined` \| `TextStyle`

#### Parameters

• **item**: `T`

Item.

#### Returns

`undefined` \| `TextStyle`

Text style.

#### Inherited from

`Pick.getTextStyle`

***

### index

> `readonly` **index**: `number`

***

### isFeatured()

> `readonly` **isFeatured**: (`item`) => `boolean`

#### Parameters

• **item**: `T`

Item.

#### Returns

`boolean`

_True_ if item is featured, _false_ otherwise.

***

### items?

> `readonly` `optional` **items**: readonly `T`[]

***

### type

> `readonly` **type**: [`DayType`](../../../../hooks/useCalendar/enumerations/DayType.md)
