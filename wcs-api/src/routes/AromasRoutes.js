const {Router} = require('express');
const { AromasController } = require('../controllers');

const aromasRouter = Router();

aromasRouter.get('', (req, res) => new AromasController(req, res).getAll());
aromasRouter.get('/:id', (req, res) => new AromasController(req, res).getById());
aromasRouter.post('', (req, res) => new AromasController(req, res).createAromas())

module.exports = aromasRouter;