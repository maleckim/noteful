import React from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'



export default function Note(props) {

  let id = props.match.params.folderId

  return (
    <NotefulContext.Consumer>
      {value => {

        return (
          <>
            {value.folder.map(a => a.id === id ? <h1>{a.name}</h1> : null)}
            <button onClick={() => props.history.push(`/folder/${id}/add-note`)}>Add Note</button>
            {value.notes.map((a, b) =>
              a.folderId === id ?
                <>
                
                  <h2>
                    <Link to={`/notes/${a.id}`}>{a.name}
                    </Link>
                  </h2>
                  <p>{a.modified}</p>
                  <input type='button'
                    value='delete'
                    onClick={() => value.delete(a.id)} />
                
                </>
                : null)}
          </>
        )

      }}
    </NotefulContext.Consumer>

  )
}