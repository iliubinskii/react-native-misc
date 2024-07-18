[**React Native library**](../../../../index.md) • **Docs**

***

[React Native library](../../../../modules.md) / [components/common-components/GestureRecognizer](../index.md) / Props

# Interface: Props

**`Internal`**

## Extends

- `Omit`\<`React.ComponentProps`\<*typeof* `GestureRecognizer`\>, `"onSwipeLeft"` \| `"onSwipeRight"`\>

## Properties

### onSwipeEnd()?

> `readonly` `optional` **onSwipeEnd**: (`gestureState`) => `void`

Handles swipe in the end direction.

#### Parameters

• **gestureState**: `PanResponderGestureState`

Gesture state.

#### Returns

`void`

***

### onSwipeStart()?

> `readonly` `optional` **onSwipeStart**: (`gestureState`) => `void`

Handles swipe in the start direction.

#### Parameters

• **gestureState**: `PanResponderGestureState`

Gesture state.

#### Returns

`void`
