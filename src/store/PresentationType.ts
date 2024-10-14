type PresentationType = {
    title: string,
    slides: Array<SlideType>,
}

type SlideType = {
    id: string,
    objects: Array<SlideObject>,
    background: string,
}

type SlideObject = TextObjectType | ImageObjectType

type BaseSlideObject = {
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
}

type TextObjectType = BaseSlideObject & {
    type: 'text',
    text: string,
    fontFamily: string,
    fontSize: number,
    fontColor: string,
}

type ImageObjectType = BaseSlideObject & {
    type: 'image',
    src: string,
}

export {
    PresentationType,
    SlideType,
    TextObjectType,
    ImageObjectType,
}
