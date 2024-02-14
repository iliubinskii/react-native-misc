import type { Icon } from "../../icons";
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props {
    /**
     * Icon extractor.
     *
     * @param name - Name.
     * @returns Icon.
     */
    readonly getIcon: (name: string) => Icon;
    readonly name: string;
    /**
     * Selects icon.
     *
     * @param name - Name.
     */
    readonly onSelect: (name: string) => void;
    readonly selected: boolean;
}
//# sourceMappingURL=Item.d.ts.map