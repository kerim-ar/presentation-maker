import {TextObjectType} from "../../store/PresentationType.ts";
import {CSSProperties} from "react";

type TextObjectProps = {
    textObject: TextObjectType,
    scale?: number,
}
function TextObject({textObject, scale = 1}: TextObjectProps) {
    const textObjectStyles: CSSProperties = {
        position: 'absolute',
        top: `${textObject.y * scale}px`,
        left: `${textObject.x * scale}px`,
        width: `${textObject.width * scale}px`,
        height: `${textObject.height * scale}px`,
        fontSize: `${textObject.fontSize * scale}px`
    }
    return (
        <p style={textObjectStyles}>{textObject.text}</p>
    )
}

export {
    TextObject,
}
