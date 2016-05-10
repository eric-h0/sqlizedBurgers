var express        = require('express');
var bodyParser     = require('body-parser');
var path           = require('path');
var exphbs         = require('express-handlebars');
var methodOverride = require('method-override');


var app = express();
app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 3000; 
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Copy app.use boilerplate.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./routing/api-routes.js')(app); 
require('./routing/html-routes.js')(app);

app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
});