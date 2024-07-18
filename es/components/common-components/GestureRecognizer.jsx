import GestureRecognizer from "react-native-swipe-gestures";
import React from "react";
import { isRtl } from "../../consts";
import { memo } from "react-misc";
import { o } from "typescript-misc";
export default memo("GestureRecognizer", ({ onSwipeEnd, onSwipeStart, ...props }) => {
    const onSwipeLeft = isRtl ? onSwipeEnd : onSwipeStart;
    const onSwipeRight = isRtl ? onSwipeStart : onSwipeEnd;
    return (<GestureRecognizer {...o.removeUndefinedKeys({ onSwipeLeft, onSwipeRight, ...props })}/>);
});
//# sourceMappingURL=GestureRecognizer.jsx.map