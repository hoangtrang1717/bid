var express = require("express");
var router = express.Router();
const db = require("../utils/queries");

router.get("/product/:id", async function(req, res) {
  const id = req.params.id 
  const product = await db.load(
    'SELECT * FROM public."PRODUCT" WHERE "PRO_ID" = $1 ', [id]
  );
  const bidder = await db.load('SELECT U."USER_NAME", P."PRESENT_PRICE" FROM public."PRODUCT" P, public."USER" U WHERE P."PRO_ID" = $1 AND P."SELLER_ID" = U."USER_ID"', [id])
  const seller = await db.load('SELECT U."USER_NAME", P."PRESENT_PRICE" FROM public."PRODUCT" P, public."USER" U WHERE P."PRO_ID" = $1 AND P."SELLER_ID" = U."USER_ID"', [id])
  console.log(product.rows)
  res.render("product", {
    product: product.rows,
    bidder: bidder.rows,
    seller: seller.rows
  });
});

router.get("/signin", function(req, res) {
  res.render("signin", {layout: false});
});

router.get("/signup", function(req, res) {
  res.render("signup", {layout: false});
});

router.get("/reset", function(req, res) {
  res.render("reset", {layout: false});
});

module.exports = router;
