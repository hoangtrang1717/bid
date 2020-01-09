var express = require("express");
var router = express.Router();
const db = require("../utils/queries");

router.get("../signin", function(req, res) {
    res.render("signin", { layout: false });
  });
  
  router.get("../signup", function(req, res) {
    res.render("signup", { layout: false });
  });
  
  router.get("../reset", function(req, res) {
    res.render("reset", { layout: false });
  });

module.exports = router;
