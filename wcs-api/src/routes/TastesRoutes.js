const { Router } = require("express");
const { TastesController } = require('../controllers');

const tastesRouter = Router();

tastesRouter.get('', (req, res) => new TastesController(req, res).getAll());
tastesRouter.get('/:id', (req, res) => new TastesController(req, res).getById());
tastesRouter.post('', (req, res) => new TastesController(req, res).createTastes())


module.exports = tastesRouter;