[React Native library](../index.md) / [Exports](../modules.md) / [components/SwipeableTabBar](../modules/components_SwipeableTabBar.md) / Props

# Interface: Props

[components/SwipeableTabBar](../modules/components_SwipeableTabBar.md).Props

## Hierarchy

- `ComponentProps`\<typeof `BottomTabBar`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [getPage](components_SwipeableTabBar.Props.md#getpage)
- [height](components_SwipeableTabBar.Props.md#height)
- [iconSize](components_SwipeableTabBar.Props.md#iconsize)
- [onPageChange](components_SwipeableTabBar.Props.md#onpagechange)
- [pageCount](components_SwipeableTabBar.Props.md#pagecount)
- [pageSize](components_SwipeableTabBar.Props.md#pagesize)

## Properties

### getPage

• `Optional` `Readonly` **getPage**: (`index`: `number`, `names`: `strings`) => `numberU`

Returns tab bar page.

**`Param`**

Index.

**`Param`**

Names.

#### Type declaration

▸ (`index`, `names`): `numberU`

Returns tab bar page.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index. |
| `names` | `strings` | Names. |

##### Returns

`numberU`

Tab bar page.

___

### height

• `Readonly` **height**: `number`

___

### iconSize

• `Readonly` **iconSize**: `number`

___

### onPageChange

• `Optional` `Readonly` **onPageChange**: (`page`: `number`) => `void`

Handles page change.

**`Param`**

Page.

#### Type declaration

▸ (`page`): `void`

Handles page change.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page` | `number` | Page. |

##### Returns

`void`

___

### pageCount

• `Readonly` **pageCount**: `number`

___

### pageSize

• `Readonly` **pageSize**: `number`
