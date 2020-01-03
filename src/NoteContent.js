import React from 'react';
import DummyStore from './dummy-store'
import {Link} from 'react-router-dom'


export default function NoteContent(props) {
  
  const id = props.match.params.noteId
  
  const fId = DummyStore.notes.map(a => id === a.id ? DummyStore.folders.map(b => b.id === a.folderId ? <h1>{b.name}</h1> : null) : null)

  const noteContent = DummyStore.notes.map(a => a.id === id ? <p>{a.content}</p> : null)


  return (
    <>
      {fId}
      {noteContent}
      <button onClick={() => props.history.goBack()}>Go Back</button>
      
    </>
  )
}