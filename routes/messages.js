var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const mongo_uri = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-3ugst.mongodb.net';

/* GET users listing. */
router.get('/', function (req, res, next) {
  // Connect to the database
  MongoClient.connect(mongo_uri, function (err, client) {
    assert.equal(null, err);
    if ( err ) throw err;
    console.log("Connected successfully to database");
    const db = client.db('messages');
    const collection = db.collection('initialMessages');
    collection.find({}).toArray(function (err, messages) {
      console.log(messages);
      res.send(JSON.stringify(messages));
    })
  })
});

router.post('/', function (req, res, next) {
  const newMessage = req.body
  console.log(newMessage);
  console.log(newMessage.from);
  // Connect to database
  MongoClient.connect(mongo_uri, function (err, client) {
    assert.equal(null, err);
    if ( err ) throw err;
    console.log("Connected successfully to server");
    const db = client.db('messages');
    const collection = db.collection('initialMessages');
    collection.insertOne({ _id: newMessage.id, from: newMessage.from, message: newMessage.message })
    res.send(JSON.stringify(newMessage));
  })
});

router.delete('/:id', function (req, res) {
  const id = req.params.id;
  //  Connect to database
  MongoClient.connect(mongo_uri, function (err, client) {
    assert.equal(null, err);
    if ( err ) throw err;
    console.log("Connected successfully to server");
    const db = client.db('messages');
    const collection = db.collection('initialMessages');
    collection.deleteOne({ _id: id });
    res.send("Succesfully deleted record with id = " + id);
  })
});

module.exports = router;
