[React Native library](../index.md) / [Exports](../modules.md) / [components/common-components/FlatList](../modules/components_common_components_FlatList.md) / Props

# Interface: Props\<T\>

[components/common-components/FlatList](../modules/components_common_components_FlatList.md).Props

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Omit`\<`React.ComponentProps`\<typeof `FlatList`\>, ``"data"`` \| ``"initialNumToRender"`` \| ``"keyExtractor"`` \| ``"ListFooterComponent"`` \| ``"ListHeaderComponent"`` \| ``"ref"`` \| ``"style"``\>

  ↳ **`Props`**

## Table of contents

### Properties

- [data](components_common_components_FlatList.Props.md#data)
- [height](components_common_components_FlatList.Props.md#height)
- [itemMinHeight](components_common_components_FlatList.Props.md#itemminheight)
- [keyExtractor](components_common_components_FlatList.Props.md#keyextractor)
- [paddingBottom](components_common_components_FlatList.Props.md#paddingbottom)
- [paddingTop](components_common_components_FlatList.Props.md#paddingtop)

## Properties

### data

• `Readonly` **data**: readonly `T`[]

___

### height

• `Readonly` **height**: `number`

___

### itemMinHeight

• `Readonly` **itemMinHeight**: `number` \| (`item`: `T`) => `number`

Returns item min height.

**`Param`**

Item.

**`Param`**

Index.

___

### keyExtractor

• `Readonly` **keyExtractor**: (`item`: `T`, `index`: `number`) => `string`

Key extractor.

**`Param`**

Item.

**`Param`**

Index.

#### Type declaration

▸ (`item`, `index`): `string`

Key extractor.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | Item. |
| `index` | `number` | Index. |

##### Returns

`string`

Key.

___

### paddingBottom

• `Optional` `Readonly` **paddingBottom**: `numberU`

___

### paddingTop

• `Optional` `Readonly` **paddingTop**: `numberU`
