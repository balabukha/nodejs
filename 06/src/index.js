// 06 MongoDb
// import express from 'express';
// import fetch from 'isomorphic-fetch';
// import _ from 'lodash';
import Promise from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = Promise;
const dbURL = 'mongodb://balabukha:86yerdna@ds245687.mlab.com:45687/balabukah';

mongoose.connect(dbURL);

const Pet = mongoose.model('Pet', {
  type: String,
  name: String,
});

const kitty = new Pet({
  name: 'Nutells',
  type: 'cat',
});

kitty.save()
.then(() => {
  console.log('OK');
})
.catch((err) => {
  console.log('ERR', err);
});

// const app = express(); // run express

// app.get('/', (req, res) => {
//   res.send();
// });

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });

