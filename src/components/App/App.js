import React from "react";
import "./App.css";
import EditorPage from "../EditorPage/EditorPage";
import { EditorState, convertToRaw } from "draft-js";

function App() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const [entry, setEntry] = React.useState(() => Date.parse(new Date()));

  function editorOnChange(editorState) {
    saveContent(editorState)
    setEditorState(editorState);
  }

  function saveContent(editorState) {
    if (editorState.getCurrentContent().hasText()) {
      const contentState = editorState.getCurrentContent();
      window.localStorage.setItem(entry, JSON.stringify(convertToRaw(contentState)));;
    } else {
      window.localStorage.removeItem(entry);
    }
  }

  function newEntry() {
    setEntry(Date.parse(new Date()));
    setEditorState(EditorState.createEmpty());
    console.log(entry);
  }

  return (
    <div className="App">
      <EditorPage editorState={editorState} onChange={editorOnChange} />
      <button
        onClick={newEntry}
      >
        New entry
			</button>
    </div>
  );
};

export default App;
