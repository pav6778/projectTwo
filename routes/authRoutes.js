const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const router = require("express").Router();

router.get("/login", function(req, res) { 
  res.render("login");
});

router.get("/register", function(req, res) {
  res.render("register");
});

router.post("/register", function(req, res) {
  const { userName, email, password } = req.body;
  
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      req.body.password = hash;
    });
  });
  let errors = [];
  
  if (!userName || !email || !password) {
    errors.push({ msg: "Please fill in all fields" });
  }
  if (password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters" });
  }
  if (errors.length > 0) {
    res.render("register", {
      errors,
      userName,
      email,
      password
    });
  } else {
    db.User.findOne({
      where: {
        email: email
      }
    }).then(user => {
      if (user) {
        errors.push({
          msg: "Email is already registered"
        });
        res.render("register", {
          errors,
          userName,
          email,
          password
        });
      } else {
        db.User.create({
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password
        }).then(userdb => {
          req.flash("success_msg", "grats! you registered!");
          res.redirect("/users/login");
        });
      }
    });
  }
});
//Login Handle

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/index",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/');
});

module.exports = router

