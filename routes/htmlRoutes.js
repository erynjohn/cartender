var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
      res.render("home", { title: "Cartender - Maintenance Reminders made Easy"})
  });

  app.get("/garage", function(req, res) {
    res.render("garage", {title: "Cartender - My Garage"});
  })
  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.vehicle.findOne({ where: { id: req.params.id } }).then(function (dbvehicle) {
      res.render("example", {
        example: dbvehicle
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
