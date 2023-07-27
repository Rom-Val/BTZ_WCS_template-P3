const {Router} = require('express');
const { WorkshopController } = require('../controllers');

const workshopRouter = Router();

workshopRouter.get('', (req, res) => new WorkshopController(req, res).getAll());
workshopRouter.get('/:id', (req, res) => new WorkshopController(req, res).getById());
workshopRouter.post('', (req, res) => new WorkshopController(req, res).createWorkshop());

module.exports = workshopRouter;