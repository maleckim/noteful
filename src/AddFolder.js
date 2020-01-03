import React, { Component } from 'react'



export default class AddFolder extends Component {
  

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddFolder(e.target.folderName.value)
  }
  

  
  render() {
    console.log(this.props)
    const { onClickCancel } = this.props
    return(
      <>
      
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='folderName'></input>
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => this.props.history.goBack()}>Go Back</button>
      </>
    )
  }
  
}
