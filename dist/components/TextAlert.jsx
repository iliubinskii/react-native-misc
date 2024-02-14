"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const types_1 = require("../types");
const common_components_1 = require("./common-components");
const react_native_1 = require("react-native");
const core_1 = require("../core");
const react_misc_1 = require("react-misc");
exports.default = (0, react_misc_1.memo)("TextAlert", ({ AlertIcon, alertIconColor, ...props }) => (<common_components_1.Row>
      <common_components_1.Text {...props}/>
      {AlertIcon ? (<react_native_1.View style={{
            alignItems: types_1.AlignItems.flexStart,
            end: -offsetEnd - size,
            position: types_1.Position.absolute,
            top: -offsetTop,
            width: size
        }}>
          <AlertIcon color={alertIconColor} size={size}/>
        </react_native_1.View>) : undefined}
    </common_components_1.Row>));
const { offsetEnd, offsetTop, size } = core_1.consts.TextAlert;
//# sourceMappingURL=TextAlert.jsx.map