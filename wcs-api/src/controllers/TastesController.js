const { TastesModel } = require("../models");
const BaseController = require("./BaseController");

class TastesController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TastesModel();
    }

    createTastes() {
        this.model
            .insert(this.req.body)
            .then(([result]) => {
                //TODO: insert 3 tastingSheet
               return this.res.status(201).send({
                id:result.insertId
               })
            })
            .catch((err) => {
                console.error(err);
                return this.res.status(500).send({
                    error: err.message,
                });
            });
      
    }
    
    }


module.exports = TastesController;