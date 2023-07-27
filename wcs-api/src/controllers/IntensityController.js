const { IntensityModel } = require("../models");
const BaseController = require ('./BaseController');

class IntensityController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new IntensityModel();
    }
}

module.exports = IntensityController;