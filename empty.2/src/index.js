// 02 Pokemon_API
import express from 'express';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
// import Promise from 'bluebird';

const app = express(); // run express

function sum(a = 0, b = 0) {
  return (a + b);
}

app.get('/', (req, res) => {
  const a = +req.query.a;
  let b = req.query.b;
  if (!a) {
    res.send('0');
  }
  console.log(b);
  (b !== undefined) ? b = +req.query.b : b = 0;
  const summa = sum(a, b);

  res.send(`${summa}`);
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

