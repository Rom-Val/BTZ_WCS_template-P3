const { Router } = require("express");
const { TastingResultController } = require('../controllers');

const tastingResultRouter = Router();

tastingResultRouter.get('', (req, res) => new TastingResultController(req, res).getAll());

tastingResultRouter.get('/:id', (req, res) => new TastingResultController(req, res).getById());


module.exports = tastingResultRouter;