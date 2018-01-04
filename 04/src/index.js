import express from 'express';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
// import Promise from 'bluebird';

const app = express(); // run express

app.get('/', (req, res) => {
  let fullname = {
    surname: req.query.fullname.split(' ')[0],
    name: req.query.fullname.split(' ')[1],
    shortName: req.query.fullname.split(' ')[1].split('')[0],
    secondName: req.query.fullname.split(' ')[2],
    shortSecondName: req.query.fullname.split(' ')[2].split('')[0],
  };
   
  res.send(`${fullname.surname} ${fullname.shortName}. ${fullname.shortSecondName}.`);
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

