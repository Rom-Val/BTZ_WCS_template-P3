const { SelectForUserModel } = require("../models");
const BaseController = require("./BaseController");

class SelectForUserController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new SelectForUserModel();
    }
    

}

module.exports = SelectForUserController;