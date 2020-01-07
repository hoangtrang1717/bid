var express = require("express");
var router = express.Router();
const db = require("../utils/queries");

router.get("/", async function(req, res) {
  const endSoon = await db.load('SELECT * FROM public."PRODUCT"');
  const highBid = await db.load('SELECT * FROM public."PRODUCT"');
  const highPrice = await db.load(
    'SELECT * FROM public."PRODUCT" ORDER BY "PRESENT_PRICE" DESC'
  );
  res.render("home", {
    endSoon: endSoon.rows.slice(0, 5),
    highBid: highBid.rows.slice(0, 5),
    highPrice: highPrice.rows.slice(0, 5)
  });
});

module.exports = router;
