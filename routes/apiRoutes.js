var db = require("../models");

module.exports = function (app) {

    // Get all articles
    app.get("/api/articles", function (req, res) {
        db.Article.findAll({}).then(function (blogDB) {
            res.json(blogDB);
        });
    });

    // Get all of user's articles
    app.get("/api/articles/:user", function (req, res) {
        db.Article.findAll({}).then(function (blogDB) {
            res.json(blogDB);
        });
    });

    // Get article based on ID
    app.get("/api/article/:id", function (req, res) {
        db.Article.findAll({}).then(function (blogDB) {
            res.json(blogDB);
        });
    });

    // Delete article based on ID
    app.delete("/api/article/:id", function (req, res) {
        db.Article.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
            res.json(dbExample);
        });
    });

    // Add article to database
    app.get("/api/articles/:user", function (req, res) {

        db.Article.findAll({}).then(function (blogDB) {
            res.json(blogDB);
        });

    });

 

    // Add likes to total 
    app.post("/api/likes/:id", function (req, res) {
        db.Article.findall({}).then(function (blogDB) {
            res.json(blogDB);
        });
    });

    // author: DataTypes.STRING,
    // title: DataTypes.STRING,
    // body: DataTypes.TEXT,
    // likes: DataTypes.INTEGER,
    // user_liked: DataTypes.STRING,
    // comments: DataTypes.STRING

   // Add likes to total 
   app.post("/api/comments/:id", function (req, res) {


    db.Article.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (blogDB) {

        db.Article.update({
           comments: blogDB[0].dataValues.comments.push(req.body.comment)
          }, {
            where: {
                id: req.params.id
            }
          }).then(function (blogDB) {
            res.json(blogDB);
    
        });
    });

});

    app.post("/api/articles", function (req, res) {

        console.log(req.body.title);
        console.log(req.body.body);
        console.log(req.body.title);

        db.Article.create({
            title: req.body.title,
            body: req.body.body,
            author: req.body.author
        }).then(function (blogDB) {
            res.json(blogDB);
            console.log("Article added");

        });

    })


    app.put("/api/articles/:id", function (req, res) {

        console.log(req.body.title);
        console.log(req.body.body);
        console.log(req.body.title);

        db.Article.update({
            title: req.body.title,
            body: req.body.body,
            author: req.body.author
          }, {
            where: {
                id: req.params.id
            }
          }).then(function (blogDB) {
            res.json(blogDB);
            console.log("Article added");

        });


    })

};

