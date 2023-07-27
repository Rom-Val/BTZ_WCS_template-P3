const { Router } = require("express");
const {TastingSheetController } = require('../controllers');

const tastingSheetRouter = Router();

tastingSheetRouter.get('', (req, res) => new TastingSheetController(req, res).getAll());
tastingSheetRouter.get('/:id', (req, res) => new TastingSheetController(req, res).getById());
tastingSheetRouter.post('', (req, res) => new TastingSheetController(req, res).createTastingSheet());


tastingSheetRouter.put('/:id', (req, res) => new TastingSheetController(req, res).updateTastingSheet());

module.exports = tastingSheetRouter;