const router = require("express").Router();
var db = require("../models");
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');






module.exports = function (app) {

    // index page 
    app.get('/', function (req, res) {

        (typeof(req.user) != "undefined") ? userName = req.user.userName : userName = null; 
        
        db.Article.findAll({}).then(function (blogDB) {
            
            articles = blogDB.map(blogDB => blogDB.dataValues);

            res.render('pages/index', {userName: userName,  id: 0,  articles: articles });
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

}