const router = require("express").Router();
var db = require("../models");
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


// Load index page

//
router.get('/index', ensureAuthenticated, function(req, res) {
    let articles = [{
        title: "My Girthy Chili Recipe",
        body: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "12/05/2016",
        id: 1
    }, {
        title: "Top 10 Under 20",
        body: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
        date: "11/05/1994",
        id: 2
    }, {
        title: "Top 10 Under 20",
        body: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
        date: "11/05/1994",
        id: 2
    }, {
        title: "Top 10 Under 20",
        body: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
        date: "11/05/1994",
        id: 2
    }];
    res.render('pages/index',
     { user: req.user.userName, articles: articles}
     );
});
//






    // index page 
    router.get('/', forwardAuthenticated, function(req, res) {
        let articles = [{
            title: "My Girthy Chili Recipe",
            body: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: "12/05/2016",
            id: 1
        }, {
            title: "Top 10 Under 20",
            body: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
            date: "11/05/1994",
            id: 2
        }, {
            title: "Top 10 Under 20",
            body: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
            date: "11/05/1994",
            id: 2
        }, {
            title: "Top 10 Under 20",
            body: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
            date: "11/05/1994",
            id: 2
        }];
        res.render('pages/welcome',
         { articles: articles }
         );
    });
  
    
    // about page 
    router.get('/write', function(req, res) {
        res.render('pages/write');
    });


    // about page 
    router.get('/article', function(req, res) {

        let articles = {
            title: "My Girthy Chili Recipe",
            body: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: "12/05/2016",
            id: 1
        };

        let comment = [{
                user: "Jimmothy Van Dam",
                body: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                date: "12/05/2016",
                likes: 2,
                id: 1
            },
            {
                user: "Herd of Turtles",
                body: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                date: "02/0/2003",
                likes: 2,
                id: 1
            }
        ]

        res.render('pages/article', { articles: articles, comment });
    });

    // about page 
    router.get('/article/:id', function(req, res) {

        let articles = {
            title: "My Girthy Chili Recipe",
            body: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: "12/05/2016",
            id: 1
        };

        let comment = [{
                user: "Jimmothy Van Dam",
                body: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                date: "12/05/2016",
                likes: 2,
                id: 1
            },
            {
                user: "Herd of Turtles",
                body: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                date: "02/0/2003",
                likes: 2,
                id: 1
            }
        ]

        res.render('pages/article', { articles: articles, comment });
    });

    // about page 
    router.get('/featured', function(req, res) {
        let articles = [{
            title: "My Girthy Chili Recipe",
            body: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: "12/05/2016",
            id: 1
        }, {
            title: "Top 10 Under 20",
            body: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
            date: "11/05/1994",
            id: 2
        }, {
            title: "Top 10 Under 20",
            body: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
            date: "11/05/1994",
            id: 2
        }, {
            title: "Top 10 Under 20",
            body: "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
            date: "11/05/1994",
            id: 2
        }];
        res.render('pages/featured', {articles: articles});
    });

    // Render 404 page for any unmatched routes
    router.get("*", function(req, res) {
        res.send("404");
    });

    module.exports = router;