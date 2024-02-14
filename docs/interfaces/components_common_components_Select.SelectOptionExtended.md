[React Native library](../index.md) / [Exports](../modules.md) / [components/common-components/Select](../modules/components_common_components_Select.md) / SelectOptionExtended

# Interface: SelectOptionExtended\<T\>

[components/common-components/Select](../modules/components_common_components_Select.md).SelectOptionExtended

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStr` |

## Hierarchy

- [`SelectOption`](components_common_components_Select.SelectOption.md)\<`T`\>

  ↳ **`SelectOptionExtended`**

## Table of contents

### Properties

- [Icon](components_common_components_Select.SelectOptionExtended.md#icon)
- [label](components_common_components_Select.SelectOptionExtended.md#label)
- [onPress](components_common_components_Select.SelectOptionExtended.md#onpress)
- [value](components_common_components_Select.SelectOptionExtended.md#value)

## Properties

### Icon

• `Optional` `Readonly` **Icon**: [`Icon`](icons_icons_common_types.Icon.md)

#### Inherited from

[SelectOption](components_common_components_Select.SelectOption.md).[Icon](components_common_components_Select.SelectOption.md#icon)

___

### label

• `Readonly` **label**: `string`

#### Inherited from

[SelectOption](components_common_components_Select.SelectOption.md).[label](components_common_components_Select.SelectOption.md#label)

___

### onPress

• `Readonly` **onPress**: () => `void`

Handles select option press.

#### Type declaration

▸ (): `void`

Handles select option press.

##### Returns

`void`

___

### value

• `Readonly` **value**: `T`

#### Overrides

[SelectOption](components_common_components_Select.SelectOption.md).[value](components_common_components_Select.SelectOption.md#value)
