require("dotenv").config();
var express = require("express");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.set('view engine', 'ejs');

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


// Routes
require("./routes/apiRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;