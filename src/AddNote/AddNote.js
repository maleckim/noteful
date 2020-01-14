import React from 'react'
import './AddNote.css'
import NotefulContext from '../NotefulContext'
import ValidationError from '../Errors/ValidationError'


export default class AddNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newNote: {
        content: '',
        title: '',
        touched: false,
        titleTouched:false
        
      }
    }
  }

 

  findProps = () => {
    this.props.history.goBack();
  }

  updateContent = (contentVal) => {
    
    this.setState({
      newNote: {
        content: contentVal,
        touched: true,
        title:this.state.newNote.title
      }
    })
  }

  updateHeader = (headerVal) => {
    
    this.setState({
      
      newNote: {
        content: this.state.newNote.content,
        title: headerVal,
        titleTouched: true

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


  validateTitle() {
    const name = this.state.newNote.title.trim();

    if(name.length === 0){
      return 'Title cannot be left empty!'
    }

  }

  render() {
    const contentError = this.validateContent();
    const titleError = this.validateTitle();


    return (
      <NotefulContext.Consumer>{
        value => {
          return (
            <>
              <form className='rightClass' onSubmit={(e) => value.addNote(e,this.state.newNote.content, this.props.match.params.folderId, this.state.newNote.title,this.findProps)}>
                <label>Title</label>
                <input type='text' name='headerVal' onChange={headerVal => this.updateHeader(headerVal.target.value)} />
                <label>Content</label>
                <textarea type='text' name='contentVal' onChange={contentVal => this.updateContent(contentVal.target.value)} />
                <button type='submit' disabled={this.validateContent() || this.validateTitle()}>Submit</button>
                {this.state.newNote.titleTouched && <ValidationError render={titleError} />}
                {this.state.newNote.touched && <ValidationError render={contentError} />}
              </form>
           </>

          )
        }
      }
      </NotefulContext.Consumer>
    )
  }




}