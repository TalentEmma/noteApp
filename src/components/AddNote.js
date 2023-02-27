import React, { useState } from 'react'

const AddNote = ({ handleAddNote }) => {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteText, setNoteText] = useState('');


    const characterLimit = 300;
    
    
    const handleChangeTitle = (event) => {
        if(characterLimit - event.target.value.length >=0){
            setNoteTitle(event.target.value);
            
        }
    };

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
            
        }
       
    };

    const handleSave = () =>
    {
        
        if(noteText.trim().length > 0){
            handleAddNote(noteText, noteTitle);
            
            setNoteTitle('');
            setNoteText('');  
      
        }
       
    };
  return (
    <div className='note new' >
        <input 
        value={noteTitle}
        onChange={handleChangeTitle}
        type="text" 
        placeholder='Enter Title here' />

        <textarea name="" id="" 
        cols="10" 
        rows="8" 
        placeholder='type note here...' 
        value={noteText}
        onChange={handleChange}
        ></textarea>

        <div className="note-footer">
            <small>{characterLimit - noteText.length} words remaining</small>
            <button className='save' onClick={handleSave}>save</button>
        </div>

    </div>
  )
}

export default AddNote;