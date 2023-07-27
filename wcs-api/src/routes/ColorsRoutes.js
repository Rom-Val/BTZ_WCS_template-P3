const {Router} = require('express');
const { ColorsController } = require('../controllers');

const colorsRouter = Router();

colorsRouter.get('', (req, res) => new ColorsController(req, res).getAll());
colorsRouter.get('/:id', (req, res) => new ColorsController(req, res).getById());
colorsRouter.post('', (req, res) => new ColorsController(req, res).createColors());


module.exports = colorsRouter;