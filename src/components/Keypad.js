// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {

    handleEvent = (event) => {
        console.log('Entering password...');
    }

    render() {
        return (
            <div className="keypad-component-container">
                <input type="password" onKeyUp={this.handleEvent}/>
            </div>
        )
    }
}