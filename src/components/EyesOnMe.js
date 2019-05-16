// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

  handleFocus = () => console.log('Good!')

  handleOnBlur = () => console.log('Hey! Eyes on me!')


  render(){
    return(
      <button onFocus={this.handleFocus} onBlur={this.handleOnBlur}>  Eyes on me, please! </button>
    )
  }
}

export default EyesOnMe
