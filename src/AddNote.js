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
        touched: false
      }
    }
  }

  findProps = (e) => {
    e.preventDefault()
    console.log('ran')
    console.log(this.props)
  }

  updateContent = (contentVal) => {
    this.setState({newNote:{
      content: contentVal,
      touched: true
    }})
    
  }

  validateContent() {
   
    if ( this.state.newNote.content.length === 0 ){
      return 'Please enter a valid note'
    }else if ( this.state.newNote.content.length < 3 ){
      return 'Content must be greater than 3 characters'
    }else if( this.state.newNote.content.length > 500 ){
      return 'Content must be less than 500 characters'
    }
  }

  render() {
    let contentError = this.validateContent();
    
    return (
      <NotefulContext.Consumer>{
        value => {return(
          <div className='rightClass'>
        {/* <form onSubmit={(e) => value.addNote(this.state.newNote.content)}> */}
        <form onSubmit={(e) => this.findProps(e)}>
          <label>Content</label>
          <input type='text' name='contentVal' onChange={contentVal => this.updateContent(contentVal.target.value)} />
          <button type='submit'>Submit</button>
          {this.state.newNote.touched && <ValidationError render={contentError}/>}
        </form>
      </div>

        )}
      }
      </NotefulContext.Consumer>
    )
  }




}