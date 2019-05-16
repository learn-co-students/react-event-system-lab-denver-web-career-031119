// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {
    

    render() {
        return (
            <form>
                <input type="password" name="password" onKeyUp={() => console.log("Entering password...")}></input>
            </form>
        )
    }
}