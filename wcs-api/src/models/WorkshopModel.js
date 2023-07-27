const BaseModel = require("./BaseModel");

class WorkshopModel extends BaseModel {

    constructor() {
        super('Workshop')
    }

    insert(workshopData) {
        return this.db.query('INSERT INTO colors (date, guide, dosage, tasting_result_id)  VALUES (?, ?, ?)', [workshopData.date, workshopData.guide, workshopData.dosage]);
    }
}

module.exports = WorkshopModel;