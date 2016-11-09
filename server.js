
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var methodOverride = require('method-override');



// testing nodemon
var nodemon = require('nodemon');

nodemon.on('start', function () {
  console.log('ToDo App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

// use handlebars as a template maker
app.set('view engine', 'handlebars');

var routes = require('./controllers/todo_controller.js');
app.use('/', routes);

// listening on port 3000
var PORT = 3000;
app.listen(process.env.PORT || PORT);
