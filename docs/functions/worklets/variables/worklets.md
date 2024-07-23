[**React Native library**](../../../index.md) • **Docs**

***

[React Native library](../../../modules.md) / [functions/worklets](../index.md) / worklets

# Variable: worklets

> `const` **worklets**: `object`

## Type declaration

### empty()

> `readonly` **empty**: (`value`) => `value is empty`

#### Parameters

• **value**: `unknown`

Value.

#### Returns

`value is empty`

_True_ if value type is empty, _false_ otherwise.

### evaluate()

> `readonly` **evaluate**: \<`T`\>(`callback`) => `T`

#### Type Parameters

• **T**

#### Parameters

• **callback**: `Sync`\<`T`, readonly []\>

Callback.

#### Returns

`T`

The result of callback execution.

### limit()

> `readonly` **limit**: (`value`, `min`, `max`) => `number`

#### Parameters

• **value**: `number`

Value.

• **min**: `number`

Min.

• **max**: `number`

Max.

#### Returns

`number`

Limited value.

### notEmpty()

> `readonly` **notEmpty**: \<`T`\>(`value`) => `value is Exclude<T, empty>`

#### Type Parameters

• **T**

#### Parameters

• **value**: `T`

— Value.

#### Returns

`value is Exclude<T, empty>`

— True if value is not empty, false otherwise.
