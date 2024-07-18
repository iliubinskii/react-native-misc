/* eslint-disable unicorn/no-useless-spread -- Ok */
import { MD3LightTheme } from "react-native-paper";
import { evaluate } from "typescript-misc";
export const MD3LightThemeExtended = evaluate(() => {
    const basic = {
        ...{
            onPrimary: "#FFFFFF",
            onPrimaryContainer: "#21005D",
            primary: "#6847C0",
            primaryContainer: "#E8DDFF",
            primaryContainerOutline: "#D4C9EB"
        },
        ...{
            onSecondary: "#FFFFFF",
            onSecondaryContainer: "#1C1D00",
            secondary: "#5F6200",
            secondaryContainer: "#E5EA5D",
            secondaryContainerOutline: "#CDD246"
        },
        ...{
            onTertiary: "#FFFFFF",
            onTertiaryContainer: "#001D32",
            tertiary: "#00639A",
            tertiaryContainer: "#CEE5FF",
            tertiaryContainerOutline: "#BAD1EB"
        },
        ...{
            ok: "#386B01",
            okContainer: "#B7F481",
            okContainerOutline: "#B7F481",
            onOk: "#FFFFFF",
            onOkContainer: "#0D2000"
        },
        ...{
            onWarning: "#FFFFFF",
            onWarningContainer: "#1C1D00",
            warning: "#5F6200",
            warningContainer: "#E5EA5D",
            warningContainerOutline: "#CDD246"
        },
        ...{
            error: "#BA1A1A",
            errorContainer: "#FFDAD6",
            errorContainerOutline: "#EBC6C2",
            onError: "#FFFFFF",
            onErrorContainer: "#410002"
        },
        ...{ background: "#FFFFFF", onBackground: "#1C1D1E" },
        ...{ onSurface: "#1C1D1E", outline: "#797C7F", surface: "#FFFFFF" },
        ...{ onSurfaceDisabled: "#1C1B1E61", surfaceDisabled: "#1C1B1E1F" },
        ...{
            onSurfaceVariant: "#48454E",
            outlineVariant: "#CAC4CF",
            surfaceVariant: "#E6E0EC"
        },
        ...{
            inverseOnPrimary: "#FFFFFF",
            inversePrimary: "#CEBDFF",
            inversePrimaryOutline: "#BAA9EB"
        },
        ...{ inverseOnSurface: "#F4EFF4", inverseSurface: "#313033" },
        ...{ featured: "#FFFFDC" },
        ...{
            fade: "#AAAAAA",
            fadeMore: "#C8C8C8",
            foreground: "#1C1D1E",
            hyperlink: "#0000FF",
            secondLine: "#505050"
        },
        backdrop: "#32353866",
        elevation: {
            level0: "transparent",
            level1: "#F7F2FC",
            level2: "#F3EDFA",
            level3: "#EEE7F8",
            level4: "#EDE5F7",
            level5: "#EAE2F6"
        },
        scrim: "#000000",
        shadow: "#000000",
        svgShadow: "#3235380A"
    };
    const components = {
        avatar: {
            background: basic.surfaceVariant,
            foreground: basic.onSurfaceVariant
        },
        button: { secondary: "#828282" },
        calendar: {
            featured: {
                background: basic.secondaryContainer,
                foreground: basic.onSecondaryContainer
            },
            offDay: basic.error,
            padding: basic.fadeMore,
            selection: basic.elevation.level5,
            selectionInterval: basic.elevation.level1,
            today: basic.tertiary,
            workday: basic.secondLine
        },
        chip: {
            background: "transparent",
            foreground: basic.secondLine,
            outline: basic.outlineVariant
        },
        dense: {
            background: basic.elevation.level1,
            foreground: basic.secondLine,
            toggleButton: {
                background: basic.elevation.level1,
                checked: { background: basic.primary, foreground: basic.onPrimary },
                foreground: basic.fade
            }
        },
        list: {
            selected: {
                background: basic.primaryContainer,
                foreground: basic.onPrimaryContainer
            }
        },
        menuCard: {
            selected: {
                background: basic.inversePrimary,
                foreground: basic.inverseOnPrimary,
                outline: basic.inversePrimaryOutline
            }
        },
        switch: {
            thumb: basic.primary,
            track: { false: basic.surfaceDisabled, true: basic.surfaceDisabled }
        }
    };
    return { ...MD3LightTheme, colors: { ...basic, ...components } };
});
//# sourceMappingURL=themes.js.map