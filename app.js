const app = require('express')();
app.use(require('body-parser').json());
app.use(require('cors')({ origin: '*', optionsSuccessStatus: 200 }));


// Connect Mongodb and listen on port.
const port = 3000;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbname = 'test';
let collection;

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.error('cannot connect to mongodb');
  } else {
    console.log('mongodb is connected');
    collection = client.db(dbname).collection('users');
  
    app.listen(port, () => console.log(`server is listening on port ${port}`));
  }
});

// APIs
app.get('/:username', (req, res) => {
  collection.findOne({ username: req.params.username },
    { projection: { _id: 0 } },
    (error, result) => res.json(result));
});

app.post('/', (req, res) => {
  collection.findOneAndUpdate({ username: req.body.username },
    { $set: req.body },
    { upsert: true },
    error => res.json(error));
});
