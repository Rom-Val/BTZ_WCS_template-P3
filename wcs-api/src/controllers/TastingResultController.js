const { TastingResultModel } = require("../models");
const BaseController = require("./BaseController");

class TastingResultController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new TastingResultModel();
    }
    
    }


module.exports = TastingResultController;