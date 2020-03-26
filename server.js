const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
require("./controllers/burgers_controller")(app);
require("./controllers/menu_controller")(app);
require("./controllers/views_controller")(app);
// const routes = require('./controllers/views_controller');
// app.use(routes);

//{ force: true } <- inside sync to run schema and seeds everytime program starts
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
