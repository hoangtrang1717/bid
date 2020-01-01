const http = require('http')
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);

app.get('/', function(req, res) {
    res.render('home');
})
