import React from 'react'

const Title = ( { handleToggleDarkMode } ) => {
  return (
    <div className='header' >
        <h1>My Notes</h1>
        <button onClick={() =>
         handleToggleDarkMode((previousDarkMode) => !previousDarkMode
        )} 
             
        className='save' >Toggle Mode</button>
    </div>
  )
}

export default Title