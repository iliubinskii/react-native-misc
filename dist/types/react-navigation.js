"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabNavigatorBackBehavior = exports.StackNavigatorAnimation = exports.NavigationEvent = void 0;
var NavigationEvent;
(function (NavigationEvent) {
    NavigationEvent["blur"] = "blur";
    NavigationEvent["focus"] = "focus";
})(NavigationEvent || (exports.NavigationEvent = NavigationEvent = {}));
var StackNavigatorAnimation;
(function (StackNavigatorAnimation) {
    StackNavigatorAnimation["default"] = "default";
    StackNavigatorAnimation["fade"] = "fade";
    StackNavigatorAnimation["flip"] = "flip";
    StackNavigatorAnimation["none"] = "none";
    StackNavigatorAnimation["simple_push"] = "simple_push";
    StackNavigatorAnimation["slide_from_bottom"] = "slide_from_bottom";
    StackNavigatorAnimation["slide_from_left"] = "slide_from_left";
    StackNavigatorAnimation["slide_from_right"] = "slide_from_right";
})(StackNavigatorAnimation || (exports.StackNavigatorAnimation = StackNavigatorAnimation = {}));
var TabNavigatorBackBehavior;
(function (TabNavigatorBackBehavior) {
    TabNavigatorBackBehavior["firstRoute"] = "firstRoute";
    TabNavigatorBackBehavior["history"] = "history";
    TabNavigatorBackBehavior["initialRoute"] = "initialRoute";
    TabNavigatorBackBehavior["none"] = "none";
    TabNavigatorBackBehavior["order"] = "order";
})(TabNavigatorBackBehavior || (exports.TabNavigatorBackBehavior = TabNavigatorBackBehavior = {}));
//# sourceMappingURL=react-navigation.js.map