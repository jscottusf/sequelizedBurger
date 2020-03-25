const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', getMenu, getBurgers, renderBurgers);

router.get('/api/burgers', function(req, res) {
    burger.all("burgers", function(data, err) {
        if (err) throw err;
        res.json(data);
    })
})

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(req.params.id + '  ' + req.body.devoured);
    burger.update({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

function getMenu(req, res, next) {
    burger.all("burger_menu", function(data) {
        req.menu = data;
        next();
    })
}

function getBurgers(req, res, next) {
    burger.all("burgers", function(data) {
        req.burger = data;
        next();
    })
}

function renderBurgers(req, res) {
    res.render("index", {
        menu: req.menu,
        burgers: req.burger
    })
}



module.exports = router;