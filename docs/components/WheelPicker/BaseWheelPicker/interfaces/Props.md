[**React Native library**](../../../../index.md) • **Docs**

***

[React Native library](../../../../modules.md) / [components/WheelPicker/BaseWheelPicker](../index.md) / Props

# Interface: Props\<T\>

**`Internal`**

## Type Parameters

• **T** *extends* `NumStr`

## Properties

### color?

> `readonly` `optional` **color**: `stringU`

***

### customRef?

> `readonly` `optional` **customRef**: `MutableRefObject`\<[`Ref`](Ref.md)\>

***

### disabled?

> `readonly` `optional` **disabled**: `SharedValue`\<`boolean`\>

***

### largeSwipeSize

> `readonly` **largeSwipeSize**: `number`

***

### largeSwipeStopInterval

> `readonly` **largeSwipeStopInterval**: `number`

***

### onChange()

> `readonly` **onChange**: (`value`) => `void`

Handles value change.

#### Parameters

• **value**: `T`

Value.

#### Returns

`void`

***

### onOverflow()?

> `readonly` `optional` **onOverflow**: (`overflow`) => `void`

Handles overflow event.

#### Parameters

• **overflow**: `-1` \| `1`

Overflow.

#### Returns

`void`

***

### onScrollEnd()?

> `readonly` `optional` **onScrollEnd**: (`value`) => `void`

Handles scroll end event.

#### Parameters

• **value**: `T`

Value.

#### Returns

`void`

***

### onScrollStart()?

> `readonly` `optional` **onScrollStart**: () => `void`

Handles scroll start event.

#### Returns

`void`

***

### options

> `readonly` **options**: [`Options`](../type-aliases/Options.md)\<`T`\>

***

### smallSwipeSize

> `readonly` **smallSwipeSize**: `number`

***

### smallSwipeStopInterval

> `readonly` **smallSwipeStopInterval**: `number`

***

### tick

> `readonly` **tick**: `string`

***

### value

> `readonly` **value**: `T`
