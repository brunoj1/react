import React, { Component, Fragment } from 'react';
import UserOutput from './UserOutput'
import UserInput from './UserInput'

class Assignment extends Component {
    state = { userName: "Bruno" };

    inputHandler = (event) => {
        const value = event.target.value;
        console.log(value);
        this.setState({ userName: value});
    }

    render() {
        return ( 
            <React.Fragment>
                <UserInput change={this.inputHandler.bind(this)}/>
                <UserOutput userName="Ana">Um</UserOutput>
                <UserOutput userName={this.state.userName}>Dois</UserOutput>
                <UserOutput userName="Carla">Três</UserOutput>
            </React.Fragment>
        )}
}

export default Assignment;
// teste2