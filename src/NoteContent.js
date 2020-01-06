import React from 'react';
import DummyStore from './dummy-store'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext';


export default function NoteContent(props) {

  const id = props.match.params.noteId

  


  return (


    <NotefulContext.Consumer>
      {value => {
        return (
          <>
            {/* {value.notes.map(a => id === a.id ? value.folders.map(b => b.id === a.folderId ? <h1>{b.name}</h1> : null) : null)} */}
            {value.notes.map(a => a.id === id ? <p>{a.content}</p> : null)}
            <button onClick={() => props.history.goBack()}>Go Back</button>

          </>
        )
      }}
    </NotefulContext.Consumer>




  )
}