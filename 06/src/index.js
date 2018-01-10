// 06 MongoDb

import express from 'express';
// import fetch from 'isomorphic-fetch';
// import _ from 'lodash';
// import Promise from 'bluebird';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Pet from './models/Pet';
import User from './models/User';
import saveDataInDb from './saveDataInDb';
import isAdmin from './middlewares/isAdmin';

// mongoose.Promise = Promise;
const dbURL = 'mongodb://balabukha:86yerdna@ds245687.mlab.com:45687/balabukah';
mongoose.connect(dbURL);

const app = express(); // run express

// run bodyParser
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// app.use(isAdmin);

// User.find() - обращается самостоятельно к базе данных и выбирает все нужные значения
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Pet.find() - обращается самостоятельно к базе данных и выбирает все нужные значения
app.get('/pets', async (req, res) => {
  // .populate('owner') - бегает по БД и ищет ref который мы указали с schema.
  const pets = await Pet.find().populate('owner');
  res.send(pets);
});


app.post('/data', async (req, res) => {
  const data = req.body;
  if (!data.user) return res.status(400).send('user is required');
  if (!data.pets) data.pets = [];
  const user = await User.findOne({
    name: data.user.name,
  });
  if (user) return res.status(400).send('User is exists');
  try {
    const result = await saveDataInDb(data);
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get('/clear', isAdmin, async (req, res) => {
  await User.remove({});
  await Pet.remove({});
  return res.send('ok');
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

