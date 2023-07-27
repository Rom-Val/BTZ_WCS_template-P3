const BaseModel = require("./BaseModel");

class YearsModel extends BaseModel {

    constructor() {
        super('years')
    }

    insert(yearsData) {
        return this.db.query('INSERT INTO users (label)  VALUES (?)', [yearsData.label]);
    }
}

module.exports = YearsModel;