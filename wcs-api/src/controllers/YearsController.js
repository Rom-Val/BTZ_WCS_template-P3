const { YearsModel } = require("../models");
const BaseController = require("./BaseController");

class YearsController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new YearsModel();
    }

    createYears() {
        // this.sendJson({ ok : "route ok"})
        const { label } = this.req.body;

        this.model
            .insert ({ label })
            .then((result) => {
               return this.res.status(201).send({ id: result.insertId, label })
            })
            .catch((err) => {
                console.error(err);
                return this.res.status(500).send({
                    error: err.message,
                });
            });
      
    }
    

}

module.exports = YearsController;