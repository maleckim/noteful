import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import DummyStore from './dummy-store';


export default class Folder extends Component {
  

  
  render(){
    
  return (
    <>
    
    <ul>
      
      {DummyStore['folders'].map(folder => 
        <li key={folder.id}>
          <Link to={`/folder/${folder.id}`}>
          {folder.name}
          </Link>
        </li>  
          
        )}
    </ul>
      <Link to={'/add-folder'}>Add Folder</Link>
      

    </>
    
  )
      }
    
    
 
}