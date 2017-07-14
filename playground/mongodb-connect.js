//allows to connect to server
// const MongoClient = require('mongodb').MongoClient;
//object destructuring, lets you pull out properties from an object into a variable
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


//==============EXAMPLE OF DESTRUCTURING ==================================
// var user = {name: 'matt', age: 34};
// var {name} = user;
// console.log(name);

//connection method, 1st argument is a string of local host url and db (no need to create database first
//, 2nd callback function
MongoClient.connect('mongodb://localhost:27017/zoo', (err, db) => {
    if (err) {
        //return just prevents from rest of function continuing (alternative is to add else clause)
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //adding data to collection by calling db.collection
    //insertOne inserts a new document into collection takes 2 arguments 
    //1. key value pairs, 2. callback function 
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert todo', err)  
    //     }
    //     //pretty pring something to screen ops attribute stores all inserts
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

//insert new doc into users (name, age, location)
// db.collection('Todos').insertOne({
//     name: 'Matt',
//     age: '34',
//     location: 'Houston'
// }, (err, result) => {
//     if (err) {
//         return console.log('Unable to insert todo', err)
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2))
//     console.log(result.ops[0]._id.getTimestamp());
// })
    db.close();
});