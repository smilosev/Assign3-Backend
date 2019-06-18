var express = require('express');
var router = express.Router();

var messages = [
  {
    "id": "1",
    "from": "Stefan",
    "message": "This is the initial message"
  },
  {
    "id": "2",
    "from": "Test",
    "message": "How are you today?"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(req.params.id);
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(messages));
});

router.post('/', function(req, res, next) {
  const newMessage = req.body
  messages.push(newMessage)
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(newMessage));
});

router.delete('/:id', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const id = req.params.id;
  let i = 0;
  for(message of messages) {
    if (message.id === id) {
      messages.splice(i, 1);
      res.send(JSON.stringify(message));
    }
    i++;  
  }
  res.send("Message not found.")
});



module.exports = router;
