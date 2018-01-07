// 06 MongoDb

import express from 'express';
// import fetch from 'isomorphic-fetch';
// import _ from 'lodash';
// import Promise from 'bluebird';
import mongoose from 'mongoose';

import Pet from './models/Pet';
import User from './models/User';
import saveDataInDb from './saveDataInDb';

// mongoose.Promise = Promise;
const dbURL = 'mongodb://balabukha:86yerdna@ds245687.mlab.com:45687/balabukah';
mongoose.connect(dbURL);

const app = express(); // run express

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.get('/pets', async (req, res) => {
  const pets = await Pet.find();
  res.send(pets);
});

app.post('/data', async (req, res) => {
  const data = req.body;
  saveDataInDb(data);
  res.send(data);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

// const data = {
//   user: {
//     name: 'Andrey',
//   },
//   pets: [
//     {
//       name: 'Nutella',
//       type: 'cat',
//     },
//     {
//       name: 'Motya',
//       type: 'shinshilla',
//     },
//   ],
// };


// const Pet = mongoose.model('Pet', {
//   type: String,
//   name: String,
// });

// const kitty = new Pet({
//   name: 'Nutells',
//   type: 'cat',
// });


// kitty.save()
// .then(() => {
//   console.log('OK');
// })
// .catch((err) => {
//   console.log('ERR', err);
// });

// const app = express(); // run express

// app.get('/', (req, res) => {
//   res.send();
// });

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });

