const BaseModel = require("./BaseModel");

class RolesModel extends BaseModel {

    constructor() {
        super('roles')
    }
    insert(rolesData) {
        return this.db.query('INSERT INTO roles (name)  VALUES (?)', [rolesData.name]);
    }
}

module.exports = RolesModel;