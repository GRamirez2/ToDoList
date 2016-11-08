/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var todo = require('../models/todo.js');

router.get('/', function (req, res) {
	res.redirect('/todo');
});

router.get('/todo', function (req, res) {
	todo.all(function (data) {
		var hbsObject = { todo: data };
		// console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/todo/create', function (req, res) {
	// console.log("name="+req.body.name)
	// console.log("complete="+req.body.complete)
	todo.create(['name', 'complete'], [req.body.name, req.body.complete], function () {
		res.redirect('/todo');
	});
});

router.put('/todo/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	todo.update({ complete: req.body.complete }, condition, function () {
		res.redirect('/todo');
	});
});

router.delete('/todo/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;
	console.log("this is the controller delete function"+condition)

	todo.delete(condition, function () {
		res.redirect('/todo');
	});
});

module.exports = router;
