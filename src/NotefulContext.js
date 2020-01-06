import React from 'react';
import Note from './Note';

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  delete: () => {}
})

export default NotefulContext;