const {Router} = require('express');
const { FlavorsController } = require('../controllers');

const flavorsRouter = Router();

flavorsRouter.get('', (req, res) => new FlavorsController(req, res).getAll());
flavorsRouter.get('/:id', (req, res) => new FlavorsController(req, res).getById());
flavorsRouter.post('', (req, res) => new FlavorsController(req, res).createFlavors())

module.exports = flavorsRouter;