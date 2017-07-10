// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
//   db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//       console.log(result);
//   });
//   db.collection('Todos').deleteMany({completed: false}).then((result) => {
//       console.log(result);
//   });


  //deleteOne
    // db.collection('Todos').deleteOne({name: 'Matt'}).then((result) => {
    //     console.log(result);
    // });


  //findOneAndDelete
//   db.collection('Todos').findOneAndDelete({name: 'Matt'}).then((result)=>{
//     console.log(result);
//   });
      db.collection('Todos').findOneAndDelete({_id: new ObjectID("5962e5daf8a29e3871b816dd")}).then((result)=>{
    console.log(result);
  });


  // db.close();
});