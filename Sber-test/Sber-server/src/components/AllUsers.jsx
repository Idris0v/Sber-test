import React, { Component } from 'react';

import { getAllUsers } from "../controller";
import User from './User';
import { deleteUser } from '../controller';


export default class Users extends Component {
    state = {
        users: [],
        lastDeleted: "",
        error: false
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        getAllUsers()
            .then(res => {
                if (res !== undefined)
                    this.setState({
                        users: res,
                        error: false
                    })
                
            })
            .catch(this.setState({
                error: true
            }))
    }

    deleteUser = (id) => {
        deleteUser(id)
            .then(res => {
                this.getUsers();
            })
            .catch(this.setState({
                error: true
            }))
    }

    renderUsers = (users) => {


        if (users === undefined)
            return;

        return users.map(item => {
            const { id, name, age } = item;
            return (
                <User key={id} id={id} name={name} age={age} deleteUser={this.deleteUser} />
            )
        })
    }

    render() {
        const { users, error } = this.state;

        const userList = this.renderUsers(users);

        return (

            <div>
                <h3>All users</h3>
                {userList}
            </div>
        )
    }
}