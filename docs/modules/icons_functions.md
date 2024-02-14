[React Native library](../index.md) / [Exports](../modules.md) / icons/functions

# Module: icons/functions

## Table of contents

### Functions

- [countryFlagIcon](icons_functions.md#countryflagicon)
- [expoIcon](icons_functions.md#expoicon)
- [imageIcon](icons_functions.md#imageicon)
- [isExpoIconName](icons_functions.md#isexpoiconname)
- [textIcon](icons_functions.md#texticon)

## Functions

### countryFlagIcon

▸ **countryFlagIcon**(`isoCode`): [`Icon`](../interfaces/icons_icons_common_types.Icon.md)

Creates icon component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isoCode` | `string` | Iso code. |

#### Returns

[`Icon`](../interfaces/icons_icons_common_types.Icon.md)

Icon component.

___

### expoIcon

▸ **expoIcon**\<`G`, `F`\>(`IconSet`, `name`, `nameRtl?`): [`Icon`](../interfaces/icons_icons_common_types.Icon.md)

Creates icon component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `G` | extends `string` |
| `F` | extends `string` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `IconSet` | `Icon`\<`G`, `F`\> | `undefined` | Icon set. |
| `name` | `G` | `undefined` | Name. |
| `nameRtl` | `G` | `name` | Rtl name. |

#### Returns

[`Icon`](../interfaces/icons_icons_common_types.Icon.md)

Icon component.

___

### imageIcon

▸ **imageIcon**(`source`): [`Icon`](../interfaces/icons_icons_common_types.Icon.md)

Creates icon component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `number` | Source. |

#### Returns

[`Icon`](../interfaces/icons_icons_common_types.Icon.md)

Icon component.

___

### isExpoIconName

▸ **isExpoIconName**\<`G`, `F`\>(`value`, `IconSet`): value is G

Checks if value is an icon name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `G` | extends `string` |
| `F` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `IconSet` | `Icon`\<`G`, `F`\> | Icon set. |

#### Returns

value is G

_True_ if value is an icon name, _false_ otherwise.

___

### textIcon

▸ **textIcon**(`label`): [`Icon`](../interfaces/icons_icons_common_types.Icon.md)

Creates icon component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | Label. |

#### Returns

[`Icon`](../interfaces/icons_icons_common_types.Icon.md)

Icon component.
