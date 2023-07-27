const {Router} = require('express');
const { BottleController } = require('../controllers');

const bottleRouter = Router();

bottleRouter.get('', (req, res) => new BottleController(req, res).getAll());
bottleRouter.get('/:id', (req, res) => new BottleController(req, res).getById());
bottleRouter.post('', (req, res) => new BottleController(req, res).createBottle())

module.exports = bottleRouter;