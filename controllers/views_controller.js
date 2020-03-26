// const express = require("express");
// const router = express.Router();
const db = require("../models");


module.exports = function(app) {
    app.get('/', getMenu, getBurgers, renderBurgers);

    function getMenu(req, res, next) {
        db.Menu.findAll({}).then(function(dbMenu) {
            req.menu = dbMenu;
            next();
        });
    }
    function getBurgers(req, res, next) {
        db.Burger.findAll({}).then(function(dbBurger) {
            req.burger = dbBurger;
            next();
        });
    }

    function renderBurgers(req, res) {
        res.render("index", { menu: req.menu, burgers: req.burger});
    }
};