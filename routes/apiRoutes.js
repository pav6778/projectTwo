var db = require("../models");

module.exports = function(app) {
    // Get all examples
    //   app.get("/api/examples", function(req, res) {
    //     db.Example.findAll({}).then(function(dbExamples) {
    //       res.json(dbExamples);
    //     });
    //   });

    //   // Create a new example
    //   app.post("/api/examples", function(req, res) {
    //     db.Example.create(req.body).then(function(dbExample) {
    //       res.json(dbExample);
    //     });
    //   });

    //   // Delete an example by id
    //   app.delete("/api/examples/:id", function(req, res) {
    //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
    //       res.json(dbExample);
    //     });
    //   });
    // };

    app.get("/api/articles", function(req, res) {
        db.Articles.findall({}).then(function(articleDB) {
            res.json(articleDB);
        });
    });



    app.post("/api/articles", function(req, res) {



        return User.create({

                givenName: req.body.givenName,
                surName: req.body.surName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                ownerId: req.user.customData._id,
                notes: req.body.notes

            }, {
                returning: true
            })
            .then(function(user) {
                res.send(user);
            })
            .catch(function(err) {
                res.send(err);
            });;


        db.Articles.create({
            title: req.body.title,
            body: req.body.body
        }).then(function(articleDB) {
            res.json(articleDB);
        });
    })
};