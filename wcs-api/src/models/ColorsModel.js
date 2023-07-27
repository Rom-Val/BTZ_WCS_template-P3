const BaseModel = require("./BaseModel");

class ColorsModel extends BaseModel {

    constructor() {
        super('colors')
    }

    insert(colorsData) {
        return this.db.query('INSERT INTO colors (name)  VALUES (?)', [colorsData.name]);
    }
}

module.exports = ColorsModel;