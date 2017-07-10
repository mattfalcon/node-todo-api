// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//find one and update
//arguments  filter- target docmument to update, update, options(), callback
    //SET
    // db.collection('Todos').findOneAndUpdate({
    //     name: 'Jen', 
    // }, {
    //     $set: {
    //         age: 25
    //     }
    //     //returns updated document
    //     }, { returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    //INC
       db.collection('Todos').findOneAndUpdate({
           name: 'Kara',
       }, {
           $inc: {
               age: -5
           }
       }, {
           returnOriginal: false
       }).then((result) => {
           console.log(result)
       });

  // db.close();
});