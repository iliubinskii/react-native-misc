[React Native library](../index.md) / [Exports](../modules.md) / functions/worklets

# Module: functions/worklets

## Table of contents

### Functions

- [empty](functions_worklets.md#empty)
- [evaluate](functions_worklets.md#evaluate)
- [limit](functions_worklets.md#limit)
- [notEmpty](functions_worklets.md#notempty)

## Functions

### empty

▸ **empty**(`value`): value is empty

Checks if value type is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is empty

_True_ if value type is empty, _false_ otherwise.

___

### evaluate

▸ **evaluate**\<`T`\>(`callback`): `T`

Executes callback.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `Sync`\<`T`, readonly []\> | Callback. |

#### Returns

`T`

The result of callback execution.

▸ **evaluate**\<`T`\>(`mixed`): `Promise`\<`T`\>

Executes promise or async function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mixed` | `AsyncPromise`\<`T`, readonly []\> | Promise or async function. |

#### Returns

`Promise`\<`T`\>

The result of callback execution.

___

### limit

▸ **limit**(`value`, `min`, `max`): `number`

Limits value to be within [min, max] range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |
| `min` | `number` | Min. |
| `max` | `number` | Max. |

#### Returns

`number`

Limited value.

___

### notEmpty

▸ **notEmpty**\<`T`\>(`value`): value is Exclude\<T, empty\>

Checks if value is not empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | — Value. |

#### Returns

value is Exclude\<T, empty\>

— True if value is not empty, false otherwise.
