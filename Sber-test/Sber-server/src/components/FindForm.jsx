import React, { Component } from 'react';

import { deleteUser, getUser } from '../controller'
import User from './User';

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputId: "",
            placeholder: '',
            foundUser: {},
            userDeleted: false,
            error: false
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        
        this.setState({
            inputId: value
        });
    }

    handleClick = (event) => {
        const { inputId } = this.state;

        if (event.target.name === 'find'){
            this.findUser(inputId);
            return;
        }
        inputId === '' ? alert('Enter your all data!') : this.findUser(inputId)
    }

    deleteUser = () => {
        this.setState({
            userDeleted: false
        });

        deleteUser(this.state.inputName)
        .then(res => this.setState({
            userDeleted: true
        }))
        .catch(res => this.setState({
            error: true,
            foundUser: {}
        }))
    }

    findUser = (id) => {
        getUser(id)
        .then(res => {
            this.setState({
                foundUser: {
                    id: res.id,
                    name: res.name,
                    age: res.age
                },
                error: false
            })
        })
        .catch(res => this.setState({
            error: true,
            foundUser: {}
        }))
    }

    render() {
        const { id, name, age} = this.state.foundUser;

        

        return (
            <>
                <div className="Login">
                    <input type="number" className="Input" placeholder="User's id.." name="inputName" onChange={this.handleChange} />

                    <button name="find" onClick={this.handleClick}>Find user</button>
                </div>
                {this.state.error ? <>NOT FOUND</> : ''}
                {this.state.userDeleted === true
                 ? 'User deleted' 
                 : <User id={id} name={name} age={age} deleteUser={this.deleteUser}/>}
            </>
        )}
}

export default AddForm;