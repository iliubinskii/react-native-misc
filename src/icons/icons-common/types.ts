import type * as React from "react";
import type { Rec, numberU, stringU, types } from "typescript-misc";

declare global {
  namespace reactNativeMisc {
    // eslint-disable-next-line misc/typescript/no-empty-interfaces -- Ok
    interface Icon {}
  }
}

export interface Icon {
  /**
   * Icon component.
   *
   * @param props - Properties.
   * @returns React element.
   */
  (props: IconProps): React.ReactElement;
}

/**
 * @internal
 */
export type IconName = types.object.keys.Pick<
  reactNativeMisc.Icon,
  true,
  "extends->"
>;

export interface IconProps {
  readonly color?: stringU;
  readonly size?: numberU;
}

export type Icons<I extends IconName = IconName> = Rec<I, Icon>;
