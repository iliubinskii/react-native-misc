[**React Native library**](../../../../index.md) • **Docs**

***

[React Native library](../../../../modules.md) / [components/common-components/Select](../index.md) / Props

# Interface: Props\<T\>

**`Internal`**

## Extends

- [`ViewStyle`](../../../../types/CommonNativeProps/interfaces/ViewStyle.md)

## Type Parameters

• **T** *extends* `NumStr`

## Properties

### PlaceholderIcon?

> `readonly` `optional` **PlaceholderIcon**: [`Icon`](../../../../icons/icons-common/types/interfaces/Icon.md)

***

### backgroundColor?

> `readonly` `optional` **backgroundColor**: `stringU`

***

### caption?

> `readonly` `optional` **caption**: `stringU`

***

### foregroundColor?

> `readonly` `optional` **foregroundColor**: `stringU`

***

### maxItems?

> `readonly` `optional` **maxItems**: `numberU`

***

### onChange()?

> `readonly` `optional` **onChange**: (`value`?) => `void`

Selects or resets value.

#### Parameters

• **value?**: `T`

Value.

#### Returns

`void`

***

### onReset()?

> `readonly` `optional` **onReset**: () => `void`

Resets value.

#### Returns

`void`

***

### onSelect()?

> `readonly` `optional` **onSelect**: (`value`) => `void`

Selects value.

#### Parameters

• **value**: `T`

Value.

#### Returns

`void`

***

### options

> `readonly` **options**: [`SelectOptions`](../type-aliases/SelectOptions.md)\<`T`\>

***

### placeholder?

> `readonly` `optional` **placeholder**: `stringU`

***

### resettable?

> `readonly` `optional` **resettable**: `booleanU`

***

### rowStyle?

> `readonly` `optional` **rowStyle**: `StyleProp`\<`ViewStyle`\>

***

### style?

> `readonly` `optional` **style**: `StyleProp`\<`ViewStyle`\>

#### Inherited from

[`ViewStyle`](../../../../types/CommonNativeProps/interfaces/ViewStyle.md).[`style`](../../../../types/CommonNativeProps/interfaces/ViewStyle.md#style)

***

### value?

> `readonly` `optional` **value**: `T`
