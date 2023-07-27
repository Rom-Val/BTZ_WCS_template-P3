const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {

    constructor() {
        super('users')
    }

    insert(userData) {
        return this.db.query('INSERT INTO users (role_id, date, firstname, lastname, age, mail, password)  VALUES (2, ?, ?, ?, ?, ?, ?)', [ userData.date, userData.firstname, userData.lastname, userData.age, userData.mail, userData.password]);
    }

    deleteUser(id) {
        return this.db.query('DELETE FROM users WHERE id = ?', [id])
    }

    updateUser(userData, id) {
        return this.db.query('UPDATE users SET date = ?, firstname = ?, lastname=?, age = ?, mail = ?, password = ? WHERE id = ?', [userData.date, userData.firstname, userData.lastname, userData.age, userData.mail, userData.password, id]);
    }
}

module.exports = UserModel;