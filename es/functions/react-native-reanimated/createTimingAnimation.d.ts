import type { EasingFunction, EasingFunctionFactory } from "react-native-reanimated";
import type { NativeAnimation } from "./react-native-reanimated-common";
/**
 * Creates animation.
 * @param options - Options.
 * @returns Animation.
 */
export declare function createTimingAnimation(options: Options): NativeAnimation;
/**
 * @internal
 */
export interface Options {
    readonly duration: number;
    readonly easing: EasingFunction | EasingFunctionFactory;
}
//# sourceMappingURL=createTimingAnimation.d.ts.map