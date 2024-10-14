import styles from './App.module.css'
import {SlidesList} from "./view/SlidesList.tsx";
import {TopPanel} from "./view/topPanel/TopPanel.tsx";
import {Workspace} from "./view/Workspace.tsx";
import {EditorType} from "./store/EditorType.ts";

type AppProps = {
    editor: EditorType,
}
function App({editor}: AppProps) {
    return (
        <>
            <TopPanel title={editor.presentation.title}></TopPanel>
            <div className={styles.container}>
                <SlidesList slides={editor.presentation.slides} selection={editor.selection}></SlidesList>
                <Workspace slide={editor.presentation.slides[0]}></Workspace>
            </div>
        </>
    )
}

export default App
