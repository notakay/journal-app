import React, { useState } from "react";
import "./App.css";
import MyEditor from "../EditorPage/EditorPage";
import { EditorState } from "draft-js";

const App = () => {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	return (
		<div className="App">
			<button onClick={() => setEditorState(EditorState.createEmpty())}>
				News
			</button>
			<MyEditor editorState={editorState} onChange={setEditorState} />
		</div>
	);
};

export default App;
