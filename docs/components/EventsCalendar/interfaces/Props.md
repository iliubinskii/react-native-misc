[**React Native library**](../../../index.md) • **Docs**

***

[React Native library](../../../modules.md) / [components/EventsCalendar](../index.md) / Props

# Interface: Props\<T\>

**`Internal`**

## Extends

- [`ViewStyle`](../../../types/CommonNativeProps/interfaces/ViewStyle.md).`Pick`\<`React.ComponentProps`\<*typeof* [`default`](../Day/functions/default.md)\>, `"getKey"` \| `"getLabel"` \| `"getTextStyle"` \| `"isFeatured"`\>

## Type Parameters

• **T**

## Properties

### borderBottom?

> `readonly` `optional` **borderBottom**: `booleanU`

***

### borderEnd?

> `readonly` `optional` **borderEnd**: `booleanU`

***

### borderStart?

> `readonly` `optional` **borderStart**: `booleanU`

***

### borderTop?

> `readonly` `optional` **borderTop**: `booleanU`

***

### getKey()

> `readonly` **getKey**: (`item`) => `NumStr`

#### Parameters

• **item**: `T`

Item.

#### Returns

`NumStr`

Key.

#### Inherited from

`Pick.getKey`

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

### isFeatured()

> `readonly` **isFeatured**: (`item`) => `boolean`

#### Parameters

• **item**: `T`

Item.

#### Returns

`boolean`

_True_ if item is featured, _false_ otherwise.

#### Inherited from

`Pick.isFeatured`

***

### items

> `readonly` **items**: `IndexedRecord`\<readonly `T`[]\>

***

### month

> `readonly` **month**: `string`

***

### onDayPress()?

> `readonly` `optional` **onDayPress**: (`date`) => `void`

Handles day press.

#### Parameters

• **date**: `string`

#### Returns

`void`

***

### onMonthChange()

> `readonly` **onMonthChange**: (`month`) => `void`

Handles month change.

#### Parameters

• **month**: `string`

Month.

#### Returns

`void`

***

### style?

> `readonly` `optional` **style**: `StyleProp`\<`ViewStyle`\>

#### Inherited from

[`ViewStyle`](../../../types/CommonNativeProps/interfaces/ViewStyle.md).[`style`](../../../types/CommonNativeProps/interfaces/ViewStyle.md#style)

***

### weekStartsOn

> `readonly` **weekStartsOn**: `0` \| `1`

***

### workweekStartsOn

> `readonly` **workweekStartsOn**: `0` \| `1`
