const {Router} = require('express');
const { SelectForUserController } = require('../controllers');

const selectForUserRouter = Router();

selectForUserRouter.get('', (req, res) => new SelectForUserController(req, res).getAll());
selectForUserRouter.get('/:id', (req, res) => new SelectForUserController(req, res).getById());
selectForUserRouter.post('', (req, res) => new SelectForUserController(req, res).createYears);

module.exports = selectForUserRouter;