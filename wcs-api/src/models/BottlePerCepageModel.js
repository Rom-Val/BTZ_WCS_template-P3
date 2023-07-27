const BaseModel = require("./BaseModel");

class BottlePerCepageModel extends BaseModel {

    constructor() {
        super('bottle_per_cepage AS bpc')
    }
    getAll() {
        return this.db
            .query(`
            SELECT bpc.id, bpc.ref, 
            c.name AS cepage,
            t.name AS terroir,
            co.name AS color,
            y.label AS year,
            o.name AS operator,
            i.name AS intensity
            
            FROM ${this.table}
            JOIN cepages c ON c.id = bpc.cepage_id
            JOIN terroirs t ON t.id = bpc.terroir_id
            JOIN colors co ON co.id = bpc.color_id
            JOIN years y ON y.id = bpc.year_id
            JOIN operators o ON o.id = bpc.year_id
            JOIN intensity i ON i.id = bpc.intensity_id
            `)
    }

}

module.exports = BottlePerCepageModel;