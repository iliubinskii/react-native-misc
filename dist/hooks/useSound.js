"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSound = useSound;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_sound_1 = tslib_1.__importDefault(require("react-native-sound"));
const react_misc_1 = require("react-misc");
/**
 * Creates sound.
 * @param source - Source.
 * @returns Sound.
 */
function useSound(source) {
    const sound = react_1.default.useRef(new react_native_sound_1.default(source)).current;
    (0, react_misc_1.useResource)(() => () => {
        sound.release();
    }, [sound]);
    return sound;
}
//# sourceMappingURL=useSound.js.map