const BaseModel = require("./BaseModel");

class BottleModel extends BaseModel {

    constructor() {
        super('Bottle')
    }

    insert(bottleData) {
        return this.db.query('INSERT INTO colors (name, color, year, price, quantity)  VALUES (?, ?, ?, ?, ?)', [bottleData.name, bottleData.color, bottleData.year, bottleData.price, bottleData.quantity]);
    }
}

module.exports = BottleModel;