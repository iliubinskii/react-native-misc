[React Native library](../index.md) / [Exports](../modules.md) / [components/common-components/GestureRecognizer](../modules/components_common_components_GestureRecognizer.md) / Props

# Interface: Props

[components/common-components/GestureRecognizer](../modules/components_common_components_GestureRecognizer.md).Props

## Hierarchy

- `Omit`\<`React.ComponentProps`\<typeof `GestureRecognizer`\>, ``"onSwipeLeft"`` \| ``"onSwipeRight"``\>

  ↳ **`Props`**

## Table of contents

### Properties

- [onSwipeEnd](components_common_components_GestureRecognizer.Props.md#onswipeend)
- [onSwipeStart](components_common_components_GestureRecognizer.Props.md#onswipestart)

## Properties

### onSwipeEnd

• `Optional` `Readonly` **onSwipeEnd**: (`gestureState`: `PanResponderGestureState`) => `void`

Handles swipe in the end direction.

**`Param`**

Gesture state.

#### Type declaration

▸ (`gestureState`): `void`

Handles swipe in the end direction.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gestureState` | `PanResponderGestureState` | Gesture state. |

##### Returns

`void`

___

### onSwipeStart

• `Optional` `Readonly` **onSwipeStart**: (`gestureState`: `PanResponderGestureState`) => `void`

Handles swipe in the start direction.

**`Param`**

Gesture state.

#### Type declaration

▸ (`gestureState`): `void`

Handles swipe in the start direction.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gestureState` | `PanResponderGestureState` | Gesture state. |

##### Returns

`void`
