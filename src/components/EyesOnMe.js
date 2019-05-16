// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

    handleFocusEvent = (event) => {
        console.log('Good!');
        
    }

    handleBlurEvent = (event) => {
        console.log('Hey! Eyes on me!');
        
    }

    render() {
        return (
            <div className="eyesonme-component-container">
                <button value="Click Me!" onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent}></button>
            </div>
        )
    }
}