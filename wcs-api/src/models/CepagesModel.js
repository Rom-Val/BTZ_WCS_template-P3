const BaseModel = require("./BaseModel");

class CepagesModel extends BaseModel {

    constructor() {
        super('cepages')
    }

    insert(cepagesData) {
        return this.db.query('INSERT INTO colors (name)  VALUES (?)', [cepagesData.name]);
    }
}

module.exports = CepagesModel;