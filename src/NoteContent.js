import React from 'react';
import NotefulContext from './NotefulContext';


export default function NoteContent(props) {

  const id = props.match.params.noteId

  


  return (


    <NotefulContext.Consumer>
      {value => {
        return (
          <>
            {value.notes.map(a => a.id === id ? <p>{a.content}</p> : null)}
            <button onClick={() => props.history.goBack()}>Go Back</button>
          </>
        )
      }}
    </NotefulContext.Consumer>




  )
}