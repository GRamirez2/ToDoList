/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var todo = {
	all: function (cb) {
		orm.all('tasks', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('tasks', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update('tasks', objColVals, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		orm.delete('tasks', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = todo;
