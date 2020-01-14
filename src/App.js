import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';
import NoteContent from './NoteContent';
import NotefulContext from './NotefulContext';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import moment from 'moment';
import MainError from './MainError'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            folders: [],
            notes: []
        }
    }


    componentDidMount() {
        this.getStore('folders')
        this.getStore('notes')
    }

    getStore(endPoint) {
        let url = `http://localhost:9090/${endPoint}`
        fetch(url)
            .then(res => res.json())
            .then(resJson => this.setState({
                [endPoint]: resJson
            }))
    }

    deleteNote = (id) => {
        fetch(`http://localhost:9090/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                
                this.getStore('notes');
            })
    }

    folderPost = (name) => {
        let url = `http://localhost:9090/folders`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })
            .then(res => this.getStore(`folders`))
    }


    notePost = (content, folderId, title) => {
        console.log(title)
        let url = `http://localhost:9090/notes`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name: title, folderId: folderId, modified: moment().format(), content: content })
        })
            .then(res => res.json())
            .then(resJson => this.getStore('notes'))
    }



    render() {

        return (
            <NotefulContext.Provider value={{
                folder: this.state.folders,
                notes: this.state.notes,
                delete: this.deleteNote,
                addFolder: this.folderPost,
                addNote: this.notePost
            }}>
                <header>
                    <Link to='/'>NoteFul</Link>
                </header>

                <nav>
                    <Route path="/" component={Folder} />
                </nav>

                <main>

                    <MainError>
                        <Route path="/folder/:folderId" component={Note} />
                        <Route path='/folder/:folderId/add-note' component={AddNote} />
                        <Route path='/notes/:noteId' component={NoteContent} />
                        <Route path='/folder/add-folder' component={AddFolder} />
                    </MainError>

                </main>

            </NotefulContext.Provider>

        )

    }
}
