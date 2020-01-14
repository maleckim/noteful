import React from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../Errors/ValidationError'
import './AddFolder.css'

export default class AddFolder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      folderName: {
        value: '',
        touched: false
      }
    }
  }

  updateName = (name) => {
    this.setState({ folderName: { value: name, touched: true } })
  }

  validName() {
    const name = this.state.folderName.value.trim();
    if (name.length === 0) {
      return 'Name is required';
    } else if (name.length < 3) {
      return 'Name must be longer than three characters'
    }
  }

  
  render() {
    let nameError = this.validName();

    return (

      <NotefulContext.Consumer>{
        value => {
          return (
        <form className='addFolder' onSubmit={(e) => value.addFolder(this.state.folderName.value)}>
          <input type='text' name='folderName' onChange={folderName => this.updateName(folderName.target.value)} />
          <button type='submit' disabled={this.validName()}>Add Folder</button>
          {this.state.folderName.touched && <ValidationError render={nameError} />}
        </form>
          )
        }
      }
      </NotefulContext.Consumer>
    )
  }
}