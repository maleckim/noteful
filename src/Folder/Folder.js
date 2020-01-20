import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './Folder.css'


export default function Folder(props) {



  return (
    <NotefulContext.Consumer>
      {value => {
        return (
          <>
          
            <h2 className='folderHead'>Folders</h2>
            <ul className='folderHolder'>
              {value.folder.map(folder =>
                <li className='folderList' key={folder.id}>
                  <Link to={`/folder/${folder.id}`}>
                    {folder.name}
                  </Link>
                </li>
              )}
              <li><button className='folderList button' onClick={() => props.history.push('/add-folder')}>+</button></li>
            </ul>

          </>
        )
      }}

    </NotefulContext.Consumer>

  )




}