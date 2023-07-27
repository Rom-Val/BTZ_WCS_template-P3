const { BottleModel } = require("../models");
const BaseController = require("./BaseController");

class BottleController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new BottleModel();
    }

    createBottle() {
        this.sendJson({ ok : "route ok"})
        const { name, color, year, price, quantity } = this.req.body;

        this.model
            .insert ({ name })
            .then((result) => {
               return this.res.status(201).send({ id: result.insertId, name, color, year, price, quantity })
            })
            .catch((err) => {
                console.error(err);
                return this.res.status(500).send({
                    error: err.message,
                });
            });
      
    }

}

module.exports = BottleController;