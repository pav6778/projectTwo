require("dotenv").config();
var express = require("express");
var expressLayouts = require('express-ejs-layouts')
var flash = require('connect-flash')
// var session = require('express-session')
var db = require("./models");

var app = express();

var PORT = process.env.PORT || 3000;

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//Express Session
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true,
// }));
//Connect Flash
app.use(flash());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

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