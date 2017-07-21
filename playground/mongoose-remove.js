const {ObjectID} = require('mongodb');

//load in mongoose file and todo file
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//remove all
// Todo.remove({}).then((result) => {
//     console.log(result);
// })


//Todo.findOneAndRemove
// Todo.findOneAndRemove({_id:'596a18ea9dbdc73904a3558b'}).then((todo) => {

// });


//Todo.findByIdAndRemove
// Todo.findByIdAndRemove('596a18ea9dbdc73904a3558b').then((todo) => {
//     console.log(todo);
// });