var db = require("../models");
var bcrypt = require("bcryptjs")
var passport = require('passport')


module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get('/dashboard', (req, res) => res.render("dashboard"))

    app.get('/login', (req, res) => res.render("login"))

    app.get('/register', function(req, res) {

    res.render('register')
    })
    
    app.post('/register', function(req, res) {
        const {userName, email, password} = req.body;

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw err;
                req.body.password = hash
            })
        })
        let errors = [];
        
        if(!userName || !email || !password) {
            errors.push({msg: "Please fill in all fields"});
        }
        if(password.length < 6) {
            errors.push({msg: 'Password should be at least 6 characters'});
        }
        if(errors.length > 0) {

         
    res.render('register', {
    errors,
    userName,
    email,
    password
    });
    } else {
    db.User.findOne({ where: {
        email: email}
    }).then(user => {
        if(user) {
            errors.push({
                msg: "Email is already registered"
            })
            res.render('register', {
                errors,
                userName,
                email,
                password
            });
        } else {
            db.User.create({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
            }).then(userdb => {
                req.flash('success_msg', 'grats! you registered!')
                res.redirect('/login')
            })
        }
    });

    }
});
  //Login Handle
  app.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/dashboard',
        failureFlash: true
    })(req, res, next);
  })
    
    
    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};



