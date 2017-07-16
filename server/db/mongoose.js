var mongoose = require('mongoose');

//connect to database 
//which promise library we want to use built in promise library
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {mongoose};