import React, {
    Component
} from 'react';

import {
    addUser
} from '../controller';

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputName: "",
            inputAge: "",
            placeholder: '',
            userAdded: false
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleClick = (event) => {
        const {
            inputName,
            inputAge
        } = this.state;

        inputName && inputAge === '' ? alert('Enter your all data!') : this.addUser(inputName, inputAge)
    }

    addUser = (name, age) => {
        addUser(name, age)
            .then(res => {
                this.setState({
                    userAdded: true
                })
            });

    }

    render() {
        return (
            <div className="">
                <input type="text" className="Input" placeholder="Your name.." name="inputName" onChange={this.handleChange} />
                <input type="number" className="Input" placeholder="Your age.." name="inputAge" onChange={this.handleChange} />
                <button className="Button" onClick={this.handleClick}>Add User</button>
                <div>
                    {this.state.userAdded ? <p>User added!</p> : ''}
                </div>
            </div>
        );
    }
}

export default AddForm;