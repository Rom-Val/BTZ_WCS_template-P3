const {Router} = require('express');
const { CepagesController } = require('../controllers');

const cepagesRouter = Router();

cepagesRouter.get('', (req, res) => new CepagesController(req, res).getAll());
cepagesRouter.get('/:id', (req, res) => new CepagesController(req, res).getById());
cepagesRouter.post('', (req, res) => new CepagesController(req, res).createCepages())

module.exports = cepagesRouter;