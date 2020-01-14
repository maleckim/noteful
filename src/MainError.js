import React from 'react';

export default class MainError extends React.Component {

  state = {
    error: null
  }

  static getDerivedStateFromError(error) {

    return{error};
  }

  render(){
    if(this.state.error){
      return(
      <p>ooooooops</p>
      )
    }

    return(
      this.props.children
    )


  }


}