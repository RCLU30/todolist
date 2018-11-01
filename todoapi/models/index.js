var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(process.env.TODOAPIDATABASE);
// mongoose.connect('mongodb://localhost/todo-api');


// mongodb://<dbuser>:<dbpassword>@ds147233.mlab.com:47233/todo-list
// mongodb://user:polandspring99@ds147233.mlab.com:47233/todo-list
// dbuser = user
// dbpassword = polandspring99

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");