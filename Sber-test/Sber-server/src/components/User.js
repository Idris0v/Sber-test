import React from 'react';



export default function User({ id, name, age, deleteUser }) {
    
    return (
        <div className="card">
            <p className="user">
                Name: {name}
            </p>
            <p className="user">
                Age: {age}
            </p>
            <div>
                <button onClick={() => deleteUser(id)}>Delete user</button>
            </div>
        </div>
    )
}