"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSound = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_sound_1 = tslib_1.__importDefault(require("react-native-sound"));
const react_misc_1 = require("react-misc");
/**
 * Creates sound.
 *
 * @param source - Source.
 * @returns Sound.
 */
function useSound(source) {
    const sound = React.useRef(new react_native_sound_1.default(source)).current;
    (0, react_misc_1.useResource)(() => () => {
        sound.release();
    }, [sound]);
    return sound;
}
exports.useSound = useSound;
//# sourceMappingURL=useSound.js.map