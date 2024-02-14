[React Native library](../index.md) / [Exports](../modules.md) / [components/common-components/AnimatedScrollView](../modules/components_common_components_AnimatedScrollView.md) / Props

# Interface: Props

[components/common-components/AnimatedScrollView](../modules/components_common_components_AnimatedScrollView.md).Props

## Table of contents

### Properties

- [children](components_common_components_AnimatedScrollView.Props.md#children)
- [customRef](components_common_components_AnimatedScrollView.Props.md#customref)
- [direction](components_common_components_AnimatedScrollView.Props.md#direction)
- [disabled](components_common_components_AnimatedScrollView.Props.md#disabled)
- [height](components_common_components_AnimatedScrollView.Props.md#height)
- [initialOffset](components_common_components_AnimatedScrollView.Props.md#initialoffset)
- [largeSwipeSize](components_common_components_AnimatedScrollView.Props.md#largeswipesize)
- [largeSwipeStopInterval](components_common_components_AnimatedScrollView.Props.md#largeswipestopinterval)
- [max](components_common_components_AnimatedScrollView.Props.md#max)
- [min](components_common_components_AnimatedScrollView.Props.md#min)
- [onScroll](components_common_components_AnimatedScrollView.Props.md#onscroll)
- [onScrollEnd](components_common_components_AnimatedScrollView.Props.md#onscrollend)
- [onScrollStart](components_common_components_AnimatedScrollView.Props.md#onscrollstart)
- [smallSwipeSize](components_common_components_AnimatedScrollView.Props.md#smallswipesize)
- [smallSwipeStopInterval](components_common_components_AnimatedScrollView.Props.md#smallswipestopinterval)
- [snapAnimation](components_common_components_AnimatedScrollView.Props.md#snapanimation)
- [snapInterval](components_common_components_AnimatedScrollView.Props.md#snapinterval)
- [swipeAnimation](components_common_components_AnimatedScrollView.Props.md#swipeanimation)
- [toggleThreshold](components_common_components_AnimatedScrollView.Props.md#togglethreshold)
- [width](components_common_components_AnimatedScrollView.Props.md#width)

## Properties

### children

• `Optional` `Readonly` **children**: `ReactNode`

___

### customRef

• `Optional` `Readonly` **customRef**: `MutableRefObject`\<[`Ref`](components_common_components_AnimatedScrollView.Ref.md)\>

___

### direction

• `Readonly` **direction**: [`Direction`](../enums/components_common_components_AnimatedScrollView.Direction.md)

___

### disabled

• `Optional` `Readonly` **disabled**: `SharedValue`\<`boolean`\>

___

### height

• `Readonly` **height**: `number`

___

### initialOffset

• `Readonly` **initialOffset**: `number`

___

### largeSwipeSize

• `Readonly` **largeSwipeSize**: `number`

___

### largeSwipeStopInterval

• `Readonly` **largeSwipeStopInterval**: `number`

___

### max

• `Optional` `Readonly` **max**: `numberU`

___

### min

• `Optional` `Readonly` **min**: `numberU`

___

### onScroll

• `Optional` `Readonly` **onScroll**: (`offset`: `number`) => `void`

Handles scroll event.

**`Param`**

Offset.

#### Type declaration

▸ (`offset`): `void`

Handles scroll event.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Offset. |

##### Returns

`void`

___

### onScrollEnd

• `Optional` `Readonly` **onScrollEnd**: (`offset`: `number`) => `void`

Handles scroll end event.

**`Param`**

Offset.

#### Type declaration

▸ (`offset`): `void`

Handles scroll end event.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Offset. |

##### Returns

`void`

___

### onScrollStart

• `Optional` `Readonly` **onScrollStart**: () => `void`

Handles scroll start event.

#### Type declaration

▸ (): `void`

Handles scroll start event.

##### Returns

`void`

___

### smallSwipeSize

• `Readonly` **smallSwipeSize**: `number`

___

### smallSwipeStopInterval

• `Readonly` **smallSwipeStopInterval**: `number`

___

### snapAnimation

• `Readonly` **snapAnimation**: [`NativeAnimation`](functions_react_native_reanimated_react_native_reanimated_common_types.NativeAnimation.md)

___

### snapInterval

• `Readonly` **snapInterval**: `number`

___

### swipeAnimation

• `Readonly` **swipeAnimation**: [`NativeAnimation`](functions_react_native_reanimated_react_native_reanimated_common_types.NativeAnimation.md)

___

### toggleThreshold

• `Optional` `Readonly` **toggleThreshold**: `numberU`

___

### width

• `Readonly` **width**: `number`
