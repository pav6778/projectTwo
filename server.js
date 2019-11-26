require("dotenv").config();
var express = require("express");
var expressLayouts = require('express-ejs-layouts')
var flash = require('connect-flash')
var session = require('express-session')
var passport = require('passport')

var db = require("./models");

//Passport config 
require('./config/passport')(passport)
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
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
//Connect Flash
app.use(flash());

//Global variables
app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error'); 
    next();
})

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