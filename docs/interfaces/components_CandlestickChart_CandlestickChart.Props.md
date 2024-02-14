[React Native library](../index.md) / [Exports](../modules.md) / [components/CandlestickChart/CandlestickChart](../modules/components_CandlestickChart_CandlestickChart.md) / Props

# Interface: Props

[components/CandlestickChart/CandlestickChart](../modules/components_CandlestickChart_CandlestickChart.md).Props

## Hierarchy

- `Omit`\<`React.ComponentProps`\<typeof [`default`](../modules/components_CandlestickChart_CandlestickChart_common_BaseChart.md#default)\>, ``"range0"`` \| ``"range1"``\>

  ↳ **`Props`**

## Table of contents

### Properties

- [bearBarColor](components_CandlestickChart_CandlestickChart.Props.md#bearbarcolor)
- [bullBarColor](components_CandlestickChart_CandlestickChart.Props.md#bullbarcolor)
- [color](components_CandlestickChart_CandlestickChart.Props.md#color)
- [data](components_CandlestickChart_CandlestickChart.Props.md#data)
- [getLabel](components_CandlestickChart_CandlestickChart.Props.md#getlabel)
- [height](components_CandlestickChart_CandlestickChart.Props.md#height)
- [initialRangeFrom](components_CandlestickChart_CandlestickChart.Props.md#initialrangefrom)
- [initialRangeTo](components_CandlestickChart_CandlestickChart.Props.md#initialrangeto)
- [maxHorizontalCells](components_CandlestickChart_CandlestickChart.Props.md#maxhorizontalcells)
- [maxSliceLength](components_CandlestickChart_CandlestickChart.Props.md#maxslicelength)
- [minLabelsDistance](components_CandlestickChart_CandlestickChart.Props.md#minlabelsdistance)
- [minLabelsEdgeDistance](components_CandlestickChart_CandlestickChart.Props.md#minlabelsedgedistance)
- [minSliceLength](components_CandlestickChart_CandlestickChart.Props.md#minslicelength)
- [onSelect](components_CandlestickChart_CandlestickChart.Props.md#onselect)
- [paddingBottom](components_CandlestickChart_CandlestickChart.Props.md#paddingbottom)
- [paddingEnd](components_CandlestickChart_CandlestickChart.Props.md#paddingend)
- [paddingStart](components_CandlestickChart_CandlestickChart.Props.md#paddingstart)
- [paddingTop](components_CandlestickChart_CandlestickChart.Props.md#paddingtop)
- [selectedColor](components_CandlestickChart_CandlestickChart.Props.md#selectedcolor)
- [selectedIndex](components_CandlestickChart_CandlestickChart.Props.md#selectedindex)
- [verticalLabels](components_CandlestickChart_CandlestickChart.Props.md#verticallabels)
- [verticalRangeFrom](components_CandlestickChart_CandlestickChart.Props.md#verticalrangefrom)
- [verticalRangeTo](components_CandlestickChart_CandlestickChart.Props.md#verticalrangeto)
- [width](components_CandlestickChart_CandlestickChart.Props.md#width)

## Properties

### bearBarColor

• `Readonly` **bearBarColor**: `string`

#### Inherited from

Omit.bearBarColor

___

### bullBarColor

• `Readonly` **bullBarColor**: `string`

#### Inherited from

Omit.bullBarColor

___

### color

• `Readonly` **color**: `string`

#### Inherited from

Omit.color

___

### data

• `Readonly` **data**: [`Candlesticks`](../modules/components_CandlestickChart_CandlestickChart_common_BaseChart.md#candlesticks)

#### Inherited from

Omit.data

___

### getLabel

• `Readonly` **getLabel**: (`key`: `NumStr`) => `string`

Returns label for a key.

**`Param`**

Candlestick key.

#### Type declaration

▸ (`key`): `string`

Returns label for a key.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `NumStr` | Candlestick key. |

##### Returns

`string`

Label.

#### Inherited from

Omit.getLabel

___

### height

• `Readonly` **height**: `number`

#### Inherited from

Omit.height

___

### initialRangeFrom

• `Readonly` **initialRangeFrom**: `number`

___

### initialRangeTo

• `Readonly` **initialRangeTo**: `number`

___

### maxHorizontalCells

• `Readonly` **maxHorizontalCells**: `number`

#### Inherited from

Omit.maxHorizontalCells

___

### maxSliceLength

• `Readonly` **maxSliceLength**: `number`

___

### minLabelsDistance

• `Readonly` **minLabelsDistance**: `number`

#### Inherited from

Omit.minLabelsDistance

___

### minLabelsEdgeDistance

• `Readonly` **minLabelsEdgeDistance**: `number`

#### Inherited from

Omit.minLabelsEdgeDistance

___

### minSliceLength

• `Readonly` **minSliceLength**: `number`

___

### onSelect

• `Optional` `Readonly` **onSelect**: (`index`: `number`) => `void`

Selects index.

**`Param`**

Index.

#### Type declaration

▸ (`index`): `void`

Selects index.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index. |

##### Returns

`void`

___

### paddingBottom

• `Readonly` **paddingBottom**: `number`

#### Inherited from

Omit.paddingBottom

___

### paddingEnd

• `Readonly` **paddingEnd**: `number`

#### Inherited from

Omit.paddingEnd

___

### paddingStart

• `Readonly` **paddingStart**: `number`

#### Inherited from

Omit.paddingStart

___

### paddingTop

• `Readonly` **paddingTop**: `number`

#### Inherited from

Omit.paddingTop

___

### selectedColor

• `Readonly` **selectedColor**: `string`

#### Inherited from

Omit.selectedColor

___

### selectedIndex

• `Optional` `Readonly` **selectedIndex**: `numberU`

#### Inherited from

Omit.selectedIndex

___

### verticalLabels

• `Readonly` **verticalLabels**: [`VerticalLabels`](../modules/components_CandlestickChart_CandlestickChart_common_BaseChart.md#verticallabels)

#### Inherited from

Omit.verticalLabels

___

### verticalRangeFrom

• `Readonly` **verticalRangeFrom**: `number`

___

### verticalRangeTo

• `Readonly` **verticalRangeTo**: `number`

___

### width

• `Readonly` **width**: `number`

#### Inherited from

Omit.width
