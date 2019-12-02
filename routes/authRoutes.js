const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

module.exports = function (app) {

  app.get("/login", function (req, res) {
    res.render("pages/index");
  });


  app.post("/register", function (req, res) {
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
      console.log("Please fill in all fields" );
      
    }
    if (password.length < 6) {
      errors.push({ msg: "Password should be at least 6 characters" });
      console.log("Password should be at least 6 characters" );

    }
    if (errors.length > 0) {
      db.Article.findAll({
        where: {
          author: userName
        }

      }).then(function (blogDB) {
        let articles = blogDB.map(blogDB => blogDB.dataValues) || {};
        //  articles = blogDB.map(blogDB => blogDB.dataValues);

        res.render('pages/index', { userName: userName, articles: articles });
      });
    } else {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(user => {
        if (user) {
         
          db.Article.findAll({
            where: {
              author: userName
            }

          }).then(function (blogDB) {
            let articles = blogDB.map(blogDB => blogDB.dataValues) || {};
            //  articles = blogDB.map(blogDB => blogDB.dataValues);

            res.render('pages/index', { userName: userName, articles: articles });
          });

        } else {
          db.User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
          }).then(userdb => {
            db.Article.findAll({
              where: {
                author: userName
              }
  
            }).then(function (blogDB) {
              let articles = blogDB.map(blogDB => blogDB.dataValues) || {};
              //  articles = blogDB.map(blogDB => blogDB.dataValues);
  
              res.render('pages/index', { userName: userName, articles: articles });
            });
          });
        }
      });
    }
  });
  //Login Handle

  app.post("/login", (req, res, next) => {
    console.log(req.body)

    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/404",
    })(req, res, next);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });


}