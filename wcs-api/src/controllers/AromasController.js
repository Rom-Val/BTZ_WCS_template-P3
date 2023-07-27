const { AromasModel } = require("../models")
const BaseController = require("./BaseController");

class AromasController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new AromasModel();
    }

    createAromas() {
        this.sendJson({ ok : "route ok"})
        const { name } = this.req.body;

        this.model
            .insert ({ name })
            .then((result) => {
               return this.res.status(201).send({ id: result.insertId, name })
            })
            .catch((err) => {
                console.error(err);
                return this.res.status(500).send({
                    error: err.message,
                });
            });
      
    }

}

module.exports = AromasController;