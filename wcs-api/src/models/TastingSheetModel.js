const BaseModel = require("./BaseModel");

class TastingSheetModel extends BaseModel {

    constructor() {
        super('tasting_sheet')
    }

    insert(tastingSheetData) {
        return this.db.query('INSERT INTO tasting_sheet (date, cepages, notes)  VALUES (?, ?, ?)', [tastingSheetData.date, tastingSheetData.cepages, tastingSheetData.notes]);
    }

    updateTastingSheet(notes, id) {
        return this.db.query('UPDATE tasting_sheet SET notes = ? WHERE id = ?', [notes, id]);
    }

    findNext(taste_id) {
        return this.db.query('SELECT id from tasting_sheet WHERE taste_id = ? AND notes = 0', [taste_id])
    }
}

module.exports = TastingSheetModel;