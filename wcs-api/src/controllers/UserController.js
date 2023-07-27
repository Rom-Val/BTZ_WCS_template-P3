const { UserModel } = require("../models");
const BaseController = require("./BaseController");

class UserController extends BaseController {

    constructor(req, res) {
        super(req, res);
        this.model = new UserModel();
    }

    createUser() {
        // this.sendJson({ ok : "route ok"})
        const { date, firstname, lastname, age, mail, password } = this.req.body;
        // CHECK NAME AND AGE //
        if(!firstname || !age) {
            return this.res.status(400).send ({ error : "Please specify both your name and your age"});
        }

        this.model
            .insert ({ date, firstname, lastname, age, mail, password, })
            .then(([result]) => {
                console.log(result)
               return this.res.status(201).send({ id: result.insertId, date, firstname, lastname, age, mail, password })
            })
            .catch((err) => {
                console.error(err);
                return this.res.status(500).send({
                    error: err.message,
                });
            });
      
    }

    updateUser() {
        const { date, firstname, lastname, age, mail, password } = this.req.body;
        console.log(this.req.body);
      
        const id = this.req.params.id
        this.model.updateUser({ date, firstname, lastname, age, mail, password }, id)
          .then(([result]) => {
            if (result.affectedRows === 0) {
              this.res.status(404).send("Not Found");
            } else {
              this.res.sendStatus(204);
            }
          })
          .catch((err) => {
            this.res.status(500).send("Error updating the user");
            console.log(err);
          });
      }

    deleteUser() {
        const id = this.req.params.id;
        console.log('User ID to delete:', id);
      
        this.model.deleteUser(id)
          .then(([result]) => {
            console.log('Delete result:', result);
            if (result.affectedRows === 0) {
              this.res.status(404).send("Not Found");
            } else {
              this.res.sendStatus(204);
            }
          })
          .catch((err) => {
            console.error('Error deleting the user:', err);
            this.res.status(500).send("Error deleting the user");
          });
      }

};


module.exports = UserController;