db = db.getSiblingDB("messages");
db.initialMessages.drop();
db.initialMessages.insertMany([
{"_id":"1", "from":"Stefan Milosevic","message":"This is the first message!"},
{"_id":"2", "from":"John Smith","message":"Are the initial messages working from MongoDB?"}
]);
