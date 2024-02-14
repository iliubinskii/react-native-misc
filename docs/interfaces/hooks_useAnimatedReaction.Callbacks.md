[React Native library](../index.md) / [Exports](../modules.md) / [hooks/useAnimatedReaction](../modules/hooks_useAnimatedReaction.md) / Callbacks

# Interface: Callbacks\<T\>

[hooks/useAnimatedReaction](../modules/hooks_useAnimatedReaction.md).Callbacks

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [prepare](hooks_useAnimatedReaction.Callbacks.md#prepare)
- [react](hooks_useAnimatedReaction.Callbacks.md#react)

## Properties

### prepare

• `Readonly` **prepare**: () => `T`

Prepares data.

#### Type declaration

▸ (): `T`

Prepares data.

##### Returns

`T`

Data.

___

### react

• `Readonly` **react**: (`prepareResult`: `T`, `preparePreviousResult`: ``null`` \| `T`) => `void`

Reacts to data change.

**`Param`**

Prepare result.

**`Param`**

Prepare previous result.

#### Type declaration

▸ (`prepareResult`, `preparePreviousResult`): `void`

Reacts to data change.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prepareResult` | `T` | Prepare result. |
| `preparePreviousResult` | ``null`` \| `T` | Prepare previous result. |

##### Returns

`void`
