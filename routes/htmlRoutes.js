var db = require("../models");
var bcrypt = require("bcryptjs")



module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get('/dashboard', (req, res) => res.render("dashboard"))

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
        let errors = [1,2,3,4,5,6];
        
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
            console.log(errors)

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
                
                res.json(userdb)
            })
        }
    });
    }
    })
    
    
    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};



