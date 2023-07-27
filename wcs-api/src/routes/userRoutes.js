const {Router} = require('express');
const { UserController } = require('../controllers');

const userRouter = Router();

userRouter.get('', (req, res) => new UserController(req, res).getAll());
userRouter.get('/:id', (req, res) => new UserController(req, res).getById());
userRouter.post('', (req, res) => new UserController(req, res).createUser());
userRouter.delete('/:id', (req, res) => new UserController(req, res).deleteUser());
userRouter.put('/:id', (req, res) => new UserController(req, res).updateUser());

module.exports = userRouter;