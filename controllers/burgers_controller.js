const db = require("../models");

module.exports = function(app) {
    app.get('/api/burgers', function(req, res) {
        // burger.all("burgers", function(data, err) {
        //     if (err) throw err;
        //     res.json(data);
        // })
    })

    app.post("/api/burgers", function(req, res) {
        db.Burger.create(req.body).then(function(dbBurger) {
            res.json(dbBurger);
        })
    });

    // app.put("/api/burgers/:id", function(req, res) {
    //     // var condition = "id = " + req.params.id;
    //     // console.log(req.params.id + '  ' + req.body.devoured);
    //     // burger.update({ devoured: req.body.devoured }, condition, function(result) {
    //     //     if (result.changedRows === 0) {
    //     //         return res.status(404).end();
    //     //     }
    //     //     else {
    //     //         res.status(200).end();
    //     //     }
    //     // });
    // });
}

