const users = require('./db');
var md5 = require('md5')

const getUsers = function() {
    return users;
}

const createUser = function(data) {
    const futureId = users.length + 1;
    const user = {
        id: futureId,
        firstName: data.firstName,
        lastName: data.lastName,
        password: md5(data.password)
    }
    users.push(user);
}

module.exports = {
    getUsers,
    createUser
}