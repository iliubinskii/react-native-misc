import * as React from "react";
import { AlignItems, Position } from "../types";
import { Row, Text } from "./common-components";
import type { Icon } from "../icons";
import { View } from "react-native";
import { consts } from "../core";
import { memo } from "react-misc";
import type { stringU } from "typescript-misc";

export default memo(
  "TextAlert",
  ({ AlertIcon, alertIconColor, ...props }: Props) => (
    <Row>
      <Text {...props} />
      {AlertIcon ? (
        <View
          style={{
            alignItems: AlignItems.flexStart,
            end: -offsetEnd - size,
            position: Position.absolute,
            top: -offsetTop,
            width: size
          }}
        >
          <AlertIcon color={alertIconColor} size={size} />
        </View>
      ) : undefined}
    </Row>
  )
);

/**
 * @internal
 */
export interface Props extends React.ComponentProps<typeof Text> {
  readonly AlertIcon?: Icon | undefined;
  readonly alertIconColor?: stringU;
}

const { offsetEnd, offsetTop, size } = consts.TextAlert;
