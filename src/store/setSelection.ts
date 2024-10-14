import {EditorType, SelectionType} from "./EditorType.ts";

function setSelection(editor: EditorType, newSelection: SelectionType): EditorType {
    return {
        ...editor,
        selection: newSelection,
    }
}

export {
    setSelection,
}
