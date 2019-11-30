var db = require("../models");

module.exports = function (app) {

    // Get all articles
    app.get("/api/articles", function (req, res) {
        db.Articles.findall({}).then(function (articleDB) {
            res.json(articleDB);
        });
    });
    // Get all of user's articles
    app.get("/api/articles/:user", function (req, res) {
        db.Articles.findall({}).then(function (articleDB) {
            res.json(articleDB);
        });
    });

    // Get article based on ID
    app.get("/api/article/:id", function (req, res) {
        db.Articles.findall({}).then(function (articleDB) {
            res.json(articleDB);
        });
    });

    // Delete article based on ID
    app.delete("/api/article/:id", function (req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
            res.json(dbExample);
        });
    });
};

// Add article to database

app.get("/api/articles/:user", function (req, res) {
    db.Articles.findall({}).then(function (articleDB) {
        res.json(articleDB);
    });
});

// author: DataTypes.STRING,
// title: DataTypes.STRING,
// body: DataTypes.TEXT,
// likes: DataTypes.INTEGER,
// user_liked: DataTypes.STRING,
// comments: DataTypes.STRING


app.post("/api/articles", function (req, res) {
    db.Articles.create({
        title: req.body.title,
        body: req.body.body
    }).then(function (articleDB) {
        res.json(articleDB);
    });
})
};