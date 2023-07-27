const {Router} = require('express');
const { OperatorsController } = require('../controllers');

const operatorsRouter = Router();

operatorsRouter.get('', (req, res) => new OperatorsController(req, res).getAll());
operatorsRouter.get('/:id', (req, res) => new OperatorsController(req, res).getById());
operatorsRouter.post('', (req, res) => new OperatorsController(req, res).createOperators())


module.exports = operatorsRouter;