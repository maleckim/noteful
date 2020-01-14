import React from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from '../NotefulContext'
import './Note.css'



export default function Note(props) {

  let id = props.match.params.folderId


  return (
    <NotefulContext.Consumer>
      {value => {
        return (
          <>
            <div className='noteHeader'>
              {value.folder.map((a, b) => a.id === id ? <h1 className='currentFolder' key={b}> Current Folder: {a.name} </h1> : null)}
              <button className='addNote' onClick={() => props.history.push(`/folder/${id}/add-note`)}>Add Note</button>
            </div>

            {value.notes.map((a, b) =>
              a.folderId === id ?

                <div key={b} className='noteList'>
                  <h2><Link to={`/notes/${a.id}`}>{a.name}</Link></h2>

                  <p>{a.modified}</p>

                  <input className='noteDelete' type='button'
                    value='delete'
                    onClick={() => value.delete(a.id)} />

                </div>
                : null
            )}

          </>
        )

      }}
    </NotefulContext.Consumer>

  )
}