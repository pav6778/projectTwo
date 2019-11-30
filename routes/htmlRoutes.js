var db = require("../models");

module.exports = function(app) {

    // index page 
    app.get('/', function(req, res) {
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
        res.render('pages/index', { articles: articles });
    });

    // about page 
    app.get('/write', function(req, res) {
        res.render('pages/write');
    });


    // about page 
    app.get('/article', function(req, res) {

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
    app.get('/article/:id', function(req, res) {

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
    app.get('/featured', function(req, res) {
        res.render('pages/featured');
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.send("404");
    });

};