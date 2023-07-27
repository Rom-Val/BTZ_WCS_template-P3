const { WorkshopModel } = require("../models");
const BaseController = require("./BaseController");

class WorkshopController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new WorkshopModel();
    }

    createWorkshop() {
        this.sendJson({ ok : "route ok"})
        const { label } = this.req.body;

        this.model
            .insert ({ label })
            .then((result) => {
               return this.res.status(201).send({ id: result.insertId, date, guide, dosage })
            })
            .catch((err) => {
                console.error(err);
                return this.res.status(500).send({
                    error: err.message,
                });
            });
      
    }
    

}

module.exports = WorkshopController;