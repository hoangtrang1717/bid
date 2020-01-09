var express = require("express");
var router = express.Router();
const db = require("../utils/queries");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var passport = require("passport");
const expressValidator = require("express-validator");

require("../config/passport");

router.get("/", async function(req, res) {
  const endSoon = await db.load(
    'SELECT * FROM public."PRODUCT" ORDER BY "PRO_END" asc'
  );
  const highBid = await db.load(
    'SELECT * FROM public."PRODUCT" ORDER BY "BID_COUNT" DESC'
  );
  const highPrice = await db.load(
    'SELECT * FROM public."PRODUCT" ORDER BY "PRESENT_PRICE" DESC'
  );
  const category = await db.load('SELECT * FROM public."CATEGORY"');
  if (req.isAuthenticated() && req.user.USER_TYPE === "SELLER") {
    res.render("seller");
  }
  if (req.isAuthenticated() && req.user.USER_TYPE === "USER") {
    res.render("homeUser");
  }
  if (req.isAuthenticated() && req.user.USER_TYPE === "ADMIN") {
    res.render("admin");
  }
  else{
    res.render("home", {
      endSoon: endSoon.rows.slice(0, 5),
      highBid: highBid.rows.slice(0, 5),
      highPrice: highPrice.rows.slice(0, 5),
      category: category.rows
    });
  }
    
});

router.get("/signin", function(req, res) {
  res.render("signin", { layout: false });
});

router.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: true
  })
);

router.get("/signup", function(req, res) {
  res.render("signup", { layout: false });
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
  })
);

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/seller", function(req, res) {
  res.render("seller");
});

router.get("/reset", function(req, res) {
  res.render("reset", { layout: false });
});

router.get("/product/:id", async function(req, res) {
  const id = req.params.id;
  const product = await db.detail(
    'SELECT * FROM public."PRODUCT" WHERE "PRO_ID" = $1 ',
    id
  );
  const bidder = await db.detail(
    'SELECT U."USER_NAME", P."PRESENT_PRICE" FROM public."PRODUCT" P, public."USER" U WHERE P."PRO_ID" = $1 AND P."USER_ID" = U."USER_ID"',
    id
  );

  const seller = await db.detail(
    'SELECT U."USER_NAME", U."USER_AVA", P."PRESENT_PRICE" FROM public."PRODUCT" P, public."USER" U WHERE P."PRO_ID" = $1 AND P."SELLER_ID" = U."USER_ID"',
    id
  );
  const relativeProduct = await db.detail(
    'SELECT * FROM public."PRODUCT" WHERE "CATEGORY" = $1 ',
    product.rows[0].CATEGORY
  );
  const category = await db.load('SELECT * FROM public."CATEGORY"');
  res.render("product", {
    product: product.rows[0],
    bidder: bidder.rows[0],
    seller: seller.rows[0],
    relativeProduct: relativeProduct.rows.splice(0, 5),
    category: category.rows
  });
});

router.get("/:id", async function(req, res) {
  const id = req.params.id;
  const products = await db.detail(
    'SELECT * FROM public."PRODUCT" WHERE "CATEGORY" = $1 ',
    id
  );
  const cate = await db.detail(
    'SELECT * FROM public."CATEGORY" WHERE "CAT_ID" = $1 ',
    id
  );
  const category = await db.load('SELECT * FROM public."CATEGORY"');
  res.render("category", {
    products: products.rows,
    cate: cate.rows[0],
    category: category.rows
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

module.exports = router;
