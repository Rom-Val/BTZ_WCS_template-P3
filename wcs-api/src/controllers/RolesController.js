const { RolesModel } = require("../models");
const BaseController = require("./BaseController");

class RolesController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new RolesModel();
    }

    createRoles() {
        // this.sendJson({ ok : "route ok"})
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

module.exports = RolesController;