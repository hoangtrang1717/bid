const http = require('http')
const bodyParser = require('body-parser');
const express = require('express');
var session  = require('express-session');
const exphbs  = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
var helpers = require('handlebars-helpers')();
var passport = require('passport');
var flash    = require('connect-flash');

const app = express();

app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs',
  layoutsDir: __dirname + '/views/layouts/',
  helpers: {
    section: hbs_sections()
}
}));

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use(session({
  secret : "secret",
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 1000*60*10000
  }
}))

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const mainRouter = require('./routes/index')
app.use('/', mainRouter);

//Error
app.use(function(req, res) {
  res.status(404).render("error", { layout: false });
});

app.listen(port);
console.log("Listening on port " + port);
