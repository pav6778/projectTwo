var db = require("../models");

module.exports = function(app) {

    // index page 
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    // about page 
    app.get('/write', function(req, res) {
        res.render('pages/write');
    });

    // about page 
    app.get('/article', function(req, res) {
        res.render('pages/article');
    });

    // about page 
    app.get('/featured', function(req, res) {
        res.render('pages/featured');
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.send("404");
    });

};