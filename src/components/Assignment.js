import React, { Component, Fragment, Button } from 'react';
import UserOutput from './UserOutput'
import UserInput from './UserInput'

class Assignment extends Component {
    state = 
    { 
        showUsers: false,
        messageShow: "Show",
        persons: [
                    {
                        name: "Bruno",
                        description: "Yamasaki"
                    }, {
                        name: "Carla",
                        description: "Etc"
                    }
                ]
        };

    deletePersonhandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    inputHandler = (event) => {
        const value = event.target.value;
        console.log(value);
        let persons = [...this.state.persons];
        if (persons.length > 0)
            persons[0].name = value;

        this.setState({ persons: persons});
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showUsers;        

        this.setState(
            {
                showUsers: !doesShow, 
                messageShow: doesShow  ? "Show": "Hide"
            });
    }

    render() {
        let users = null;

        if (this.state.showUsers) {
            users = (<div>
             {this.state.persons.map((person, key) => 
                <UserOutput click={this.deletePersonhandler.bind(this)} key={key} userName={person.name}>{person.description}</UserOutput>
             )}</div>)};

        return ( 
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.togglePersonHandler.bind(this)}>{this.state.messageShow}</button>
                <br/><br/>

                <UserInput change={this.inputHandler.bind(this)}/>
                {users}
            </React.Fragment>
        )}
}

export default Assignment;