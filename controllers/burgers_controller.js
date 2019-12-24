var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data)
    var hbsObject = {
      burger : data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;