import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Folder from './Folder'
import Note from './Note'
import NoteContent from './NoteContent'
import NotefulContext from './NotefulContext';

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
            this.getStore('folders');
            this.getStore('notes');
        })
    }






    render() {

        return (
            <NotefulContext.Provider value={{
                folder: this.state.folders,
                notes: this.state.notes,
                delete: this.deleteNote
            }}>
                <header><Link to='/'>NoteFul</Link></header>
                <nav>
                    <Route path="/" component={Folder} />
                </nav>

                <main>

                    <Route path="/folder/:folderId" component={Note} />



                    <Route path='/notes/:noteId' component={NoteContent} />

                </main>

            </NotefulContext.Provider>

        )

    }
}
