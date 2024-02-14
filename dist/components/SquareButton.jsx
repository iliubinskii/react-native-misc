"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_paper_1 = require("react-native-paper");
const types_1 = require("../types");
const core_1 = require("../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("SquareButton", ({ contentStyle, ...props }) => (<react_native_paper_1.Button contentStyle={[{ paddingVertical }, contentStyle]} mode={types_1.ButtonMode.contained} theme={{ roundness }} {...props}/>));
const { paddingVertical, roundness } = core_1.consts.SquareButton;
//# sourceMappingURL=SquareButton.jsx.map