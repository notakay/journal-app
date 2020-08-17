import React from "react";
import { Editor } from "draft-js";
import "draft-js/dist/Draft.css";

export default function MyEditor({ editorState, onChange }) {
	return (
		<div>
			<Editor editorState={editorState} onChange={onChange} />
		</div>
	);
}
