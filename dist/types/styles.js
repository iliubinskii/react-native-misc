"use strict";
/* eslint-disable misc/consistent-enum-members -- Ok */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Width = exports.TextDecorationLine = exports.Position = exports.Overflow = exports.JustifyContent = exports.ImageResizeMode = exports.Height = exports.FontWeight = exports.FontStyle = exports.FlexWrap = exports.FlexDirection = exports.Display = exports.Color = exports.AlignItems = void 0;
var AlignItems;
(function (AlignItems) {
    AlignItems["baseline"] = "baseline";
    AlignItems["center"] = "center";
    AlignItems["flexEnd"] = "flex-end";
    AlignItems["flexStart"] = "flex-start";
    AlignItems["stretch"] = "stretch";
})(AlignItems || (exports.AlignItems = AlignItems = {}));
var Color;
(function (Color) {
    Color["none"] = "none";
    Color["transparent"] = "#00000000";
})(Color || (exports.Color = Color = {}));
var Display;
(function (Display) {
    Display["flex"] = "flex";
    Display["none"] = "none";
})(Display || (exports.Display = Display = {}));
var FlexDirection;
(function (FlexDirection) {
    FlexDirection["column"] = "column";
    FlexDirection["columnReverse"] = "column-reverse";
    FlexDirection["row"] = "row";
    FlexDirection["rowReverse"] = "row-reverse";
})(FlexDirection || (exports.FlexDirection = FlexDirection = {}));
var FlexWrap;
(function (FlexWrap) {
    FlexWrap["nowrap"] = "nowrap";
    FlexWrap["wrap"] = "wrap";
    FlexWrap["wrapReverse"] = "wrap-reverse";
})(FlexWrap || (exports.FlexWrap = FlexWrap = {}));
var FontStyle;
(function (FontStyle) {
    FontStyle["italic"] = "italic";
    FontStyle["normal"] = "normal";
})(FontStyle || (exports.FontStyle = FontStyle = {}));
var FontWeight;
(function (FontWeight) {
    FontWeight["bold"] = "bold";
    FontWeight["n100"] = "100";
    FontWeight["n200"] = "200";
    FontWeight["n300"] = "300";
    FontWeight["n400"] = "400";
    FontWeight["n500"] = "500";
    FontWeight["n600"] = "600";
    FontWeight["n700"] = "700";
    FontWeight["n800"] = "800";
    FontWeight["n900"] = "900";
    FontWeight["normal"] = "normal";
})(FontWeight || (exports.FontWeight = FontWeight = {}));
var Height;
(function (Height) {
    Height["p100"] = "100%";
})(Height || (exports.Height = Height = {}));
var ImageResizeMode;
(function (ImageResizeMode) {
    ImageResizeMode["center"] = "center";
    ImageResizeMode["contain"] = "contain";
    ImageResizeMode["cover"] = "cover";
    ImageResizeMode["repeat"] = "repeat";
    ImageResizeMode["stretch"] = "stretch";
})(ImageResizeMode || (exports.ImageResizeMode = ImageResizeMode = {}));
var JustifyContent;
(function (JustifyContent) {
    JustifyContent["center"] = "center";
    JustifyContent["flexEnd"] = "flex-end";
    JustifyContent["flexStart"] = "flex-start";
    JustifyContent["spaceAround"] = "space-around";
    JustifyContent["spaceBetween"] = "space-between";
    JustifyContent["spaceEvenly"] = "space-evenly";
})(JustifyContent || (exports.JustifyContent = JustifyContent = {}));
var Overflow;
(function (Overflow) {
    Overflow["hidden"] = "hidden";
    Overflow["scroll"] = "scroll";
    Overflow["visible"] = "visible";
})(Overflow || (exports.Overflow = Overflow = {}));
var Position;
(function (Position) {
    Position["absolute"] = "absolute";
    Position["relative"] = "relative";
})(Position || (exports.Position = Position = {}));
var TextDecorationLine;
(function (TextDecorationLine) {
    TextDecorationLine["lineThrough"] = "line-through";
    TextDecorationLine["none"] = "none";
    TextDecorationLine["underline"] = "underline";
})(TextDecorationLine || (exports.TextDecorationLine = TextDecorationLine = {}));
var Width;
(function (Width) {
    Width["p100"] = "100%";
})(Width || (exports.Width = Width = {}));
//# sourceMappingURL=styles.js.map