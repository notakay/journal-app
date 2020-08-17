import React from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function MyEditor() {
	const [editorState, setEditorState] = React.useState(() =>
		EditorState.createEmpty()
	);

	return (
		<div>
			<button onClick={() => setEditorState(EditorState.createEmpty())}>
				New
			</button>
			<Editor editorState={editorState} onChange={setEditorState} />
		</div>
	);
}
