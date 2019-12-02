var db = require("../models");

module.exports = function (app) {

    // index page 
    app.get('/', function (req, res) {

        db.Article.findAll({}).then(function (blogDB) {

            articles = blogDB.map(blogDB => blogDB.dataValues);
            userName = "bongoCat" ;
            // userName = null ;

            res.render('pages/index', { userName,  articles: articles });
        });


    });


    // about page 
    app.get('/write', function (req, res) {

        res.render('pages/write',{edit: false, id: {}, articles: {}});
    });


    // about page 
    app.get('/write/:id', function (req, res) {

        db.Article.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (blogDB) {
            console.log(blogDB[0].dataValues);

            res.render('pages/write', { edit: true, id: req.params.id, articles: blogDB[0].dataValues });

        });

    });

    // about page 
    app.get('/article/:id', function (req, res) {

        console.log(req.params.id);

        db.Article.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (blogDB) {
            console.log(blogDB[0]);

            res.render('pages/article', { articles: blogDB[0] });

        });

    });

    // about page 
    app.put('/article/:id', function (req, res) {
        console.log(req.params.id);

        db.Article.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (blogDB) {
            console.log(blogDB[0].dataValues);

            res.render('pages/article', { articles: blogDB[0].dataValues });

        });
    });



    // about page 
    app.get('/featured', function (req, res) {
        res.render('pages/featured');
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.send("404");
    });

};