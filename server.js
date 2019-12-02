require("dotenv").config();
const express = require("express");
const expressLayouts = require('express-ejs-layouts')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')


const db = require("./models");

const app = express();
//Passport config 
require('./config/passport')(passport)

const PORT = process.env.PORT || 3000;

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Middleware

app.use(express.json());
app.use(express.static("public"));
//Express Session
app.use(session({
    secret: 'random-text',
}));
app.use(express.urlencoded({ extended: true }));
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
require('./routes/apiRoutes')(app);
require('./routes/authRoutes')(app);
require('./routes/htmlRoutes')(app);

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