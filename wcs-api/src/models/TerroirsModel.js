const BaseModel = require("./BaseModel");

class TerroirsModel extends BaseModel {

    constructor() {
        super('terroirs')
    }

    insert(terroirsData) {
        return this.db.query('INSERT INTO colors (name)  VALUES (?)', [terroirsData.name]);
    }
}

module.exports = TerroirsModel;