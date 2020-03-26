const db = require("../models");

module.exports = function(app) {
    app.get('/api/burgers', function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
        });
    })

    app.post("/api/burgers", function(req, res) {
        db.Burger.create(req.body).then(function(dbBurger) {
            res.json(dbBurger);
        })
    });

    app.put("/api/burgers/:id", function(req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.end();
        })
        
        // var condition = "id = " + req.params.id;
        // console.log(req.params.id + '  ' + req.body.devoured);
        // burger.update({ devoured: req.body.devoured }, condition, function(result) {
        //     if (result.changedRows === 0) {
        //         return res.status(404).end();
        //     }
        //     else {
        //         res.status(200).end();
        //     }
        // });
    });
}

