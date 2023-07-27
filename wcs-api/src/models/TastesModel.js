const BaseModel = require("./BaseModel");

class TasteModel extends BaseModel {

    constructor() {
        super('tastes')
    }

   async insert(tastesData) {
        const [taste] = await this.db.query(`
            INSERT INTO tastes (color_id, terroir_id, cepage_id, user_id, aromas_id, intensity_id, flavors_id) 
            VALUES ( ?, ?, ?, ?, ?, ?, ?)`, 
            [tastesData.color_id, tastesData.terroir_id, tastesData.cepage_id, tastesData.user_id, tastesData.aromas_id, tastesData.intensity_id, tastesData.flavors_id ]
            );
        const [bottles] = await this .db.query(`
            SELECT bottle_per_cepage.id, c.name as cepage FROM bottle_per_cepage
            JOIN cepages as c ON c.id = ?
            WHERE color_id = ?
            AND (intensity_id = ?
                OR cepage_id = ?
                OR terroir_id = ?)
            LIMIT 3 
        `, [tastesData.cepage_id, tastesData.color_id, tastesData.terroir_id, tastesData.cepage_id, tastesData.intensity_id])
         return this .db.query(`
            INSERT INTO tasting_sheet (date, cepages, notes, bottle_per_cepage_id, taste_id)
            VALUES ${bottles.map (function(b){
                return `(
                    NOW(),
                    '${b.cepage}',0,${b.id},${taste.insertId}
                )`
            })}
        `)// .then (([tastingsSheet]) => ({tastingsSheet, taste, ...tastesData}))
    }
}

module.exports = TasteModel;


