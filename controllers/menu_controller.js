const db = require("../models");

module.exports = function(app) {
    app.post("/api/menu", function(req, res) {
        db.Menu.create(req.body).then(function(dbMenu) {
            res.json(dbMenu);
        })
    });
}
