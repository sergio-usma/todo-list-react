import './App.css';
import Header from './components/Header.jsx';
import CreateArea from './components/CreateArea.jsx';
import React, { useState } from "react";
import Note from './components/NotesWrapper.jsx';

function App() {

const [notes, setNotes] = useState([]);

function addNote (newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
}

function deleteNote (id) {
    setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
            return index !== id;
        });
    });
}

    return (
    <div className="App">
      <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => {
            return (
                <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            )}
        )}
    </div>
  );
}

export default App;
