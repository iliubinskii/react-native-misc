[React Native library](../index.md) / [Exports](../modules.md) / [components/WheelPicker/BaseWheelPicker](../modules/components_WheelPicker_BaseWheelPicker.md) / Props

# Interface: Props\<T\>

[components/WheelPicker/BaseWheelPicker](../modules/components_WheelPicker_BaseWheelPicker.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStr` |

## Table of contents

### Properties

- [color](components_WheelPicker_BaseWheelPicker.Props.md#color)
- [customRef](components_WheelPicker_BaseWheelPicker.Props.md#customref)
- [disabled](components_WheelPicker_BaseWheelPicker.Props.md#disabled)
- [largeSwipeSize](components_WheelPicker_BaseWheelPicker.Props.md#largeswipesize)
- [largeSwipeStopInterval](components_WheelPicker_BaseWheelPicker.Props.md#largeswipestopinterval)
- [onChange](components_WheelPicker_BaseWheelPicker.Props.md#onchange)
- [onOverflow](components_WheelPicker_BaseWheelPicker.Props.md#onoverflow)
- [onScrollEnd](components_WheelPicker_BaseWheelPicker.Props.md#onscrollend)
- [onScrollStart](components_WheelPicker_BaseWheelPicker.Props.md#onscrollstart)
- [options](components_WheelPicker_BaseWheelPicker.Props.md#options)
- [smallSwipeSize](components_WheelPicker_BaseWheelPicker.Props.md#smallswipesize)
- [smallSwipeStopInterval](components_WheelPicker_BaseWheelPicker.Props.md#smallswipestopinterval)
- [value](components_WheelPicker_BaseWheelPicker.Props.md#value)

## Properties

### color

• `Optional` `Readonly` **color**: `stringU`

___

### customRef

• `Optional` `Readonly` **customRef**: `MutableRefObject`\<[`Ref`](components_WheelPicker_BaseWheelPicker.Ref.md)\>

___

### disabled

• `Optional` `Readonly` **disabled**: `SharedValue`\<`boolean`\>

___

### largeSwipeSize

• `Readonly` **largeSwipeSize**: `number`

___

### largeSwipeStopInterval

• `Readonly` **largeSwipeStopInterval**: `number`

___

### onChange

• `Readonly` **onChange**: (`value`: `T`) => `void`

Handles value change.

**`Param`**

Value.

#### Type declaration

▸ (`value`): `void`

Handles value change.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

##### Returns

`void`

___

### onOverflow

• `Optional` `Readonly` **onOverflow**: (`overflow`: ``1`` \| ``-1``) => `void`

Handles overflow event.

**`Param`**

Overflow.

#### Type declaration

▸ (`overflow`): `void`

Handles overflow event.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overflow` | ``1`` \| ``-1`` | Overflow. |

##### Returns

`void`

___

### onScrollEnd

• `Optional` `Readonly` **onScrollEnd**: (`value`: `T`) => `void`

Handles scroll end event.

**`Param`**

Value.

#### Type declaration

▸ (`value`): `void`

Handles scroll end event.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

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

### options

• `Readonly` **options**: [`Options`](../modules/components_WheelPicker_BaseWheelPicker.md#options)\<`T`\>

___

### smallSwipeSize

• `Readonly` **smallSwipeSize**: `number`

___

### smallSwipeStopInterval

• `Readonly` **smallSwipeStopInterval**: `number`

___

### value

• `Readonly` **value**: `T`
