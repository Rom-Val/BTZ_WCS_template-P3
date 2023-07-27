const { BottlePerCepageModel } = require("../models");
const BaseController = require("./BaseController");

class BottlePerCepageController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new BottlePerCepageModel();
    }


}

module.exports = BottlePerCepageController;