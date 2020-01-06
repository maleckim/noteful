import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import DummyStore from './dummy-store';
import NotefulContext from './NotefulContext';


export default class Folder extends Component {



  render() {

    return (
      <NotefulContext.Consumer>
        {value => {

          return (
            <ul>

              {value.folder.map(folder =>
                <li key={folder.id}>
                  <Link to={`/folder/${folder.id}`}>
                    {folder.name}
                  </Link>
                </li>

              )}
            </ul>
          )
        }}

      </NotefulContext.Consumer>

    )
  }



}