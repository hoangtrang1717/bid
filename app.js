const http = require('http')
const bodyParser = require('body-parser');
const express = require('express');
const exphbs  = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
// const db = require('./queries');
const app = express();

app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs',
  helpers: {
    section: hbs_sections()
}
}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const mainRouter = require('./routes/index')
app.use('/', mainRouter);
//Error
app.use(function (req, res) {
  res.status(404).render('error', { layout: false});
});

app.listen(port);
console.log("Listening on port " + port);