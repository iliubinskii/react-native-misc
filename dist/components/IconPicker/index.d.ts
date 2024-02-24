import type { CommonProps } from "react-misc";
import type { stringU, strings } from "typescript-misc";
import type { Icon } from "../../icons";
declare global {
    namespace facades {
        namespace lang {
            interface Word extends ScopedWord {
            }
        }
    }
    namespace reactNativeMisc {
        interface Icon extends ScopedIcon {
        }
    }
}
declare const _default: import("react-misc").FunctionComponent<Props>;
export default _default;
/**
 * @internal
 */
export interface Props extends CommonProps.Closeable {
    /**
     * Icon extractor.
     *
     * @param name - Name.
     * @returns Icon.
     */
    readonly getIcon: (name: string) => Icon;
    readonly names: strings;
    /**
     * Selects icon.
     *
     * @param name - Name.
     */
    readonly onSave: (name?: string) => void;
    readonly selectedName?: stringU;
}
/**
 * @internal
 */
export interface ScopedIcon {
    readonly NotFoundIcon: true;
}
/**
 * @internal
 */
export interface ScopedWord {
    readonly Clear: true;
    readonly IconPicker: true;
    readonly NothingFoundForYourSearch: true;
    readonly Save: true;
    readonly TypeYourSearch: true;
}
//# sourceMappingURL=index.d.ts.map