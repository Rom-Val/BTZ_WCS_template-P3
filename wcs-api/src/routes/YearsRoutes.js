const {Router} = require('express');
const { YearsController } = require('../controllers');

const yearsRouter = Router();

yearsRouter.get('', (req, res) => new YearsController(req, res).getAll());
yearsRouter.get('/:id', (req, res) => new YearsController(req, res).getById());
yearsRouter.post('', (req, res) => new YearsController(req, res).createYears)
module.exports = yearsRouter;