//lodash requirement

//library imports and local imports
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
const _ = require('lodash');
//required mongoose config, ES6 destructuring 
//local variable called mongoose = return result
var {mongoose} = require('./db/mongoose');
//load in todo
var {Todo} = require('./models/todo');
//load in user
var {User} = require('./models/user');

//store express application
var app = express();

//set if app is running on heroku
const port = process.env.PORT || 3000;


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

//GET /TODOS/1234324
//call app.get passing in url 
//url parameter : followed by name (creates id variable on request object)
app.get('/todos/:id', (req, res) => {
    //req.params object with key object pairs
     var id = req.params.id;
    //validate id using isValid
     if (!ObjectID.isValid(id)) {
         return res.status(404).send();
     }
     Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
     }).catch((e) => {
         res.status(400).send();
     })
      //if not valid stop execution function and 
        // 404
     //findbyID 
        //success 
            //if todo - send it back
            // if n todo - send back 404 empty body
        //error
            //400 - and send empty body back

});

app.delete('/todos/:id' , (req, res) => {
    //get the id
    var id = req.params.id;
    //validate the id -> not valid? return 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    //remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
        //success
            //if no doc, send 404
            //if doc send doc back with 200
        //error
            //400 with empty body

});

//
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    //body variable subset of things user passed to us, doesn't let user update anything they choose
    var body = _.pick(req.body, ['text', 'completed']);

    //validate the id -> not valid? return 404
    if (!ObjectID.isValid(id)) {
    return res.status(404).send();
    }

    //update completed at property based on completed property
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    //call to find by id and update
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
        return res.status(404).send();
    }
    res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
});



//listen on a port 
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
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


