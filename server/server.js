//library imports and local imports
var express = require('express');
var bodyParser = require('body-parser');

//required mongoose config, ES6 destructuring 
//local variable called mongoose = return result
var {mongoose} = require('./db/mongoose');
//load in todo
var {Todo} = require('./models/todo');
//load in user
var {User} = require('./models/user');

//store express application
var app = express();

//configure middleware
app.use(bodyParser.json());


//create resource post http method send resource as body 
//json object as text property
//pass url and callback function
//getting body data sent from client
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) =>{
        res.status(400).send(e);
    });
    //body gets stored by bodyParser
    // console.log(req.body);
});

//list of all todos
app.get('/todos', (req, res) => {
    //return everything without authentication
    //then call takes two functions with all of todos
    Todo.find().then((todos) => {      
    //send information back with object
        res.send({todos});
    //error handler
}, (e) => {
    res.status(400).send(e);
})
})


//listen on a port 
app.listen(3000, () => {
    console.log('Started on port 3000');
})

//server.js export app property = app variable
module.exports = {app};

//============EXAMPLES OF CREATE TODOS==============
// //create instances 
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// //call method on newtodo
// newTodo.save().then((doc) => {
//     console.log('Saved to do', doc);
// }, (e) => {
//     console.log('Unable to save')
// });

// //Second Instance Exercise
// var todotodo = new Todo({
//     text: 'Juniper',
//     completed: 'True'
// });

// todotodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e)
// });
//-----------------------------------------------------


