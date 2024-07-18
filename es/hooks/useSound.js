import React from "react";
import Sound from "react-native-sound";
import { useResource } from "react-misc";
/**
 * Creates sound.
 * @param source - Source.
 * @returns Sound.
 */
export function useSound(source) {
    const sound = React.useRef(new Sound(source)).current;
    useResource(() => () => {
        sound.release();
    }, [sound]);
    return sound;
}
//# sourceMappingURL=useSound.js.map