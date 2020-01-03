import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Folder from './Folder'
import Note from './Note'
import AddFolder from './AddFolder'
import DummyStore from './dummy-store'
import NoteContent from './NoteContent'

export default class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            DummyStore: DummyStore
        }
    }

    onAddFolder = (folder) => {
        this.setState({
            
        })
    }

   
  

    
    render() {
        
        return(
            <>
            <header><Link to='/'>NoteFul</Link></header>
            <nav>
               <Route path="/" 
                render={() => {
                    return<Folder 
                    updated={this.state.newFolder}
                 /> 
                }} />
            </nav>
            <main>
                
               
               <Route path="/folder/:folderId" component={Note} />

               <Route path='/add-folder' render={({history}) => {
                   return<AddFolder
                    history={history}
                    onAddFolder={this.onAddFolder}
                    onClickCancel={() => history.push('/')}
                    />
               }} />

               <Route path='/notes/:noteId' component={NoteContent} />
    
                        
                      
            </main>
            </>
            
        )
        
    }
}
