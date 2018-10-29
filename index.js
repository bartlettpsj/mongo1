// Requires official Node.js MongoDB Driver 3.0.0+
const mongodb = require("mongodb");

const client = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

client.connect(url, function (err, client) {

    if (err) {
        console.log('Error', err);
        return;
    }
    
    const db = client.db("paul");
    const collection = db.collection("test");

    const query = { name: /Bartlett/i };
    const cursor = collection.find(query);
    const res = cursor.toArray();

    res.then(rows => {
        rows.forEach(row => {
            console.log(row);
        })
    });
    
    
    
});
