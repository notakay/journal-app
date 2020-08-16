import React from 'react';
import './App.css';

import EditorPage from '../EditorPage/EditorPage'

function App() {
  const keys = [];
  const localStorage = window.localStorage;
  for (let i = 0; i < localStorage.length - 1; ++i) {
    keys.push(localStorage.key(i));
  }
  // Sidebars that takes us to editors??
  // ned to work on saving

  return (
    <div className="App">
      {
        (localStorage.length > 0) ?
          <EditorPage entry={localStorage.key(localStorage.length - 1)} /> :
          <EditorPage entry={Date.parse(new Date())} />
      }
    </div>
  );
}

export default App;
