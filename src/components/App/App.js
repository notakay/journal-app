import React from 'react';
import './App.css';

import EditorPage from '../EditorPage/EditorPage'

function App() {
  const localStorage = window.localStorage;
  const [keys, setKeys] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(localStorage.key(localStorage.length - 1));

  React.useEffect(
    () => {
      setKeys([]);  // flush
      for (let i = 0; i < localStorage.length; ++i) {
        setKeys(arr => arr.concat(localStorage.key(i)));
      }
    },
    []
  );

  function onClick() {
    let newData = null;
    setCurrentPage(newData);
  }

  return (
    <div className="App">
      {
        (localStorage.length > 0) ?
          keys.filter((key) => (key !== currentPage)).map((key) => <p key={key}>{key}</p>) :
          <p>nothing here yet</p>
      }
      {
        (currentPage) ?
          <EditorPage entry={currentPage} /> :
          <EditorPage entry={Date.parse(new Date())} />
      }
      {
        (currentPage) ?
          <h1>not null</h1> :
          <h1>is null</h1>
      }
      <button onClick={onClick}>new</button>
    </div>
  );
}

export default App;
