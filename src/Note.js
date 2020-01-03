import React from 'react'
import DummyStore from './dummy-store'
import { Link } from 'react-router-dom'



export default function Note(props) {
  
    
    let id = props.match.params.folderId
    const folder = DummyStore.folders.map(a => a.id === id ? <h1>{a.name}</h1> : null)
    const notes = DummyStore.notes.map((a,b) => a.folderId === id ?  <><h2><Link to={`/notes/${a.id}`}>{a.name}</Link></h2><p>{a.modified}</p><input type='button' value='delete' /></> : null)
    
    
  

  return(
    <>
      {folder}
      {notes}

    </>
    
    
  )
}