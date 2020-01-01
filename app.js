const http = require('http')
const express = require('express');
const exphbs  = require('express-handlebars');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("Hello\n")
}).listen(process.env.PORT)
const app = express();

app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('home');
})

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Server is running at http://localhost:${PORT}`);
})