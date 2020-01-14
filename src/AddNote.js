import React from 'react'
import './AddNote.css'
import NotefulContext from './NotefulContext'
import ValidationError from './ValidationError'


export default class AddNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newNote: {
        content: '',
        title: '',
        touched: false
      }
    }
  }

  findProps = (e) => {
    e.preventDefault()
    console.log('ran')
    console.log(this.props)
    console.log(this.props.match.params.folderId)
  }

  updateContent = (contentVal) => {
    this.setState({
      newNote: {
        content: contentVal,
        touched: true
      }
    })
  }

  updateHeader = (headerVal) => {
    this.setState({

      newNote: {
        content: this.state.newNote.content,
        title: headerVal
      }
    })
  }

  validateContent() {
    const name = this.state.newNote.content.trim();

    if (name.length === 0) {
      return 'Please enter a valid note'
    } else if (name.length < 3) {
      return 'Content must be greater than 3 characters'
    } else if (name.length > 500) {
      return 'Content must be less than 500 characters'
    }
  }

  render() {
    const contentError = this.validateContent();

    return (
      <NotefulContext.Consumer>{
        value => {
          return (
            <div className='rightClass'>
              <form onSubmit={(e) => value.addNote(this.state.newNote.content, this.props.match.params.folderId, this.state.newNote.title)}>
                {/* <form onSubmit={(e) => this.findProps(e)}> */}
                <label>Title</label>
                <input type='text' name='headerVal' onChange={headerVal => this.updateHeader(headerVal.target.value)} />
                <label>Content</label>
                <textarea type='text' name='contentVal' onChange={contentVal => this.updateContent(contentVal.target.value)} />

                <button type='submit'>Submit</button>
                {this.state.newNote.touched && <ValidationError render={contentError} />}
              </form>
            </div>

          )
        }
      }
      </NotefulContext.Consumer>
    )
  }




}