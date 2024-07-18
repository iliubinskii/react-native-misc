import { AlignItems, Position } from "../types";
import { Row, Text } from "./common-components";
import React from "react";
import { View } from "react-native";
import { consts } from "../core";
import { memo } from "react-misc";
export default memo("TextAlert", ({ AlertIcon, alertIconColor, ...props }) => (<Row>
      <Text {...props}/>
      {AlertIcon ? (<View style={{
            alignItems: AlignItems.flexStart,
            end: -offsetEnd - size,
            position: Position.absolute,
            top: -offsetTop,
            width: size
        }}>
          <AlertIcon color={alertIconColor} size={size}/>
        </View>) : undefined}
    </Row>));
const { offsetEnd, offsetTop, size } = consts.TextAlert;
//# sourceMappingURL=TextAlert.jsx.map