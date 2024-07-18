[**React Native library**](../../../index.md) • **Docs**

***

[React Native library](../../../modules.md) / [hooks/useAnimatedReaction](../index.md) / Callbacks

# Interface: Callbacks\<T\>

## Type Parameters

• **T**

## Properties

### prepare()

> `readonly` **prepare**: () => `T`

#### Returns

`T`

Data.

***

### react()

> `readonly` **react**: (`prepareResult`, `preparePreviousResult`) => `void`

Reacts to data change.

#### Parameters

• **prepareResult**: `T`

Prepare result.

• **preparePreviousResult**: `null` \| `T`

Prepare previous result.

#### Returns

`void`
