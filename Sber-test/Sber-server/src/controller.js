const url = 'http://localhost:3000';

export const getUser = (id) => {
    return fetch(url + "/getUser", {
            method: "POST",
            //credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({
                id: id
            }),
        })
        .then(res => res.json())
}

export const getAllUsers = async () => {
    const res = await fetch(url + '/getAllUsers');
    return await res.json();
        
}

export const deleteUser = (id) => {
    return fetch(url + "/deleteUser", {
            method: "POST",
            //credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'text/html'
            }),
            body: JSON.stringify({
                id: id
            }),
        })
        .then(res => res.json())
}

export const addUser = (name, age) => {
    return fetch(url + "/addUser", {
            method: "POST",
            //credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({
                name: name,
                age: age
            }),
        })
        .then(res => res.json())
}