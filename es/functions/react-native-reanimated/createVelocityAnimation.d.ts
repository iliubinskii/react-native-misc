import type { EasingFunction, EasingFunctionFactory } from "react-native-reanimated";
import type { NativeAnimation } from "./react-native-reanimated-common";
/**
 * Creates animation.
 * @param options - Options.
 * @returns Animation.
 */
export declare function createVelocityAnimation(options: Options): NativeAnimation;
/**
 * @internal
 */
export interface Options {
    readonly averageVelocity: number;
    readonly easing: EasingFunction | EasingFunctionFactory;
    readonly maxDuration: number;
    readonly minDuration: number;
}
//# sourceMappingURL=createVelocityAnimation.d.ts.map