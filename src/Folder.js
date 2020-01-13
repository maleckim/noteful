import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';


export default function Folder(props) {



  

    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <>
            <ul>
              {value.folder.map(folder =>
                <li key={folder.id}>
                  <Link to={`/folder/${folder.id}`}>
                    {folder.name}
                  </Link>
                </li>
              )}
            </ul>
            <button onClick={() => props.history.push('/folder/add-folder')}>Add Folder</button>
            </>
          )
        }}

      </NotefulContext.Consumer>

    )
  



}