const {ObjectID} = require('mongodb');

//load in mongoose file and todo file
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//=============if valid======================
// var id = '596a18ea9dbdc73904a3558b';

// if (!ObjectId.isValid(id)) {
//     console.log('ID not valid');
// }



//================QUERIES============================
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// //returns one document at most
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// //findbyID
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

//==========QUERIES USERS======================
//two callbacks first when promise gets resolved, 2nd when promise gets rejected
User.findById('5968c7a83b37f53478a4b0bf').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});