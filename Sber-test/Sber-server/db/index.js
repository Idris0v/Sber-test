import users from './db';

exports.connect = function () {
    users = require('./db')
}

exports.getPhrase = function (name) {
    if (!users[name]) {
        throw new Error('Eroorrrrr')
    }

    return users;
}