const BaseModel = require("./BaseModel");

class FlavorsModel extends BaseModel {

    constructor() {
        super('flavors')
    }

    insert(aromasData) {
        return this.db.query('INSERT INTO flavors (name)  VALUES (?)', [FlavorsData.name]);
    }
}

module.exports = FlavorsModel;