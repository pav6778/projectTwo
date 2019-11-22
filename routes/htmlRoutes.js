var db = require("../models");


module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("index.html");
    });

    app.get('/register', function(req, res) {
        res.render('register')
    });

    app.post('/register', function(req, res) {
        db.User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
        }).then(function(userdb) {

            res.json(userdb)
        })
    })

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};