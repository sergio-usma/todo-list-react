import './App.css';
import Header from './components/Header.jsx';
import CreateArea from './components/CreateArea.jsx';
import React, { useState } from "react";

function App() {

const [notes, setNotes] = useState([]);

function addNote (newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
}

  return (
    <div className="App">
      <Header />
        <CreateArea onAdd={addNote}/>
    </div>
  );
}

export default App;
