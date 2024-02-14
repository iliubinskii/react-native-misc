[React Native library](../index.md) / [Exports](../modules.md) / icons/contexts/icons

# Module: icons/contexts/icons

## Table of contents

### Interfaces

- [Props](../interfaces/icons_contexts_icons.Props.md)

### Functions

- [IconsProvider](icons_contexts_icons.md#iconsprovider)
- [useIcons](icons_contexts_icons.md#useicons)

## Functions

### IconsProvider

▸ **IconsProvider**(`props`): `undefined` \| `Element`

Function component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`Props`](../interfaces/icons_contexts_icons.Props.md) | Properties. |

#### Returns

`undefined` \| `Element`

JSX element.

___

### useIcons

▸ **useIcons**\<`I`\>(): [`Icons`](icons_icons_common_types.md#icons)\<`I`\>

Consumes icons context.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`IconName`](icons_icons_common_types.md#iconname) = `never` |

#### Returns

[`Icons`](icons_icons_common_types.md#icons)\<`I`\>

Icons context.
