import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';

import NotesList from './components/NotesList'
import Search from './components/Search';
import Title from './components/Title';



const App = () => {
  const [notes, setNotes] = useState([]);

const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('my-notes-app-data')
  
  );

  if(savedNotes) {
    setNotes(savedNotes);
  }    

},[]);

useEffect(() => {
  localStorage.setItem('my-notes-app-data', JSON.stringify(notes))
}, [notes]);

const addNote = (text, title) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    title: title,
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const deleteNote = (id)=>  {
 const newNotes = notes.filter((note) => note.id !== id);
 setNotes(newNotes);
}

  return (
    <div className={`${darkMode && 'dark-mode'}`} >  

        <div className='container' >

        <Title handleToggleDarkMode={setDarkMode}/>

        <Search handleSearchNote={setSearchText} />

        <NotesList 
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText)
          )}

        // notes={notes} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
        />
        </div>

    </div>

   
  )
}

export default App