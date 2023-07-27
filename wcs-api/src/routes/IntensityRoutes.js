const {Router} = require('express');
const { IntensityController } = require('../controllers');

const IntensityRouter = Router();

IntensityRouter.get('', (req, res) => new IntensityController(req, res).getAll());
IntensityRouter.get('/:id', (req, res) => new IntensityController(req, res).getById());

module.exports = IntensityRouter;