const BaseModel = require("./BaseModel");

class OperatorsModel extends BaseModel {

    constructor() {
        super('operators')
    }

    insert(operatorsData) {
        return this.db.query('INSERT INTO colors (name)  VALUES (?)', [operatorsData.name]);
    }
}

module.exports = OperatorsModel;