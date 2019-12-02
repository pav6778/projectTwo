var db = require("../models");

module.exports = function (app) {

    // index page 
    app.get('/', function (req, res) {

        db.Article.findAll({}).then(function (blogDB) {

            articles = blogDB.map(blogDB => blogDB.dataValues);
            // userName = "bongoCat" ;
            // req.user.userName = "bongoCat";
            
          (typeof(req.user) != "undefined") ? userName = req.user.userName : userName = null;

            res.render('pages/index', { userName,  id: 0,  articles: articles });
        });
    });


    // about page 
    app.get('/write', function (req, res) {
        userName = "bongoCat" ;
        // userName = null ;
        res.render('pages/write',{  userName,edit: false, id: 0, articles: {}});
    });


    // about page 
    app.get('/write/:id', function (req, res) {
        userName = "bongoCat" ;
        // userName = null ;
        db.Article.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (blogDB) {
            console.log(blogDB[0].dataValues);
            (typeof(req.user) != "undefined") ? userName = req.user.userName : userName = null;
            res.render('pages/write', { userName, edit: true, id: req.params.id, articles: blogDB[0].dataValues });
        });
    });

    // about page 
    app.get('/article/:id', function (req, res) {
        userName = "bongoCat" ;
        // userName = null ;
        console.log(req.params.id);

        db.Article.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (blogDB) {
            console.log(blogDB[0]);
            (typeof(req.user) != "undefined") ? userName = req.user.userName : userName = null;
            res.render('pages/article', { userName,  id:req.params.id, articles: blogDB[0] });
        });
    });

    // about page 
    app.put('/article/:id', function (req, res) {

        userName = "bongoCat" ;
        // userName = null ;
        console.log(req.params.id);

        db.Article.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (blogDB) {
            console.log(blogDB[0].dataValues);
            (typeof(req.user) != "undefined") ? userName = req.user.userName : userName = null;
            res.render('pages/article', { userName, id:req.params.id,  articles: blogDB[0].dataValues });

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