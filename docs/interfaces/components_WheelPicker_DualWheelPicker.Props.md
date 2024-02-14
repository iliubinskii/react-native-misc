[React Native library](../index.md) / [Exports](../modules.md) / [components/WheelPicker/DualWheelPicker](../modules/components_WheelPicker_DualWheelPicker.md) / Props

# Interface: Props\<A, B\>

[components/WheelPicker/DualWheelPicker](../modules/components_WheelPicker_DualWheelPicker.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `NumStr` |
| `B` | extends `NumStr` |

## Table of contents

### Properties

- [color](components_WheelPicker_DualWheelPicker.Props.md#color)
- [onChange](components_WheelPicker_DualWheelPicker.Props.md#onchange)
- [slot1](components_WheelPicker_DualWheelPicker.Props.md#slot1)
- [slot2](components_WheelPicker_DualWheelPicker.Props.md#slot2)

## Properties

### color

• `Optional` `Readonly` **color**: `stringU`

___

### onChange

• `Readonly` **onChange**: (`value1`: `A`, `value2`: `B`) => `void`

Handles values change.

**`Param`**

First value.

**`Param`**

Second value.

#### Type declaration

▸ (`value1`, `value2`): `void`

Handles values change.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `A` | First value. |
| `value2` | `B` | Second value. |

##### Returns

`void`

___

### slot1

• `Readonly` **slot1**: [`Slot`](components_WheelPicker_DualWheelPicker.Slot.md)\<`A`\>

___

### slot2

• `Readonly` **slot2**: [`Slot`](components_WheelPicker_DualWheelPicker.Slot.md)\<`B`\>
