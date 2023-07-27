const BaseModel = require("./BaseModel");

class AromasModel extends BaseModel {

    constructor() {
        super('aromas')
    }

    insert(aromasData) {
        return this.db.query('INSERT INTO aromas (name)  VALUES (?)', [aromasData.name]);
    }
}

module.exports = AromasModel;