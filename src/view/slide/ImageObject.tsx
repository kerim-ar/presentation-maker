import {ImageObjectType} from "../../store/PresentationType.ts";
import {CSSProperties} from "react";

type ImageObjectProps = {
    imageObject: ImageObjectType,
    scale?: number,
}

function ImageObject({imageObject, scale = 1}: ImageObjectProps) {
    const imageObjectStyles: CSSProperties = {
        position: 'absolute',
        top: `${imageObject.y * scale}px`,
        left: `${imageObject.x * scale}px`,
        width: `${imageObject.width * scale}px`,
        height: `${imageObject.height * scale}px`,
    }
    return (
        <img style={imageObjectStyles} src={`data:image/jpeg;base64, ${imageObject.src}`}/>
    )
}

export {
    ImageObject,
}
