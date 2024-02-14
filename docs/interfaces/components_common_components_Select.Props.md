[React Native library](../index.md) / [Exports](../modules.md) / [components/common-components/Select](../modules/components_common_components_Select.md) / Props

# Interface: Props\<T\>

[components/common-components/Select](../modules/components_common_components_Select.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStr` |

## Hierarchy

- [`ViewStyle`](types_CommonNativeProps.ViewStyle.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [PlaceholderIcon](components_common_components_Select.Props.md#placeholdericon)
- [backgroundColor](components_common_components_Select.Props.md#backgroundcolor)
- [caption](components_common_components_Select.Props.md#caption)
- [foregroundColor](components_common_components_Select.Props.md#foregroundcolor)
- [maxItems](components_common_components_Select.Props.md#maxitems)
- [onChange](components_common_components_Select.Props.md#onchange)
- [onReset](components_common_components_Select.Props.md#onreset)
- [onSelect](components_common_components_Select.Props.md#onselect)
- [options](components_common_components_Select.Props.md#options)
- [placeholder](components_common_components_Select.Props.md#placeholder)
- [resettable](components_common_components_Select.Props.md#resettable)
- [rowStyle](components_common_components_Select.Props.md#rowstyle)
- [style](components_common_components_Select.Props.md#style)
- [value](components_common_components_Select.Props.md#value)

## Properties

### PlaceholderIcon

• `Optional` `Readonly` **PlaceholderIcon**: [`Icon`](icons_icons_common_types.Icon.md)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `stringU`

___

### caption

• `Optional` `Readonly` **caption**: `stringU`

___

### foregroundColor

• `Optional` `Readonly` **foregroundColor**: `stringU`

___

### maxItems

• `Optional` `Readonly` **maxItems**: `numberU`

___

### onChange

• `Optional` `Readonly` **onChange**: (`value?`: `T`) => `void`

Selects or resets value.

**`Param`**

Value.

#### Type declaration

▸ (`value?`): `void`

Selects or resets value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `T` | Value. |

##### Returns

`void`

___

### onReset

• `Optional` `Readonly` **onReset**: () => `void`

Resets value.

#### Type declaration

▸ (): `void`

Resets value.

##### Returns

`void`

___

### onSelect

• `Optional` `Readonly` **onSelect**: (`value`: `T`) => `void`

Selects value.

**`Param`**

Value.

#### Type declaration

▸ (`value`): `void`

Selects value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

##### Returns

`void`

___

### options

• `Readonly` **options**: [`SelectOptions`](../modules/components_common_components_Select.md#selectoptions)\<`T`\>

___

### placeholder

• `Optional` `Readonly` **placeholder**: `stringU`

___

### resettable

• `Optional` `Readonly` **resettable**: `booleanU`

___

### rowStyle

• `Optional` `Readonly` **rowStyle**: `StyleProp`\<`ViewStyle`\>

___

### style

• `Optional` `Readonly` **style**: `StyleProp`\<`ViewStyle`\>

#### Inherited from

[ViewStyle](types_CommonNativeProps.ViewStyle.md).[style](types_CommonNativeProps.ViewStyle.md#style)

___

### value

• `Optional` `Readonly` **value**: `T`
