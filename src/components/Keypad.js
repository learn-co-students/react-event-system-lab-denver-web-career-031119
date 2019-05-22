// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

    handlePassInput = () => {
        console.log("Entering password...")
    }

    render(){
        return (
            <div>
                <input type='password' onKeyUp={this.handlePassInput}></input>
            </div>
        )
    }
}

export default Keypad