var db = require("../models");
var express = require('express');

var router = express.Router();

router.get('/register', (req, res)=> {
    res.render('register')
});

router.post('/register', function(req, res) {
const {userName, email, password} = req.body;
let errors = [];

if(!userName || !email || !password) {
errors.push({msg: "Please fill in all fields"});
}
if(password.length < 6) {
errors.push({msg: 'Password should be at least 6 characters'});
}
if(errors.length > 0) {
    console.log(errors)
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


module.exports = router;