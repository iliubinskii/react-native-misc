[**React Native library**](../../../../index.md) • **Docs**

***

[React Native library](../../../../modules.md) / [components/common-components/FlatList](../index.md) / Props

# Interface: Props\<T\>

**`Internal`**

## Extends

- `Omit`\<`React.ComponentProps`\<*typeof* `FlatList`\>, `"data"` \| `"initialNumToRender"` \| `"keyExtractor"` \| `"CellRendererComponent"` \| `"ListFooterComponent"` \| `"ListHeaderComponent"` \| `"ref"` \| `"style"`\>

## Type Parameters

• **T**

## Properties

### data

> `readonly` **data**: readonly `T`[]

***

### height

> `readonly` **height**: `number`

***

### itemMinHeight

> `readonly` **itemMinHeight**: `number` \| (`item`) => `number`

Returns item min height.

#### Param

Item.

#### Param

Index.

***

### keyExtractor()

> `readonly` **keyExtractor**: (`item`, `index`) => `string`

#### Parameters

• **item**: `T`

Item.

• **index**: `number`

Index.

#### Returns

`string`

Key.

***

### paddingBottom?

> `readonly` `optional` **paddingBottom**: `numberU`

***

### paddingTop?

> `readonly` `optional` **paddingTop**: `numberU`
