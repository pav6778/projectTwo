const router = require("express").Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


// Load index page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

router.get('/dashboard', ensureAuthenticated, (req, res) =>

res.render('dashboard', {
  user: req.user
})
);


module.exports = router;



