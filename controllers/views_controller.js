// const express = require("express");
// const router = express.Router();
const db = require("../models");


module.exports = function(app) {
    app.get('/', function(req, res) {
        db.Menu.findAll({}).then(function(dbMenu) {
            res.render("index", {dbMenu});
        });
    });
};

// const express = require("express");
// const router = express.Router();
// const db = require("../models");

// router.get('/', function(req, res) {
//     db.Menu.findAll({}).then(function(dbMenu) {
//         console.log(dbMenu);
//         req.menu = dbMenu;
//         res.render("index", {menu: req.menu} )
//     });
// });

// module.exports = router;