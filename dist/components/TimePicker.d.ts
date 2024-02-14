import type { stringU } from "typescript-misc";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props {
    readonly color?: stringU;
    /**
     * Handles time change.
     *
     * @param time - Time.
     */
    readonly onChange: (time: number) => void;
    readonly time: number;
}
//# sourceMappingURL=TimePicker.d.ts.map